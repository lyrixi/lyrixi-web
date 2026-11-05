/**
 * 按 .ai/rules/doc-structure.mdc 修正 index.zh-CN.md
 * 用法：node scripts/fix-doc-structure.mjs [--dry-run] [ComponentName ...]
 */
import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.resolve(import.meta.dirname, '..')
const COMPONENTS_DIR = path.join(ROOT, 'src/components')
const dryRun = process.argv.includes('--dry-run')
const only = process.argv.slice(2).filter((a) => !a.startsWith('--'))

function hasMainComponent(name, componentDir) {
  if (fs.existsSync(path.join(componentDir, `${name}.tsx`))) return true
  const demoDir = path.join(componentDir, 'demos')
  if (!fs.existsSync(demoDir)) return false
  return fs
    .readdirSync(demoDir)
    .some((d) => d === `${name}.tsx` || d === `${name}.jsx`)
}

function demoteHeadings(block, levels = 1) {
  return block
    .split('\n')
    .map((line) => {
      const m = line.match(/^(#{1,6})\s/)
      if (!m) return line
      const next = '#'.repeat(m[1].length + levels)
      return line.replace(/^#{1,6}/, next)
    })
    .join('\n')
}

function findSubIndex(lines, name) {
  return lines.findIndex((line) => new RegExp(`^## ${name}\\.`).test(line))
}

function findMainSectionIndex(lines, name) {
  return lines.findIndex((line) => line === `## ${name}`)
}

function findRootWhenIndex(lines) {
  return lines.findIndex((line) => line === '## 何时使用')
}

function transformWrap(content, name) {
  const lines = content.split('\n')
  const subIdx = findSubIndex(lines, name)
  if (subIdx === -1) return null
  if (findMainSectionIndex(lines, name) !== -1) return null

  const whenIdx = findRootWhenIndex(lines)
  if (whenIdx === -1 || whenIdx >= subIdx) return null

  const before = lines.slice(0, whenIdx).join('\n')
  const rootBlock = lines.slice(whenIdx, subIdx).join('\n')
  const after = lines.slice(subIdx).join('\n')

  const wrapped = `## ${name}\n\n${demoteHeadings(rootBlock.trimEnd())}`
  return `${before}${wrapped}\n\n${after}`.replace(/\n{3,}/g, '\n\n') + '\n'
}

function transformRemoveRoot(content, name) {
  const lines = content.split('\n')
  const subIdx = findSubIndex(lines, name)
  if (subIdx === -1) return null

  const whenIdx = findRootWhenIndex(lines)
  if (whenIdx === -1 || whenIdx >= subIdx) return null

  const before = lines.slice(0, whenIdx).join('\n').trimEnd()
  const after = lines.slice(subIdx).join('\n')
  return `${before}\n\n${after}`.replace(/\n{3,}/g, '\n\n') + '\n'
}

/** 脚本不自动处理的组件（需手工拆分 demo / API） */
const SKIP = new Set(['List', 'Message', 'DatePicker', 'Picker', 'ListPagination', 'Loading'])

function processComponent(name) {
  if (only.length && !only.includes(name)) return
  if (SKIP.has(name)) {
    console.log(`skip ${name} (manual)`)
    return
  }

  const componentDir = path.join(COMPONENTS_DIR, name)
  const mdPath = path.join(componentDir, 'index.zh-CN.md')
  if (!fs.existsSync(mdPath)) return

  const content = fs.readFileSync(mdPath, 'utf8')
  const subs = [...content.matchAll(new RegExp(`^## ${name}\\.`, 'gm'))]
  if (!subs.length) return

  const hasMain = hasMainComponent(name, componentDir)
  const next = hasMain ? transformWrap(content, name) : transformRemoveRoot(content, name)
  if (!next || next === content) {
    console.log(`unchanged ${name}`)
    return
  }

  console.log(`${hasMain ? 'wrap' : 'remove-root'} ${name}`)
  if (!dryRun) fs.writeFileSync(mdPath, next)
}

const dirs = fs
  .readdirSync(COMPONENTS_DIR)
  .filter((d) => fs.existsSync(path.join(COMPONENTS_DIR, d, 'index.zh-CN.md')))

for (const name of dirs.sort()) {
  processComponent(name)
}
