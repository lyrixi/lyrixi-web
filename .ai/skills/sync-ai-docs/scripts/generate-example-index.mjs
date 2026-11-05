#!/usr/bin/env node
/**
 * 将 *-example.md 生成为薄索引（代码仅在 demos/，example 只链到 demo 文件）
 * 用法（仓库根目录）：
 *   node .ai/skills/sync-ai-docs/scripts/generate-example-index.mjs
 *   node .ai/skills/sync-ai-docs/scripts/generate-example-index.mjs Button Input
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '../../../../')
const docsDir = path.join(rootDir, '.ai', 'docs')

const filterNames = process.argv.slice(2).map((s) => s.trim()).filter(Boolean)

/** 可选：组件典型写法短片段（非完整 demo） */
const TYPICAL_SNIPPETS = {
  Button: `import { Button, ButtonColor, ButtonVariant } from 'lyrixi-web'

<Button variant={ButtonVariant.filled} color={ButtonColor.primary} radius="m">
  提交
</Button>`
}

function readText(p) {
  try {
    return fs.readFileSync(p, 'utf8')
  } catch {
    return ''
  }
}

function parseRulesDemoDescriptions(rulesPath) {
  const map = new Map()
  const text = readText(rulesPath)
  if (!text) return map

  let inSection = false
  for (const line of text.split('\n')) {
    if (/^## Demo 索引/.test(line)) {
      inSection = true
      continue
    }
    if (inSection && /^## /.test(line)) break
    if (!inSection) continue

    const m = line.match(/`demos\/([^`]+)`(?:\s*[—–-]\s*(.+))?/)
    if (m) map.set(m[1], (m[2] || '').trim())
  }
  return map
}

function parseExampleMeta(examplePath) {
  const text = readText(examplePath)
  const importMatch = text.match(/业务代码引入：(`[^`]+`|.+)/)
  const importLine = importMatch ? importMatch[1].replace(/^`|`$/g, '') : null

  const notes = []
  for (const line of text.split('\n')) {
    if (line.startsWith('_') && line.endsWith('_')) notes.push(line)
  }

  const snippetMatch = text.match(/## 典型写法[\s\S]*?```tsx\n([\s\S]*?)```/)
  const snippet = snippetMatch ? snippetMatch[1].trim() : null

  return { importLine, notes: [...new Set(notes)], snippet }
}

function listDemoFiles(demosDir) {
  if (!fs.existsSync(demosDir)) return []
  return fs
    .readdirSync(demosDir)
    .filter((f) => /\.(tsx|jsx|ts)$/.test(f) && !/^index\.(tsx|ts|jsx)$/.test(f))
    .sort()
}

function defaultImport(name) {
  return `import { ${name} } from 'lyrixi-web'`
}

function inferDemoDescription(file, componentName, rulesDesc) {
  if (rulesDesc) return rulesDesc
  const base = file.replace(/\.(tsx|jsx|ts)$/, '')
  if (base === componentName) return '主示例'
  if (base.startsWith(componentName)) {
    const sub = base.slice(componentName.length)
    if (sub) return `${componentName}.${sub} 子组件示例`
  }
  return '—'
}

function generateExampleMd(options) {
  const { name, srcRel, importLine, demos, descriptions, notes, snippet } = options
  const lines = [
    `# ${name} Example`,
    '',
    `示例源码在 \`demos/\`（由 \`${srcRel}/demos\` 同步）。需要具体写法时 **Read 下表对应 demo 文件**，不要依赖本文件中的旧代码块。`,
    '',
    `业务代码引入：\`${importLine}\``,
    ''
  ]

  if (demos.length === 0) {
    lines.push('_暂无 demo 文件，请查阅 `-rules.md`、`-props.ts` 与源码。_', '')
  } else {
    lines.push('## Demo 索引', '', '| Demo | 说明 |', '|------|------|')
    for (const file of demos) {
      const desc = descriptions.get(file) || '—'
      lines.push(`| [demos/${file}](./demos/${file}) | ${desc} |`)
    }
    lines.push('')
  }

  for (const note of notes) {
    if (!lines.includes(note)) lines.push(note, '')
  }

  if (snippet) {
    lines.push('## 典型写法', '', '```tsx', snippet, '```', '')
  }

  lines.push(
    '## 查阅顺序',
    '',
    `1. \`${name}-props.ts\` — API`,
    `2. \`${name}-rules.md\` — 何时使用、子组件`,
    '3. 上表 `demos/` — 需要片段时再读',
    ''
  )

  return lines.join('\n')
}

function collectDocDirs() {
  const dirs = []
  for (const kind of ['components', 'utils']) {
    const base = path.join(docsDir, kind)
    if (!fs.existsSync(base)) continue
    for (const name of fs.readdirSync(base)) {
      const dir = path.join(base, name)
      if (!fs.statSync(dir).isDirectory()) continue
      if (filterNames.length && !filterNames.includes(name)) continue
      dirs.push({ kind, name, dir, srcRel: `src/${kind}/${name}` })
    }
  }
  return dirs.sort((a, b) => a.name.localeCompare(b.name))
}

function main() {
  let updated = 0
  for (const { kind, name, dir, srcRel } of collectDocDirs()) {
    const examplePath = path.join(dir, `${name}-example.md`)
    if (!fs.existsSync(examplePath)) continue

    const rulesPath = path.join(dir, `${name}-rules.md`)
    const demosDir = path.join(dir, 'demos')
    const rulesDesc = parseRulesDemoDescriptions(rulesPath)
    const meta = parseExampleMeta(examplePath)
    const demos = listDemoFiles(demosDir)

    const descriptions = new Map()
    for (const file of demos) {
      descriptions.set(file, inferDemoDescription(file, name, rulesDesc.get(file)))
    }

    const content = generateExampleMd({
      name,
      srcRel,
      importLine: meta.importLine || defaultImport(name),
      demos,
      descriptions,
      notes: meta.notes,
      snippet: meta.snippet || TYPICAL_SNIPPETS[name]
    })

    fs.writeFileSync(examplePath, content, 'utf8')
    updated++
    console.log(`  ${path.relative(rootDir, examplePath)} (${demos.length} demos)`)
  }

  console.log(`\nUpdated ${updated} example index files.`)
}

main()
