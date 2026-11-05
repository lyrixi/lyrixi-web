#!/usr/bin/env node
/**
 * 将 src/components、src/utils 的 demos 同步到 .ai/docs 对应目录（含删除 src 已不存在的孤儿文件）
 * 用法（仓库根目录）：
 *   node .ai/skills/sync-ai-docs/scripts/sync-ai-docs-demos.mjs
 *   node .ai/skills/sync-ai-docs/scripts/sync-ai-docs-demos.mjs Button DatePicker
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '../../../../')
const docsDir = path.join(rootDir, '.ai', 'docs')
const filterNames = process.argv.slice(2).map((s) => s.trim()).filter(Boolean)
const DEMO_FILE_RE = /\.(tsx|jsx|ts)$/

function collectDemoRelPaths(srcDemos, base = '') {
  const paths = new Set()
  if (!fs.existsSync(srcDemos)) return paths
  for (const entry of fs.readdirSync(srcDemos, { withFileTypes: true })) {
    const rel = base ? `${base}/${entry.name}` : entry.name
    const full = path.join(srcDemos, entry.name)
    if (entry.isDirectory()) {
      for (const p of collectDemoRelPaths(full, rel)) paths.add(p)
    } else if (DEMO_FILE_RE.test(entry.name)) {
      paths.add(rel)
    }
  }
  return paths
}

function copyDemos(srcDemos, destDemos) {
  let count = 0

  function walk(srcDir, destDir) {
    fs.mkdirSync(destDir, { recursive: true })
    for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
      const srcPath = path.join(srcDir, entry.name)
      const destPath = path.join(destDir, entry.name)
      if (entry.isDirectory()) walk(srcPath, destPath)
      else if (DEMO_FILE_RE.test(entry.name)) {
        fs.copyFileSync(srcPath, destPath)
        count++
      }
    }
  }

  walk(srcDemos, destDemos)
  return count
}

function pruneDemos(destDemos, keptRelPaths) {
  if (!fs.existsSync(destDemos)) return 0
  let pruned = 0

  function postOrderWalk(destDir, base = '') {
    for (const entry of fs.readdirSync(destDir, { withFileTypes: true })) {
      const rel = base ? `${base}/${entry.name}` : entry.name
      const full = path.join(destDir, entry.name)
      if (entry.isDirectory()) {
        postOrderWalk(full, rel)
        if (fs.readdirSync(full).length === 0) {
          fs.rmdirSync(full)
          pruned++
        }
      } else if (DEMO_FILE_RE.test(entry.name) && !keptRelPaths.has(rel)) {
        fs.unlinkSync(full)
        pruned++
      }
    }
  }

  postOrderWalk(destDemos)
  return pruned
}

function syncDemos(srcBase, destBase) {
  const srcDemos = path.join(srcBase, 'demos')
  const destDemos = path.join(destBase, 'demos')
  if (!fs.existsSync(srcDemos)) return { copied: 0, pruned: 0 }

  const keptRelPaths = collectDemoRelPaths(srcDemos)
  const copied = copyDemos(srcDemos, destDemos)
  const pruned = pruneDemos(destDemos, keptRelPaths)
  return { copied, pruned }
}

let totalCopied = 0
let totalPruned = 0
for (const kind of ['components', 'utils']) {
  const srcKind = path.join(rootDir, 'src', kind)
  const docKind = path.join(docsDir, kind)
  if (!fs.existsSync(srcKind) || !fs.existsSync(docKind)) continue

  for (const name of fs.readdirSync(srcKind).sort()) {
    if (filterNames.length && !filterNames.includes(name)) continue
    const srcBase = path.join(srcKind, name)
    const destBase = path.join(docKind, name)
    if (!fs.statSync(srcBase).isDirectory() || !fs.existsSync(destBase)) continue
    const { copied, pruned } = syncDemos(srcBase, destBase)
    if (copied || pruned) {
      const parts = []
      if (copied) parts.push(`${copied} copied`)
      if (pruned) parts.push(`${pruned} pruned`)
      console.log(`  ${kind}/${name}: ${parts.join(', ')}`)
    }
    totalCopied += copied
    totalPruned += pruned
  }
}

console.log(`\nSynced ${totalCopied} demo files, pruned ${totalPruned} orphans.`)
