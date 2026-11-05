#!/usr/bin/env node
/**
 * 从 src/components、src/utils 的 index.ts 同步子组件/方法清单到 .ai/docs *-rules.md
 * 用法（仓库根目录）：
 *   node .ai/skills/sync-ai-docs/scripts/sync-ai-docs-rules.mjs
 *   node .ai/skills/sync-ai-docs/scripts/sync-ai-docs-rules.mjs Input ToolBar
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '../../../../')
const docsDir = path.join(rootDir, '.ai', 'docs')
const filterNames = process.argv.slice(2).map((s) => s.trim()).filter(Boolean)

function getMountedNames(indexPath) {
  if (!fs.existsSync(indexPath)) return []
  const text = fs.readFileSync(indexPath, 'utf8')
  const names = new Set()
  for (const m of text.matchAll(/(\w+)\.(\w+)\s*=\s*\w+/g)) {
    names.add(`${m[1]}.${m[2]}`)
  }
  return [...names].sort()
}

function updateRulesSubSection(rulesPath, mounted) {
  if (!fs.existsSync(rulesPath)) return false
  const text = fs.readFileSync(rulesPath, 'utf8')
  const lines = mounted.map((name) => `- \`${name}\``).join('\n')
  const nextSection = mounted.length ? `## 子组件\n${lines}` : '## 子组件\n- （无子组件挂载）'

  if (!text.includes('## 子组件')) return false

  const replaced = text.replace(/## 子组件\n[\s\S]*?(?=\n## )/, `${nextSection}\n`)
  if (replaced === text) return false
  fs.writeFileSync(rulesPath, replaced, 'utf8')
  return true
}

let updated = 0
for (const kind of ['components', 'utils']) {
  const srcKind = path.join(rootDir, 'src', kind)
  const docKind = path.join(docsDir, kind)
  if (!fs.existsSync(srcKind) || !fs.existsSync(docKind)) continue

  for (const name of fs.readdirSync(srcKind).sort()) {
    if (filterNames.length && !filterNames.includes(name)) continue
    const srcBase = path.join(srcKind, name)
    const docBase = path.join(docKind, name)
    if (!fs.statSync(srcBase).isDirectory() || !fs.existsSync(docBase)) continue

    const mounted = getMountedNames(path.join(srcBase, 'index.ts'))
    const rulesPath = path.join(docBase, `${name}-rules.md`)
    if (updateRulesSubSection(rulesPath, mounted)) {
      console.log(`  ${kind}/${name}: ${mounted.length} entries`)
      updated++
    }
  }
}

console.log(`\nUpdated ${updated} rules files.`)
