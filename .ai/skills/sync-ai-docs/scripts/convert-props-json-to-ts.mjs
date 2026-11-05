#!/usr/bin/env node
/**
 * 将 .ai/docs 下 *-props.json 转为 *-props.ts（AI 可读的类型文档）
 * 用法（仓库根目录）：node .ai/skills/sync-ai-docs/scripts/convert-props-json-to-ts.mjs [--dry-run]
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '../../../../')
const docsDir = path.join(rootDir, '.ai', 'docs')

const dryRun = process.argv.includes('--dry-run')

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

function parsePropValue(str) {
  const trimmed = str.trim()
  const sep = ' — '
  const idx = trimmed.indexOf(sep)
  if (idx === -1) {
    if (trimmed.startsWith('`') && trimmed.endsWith('`')) {
      return { type: normalizeType(trimmed.slice(1, -1)), desc: '' }
    }
    return { type: 'unknown', desc: trimmed }
  }
  let typePart = trimmed.slice(0, idx).trim()
  const desc = trimmed.slice(idx + sep.length).trim()
  if (typePart.startsWith('`') && typePart.endsWith('`')) {
    typePart = typePart.slice(1, -1)
  }
  return { type: normalizeType(typePart), desc }
}

function normalizeType(typeStr) {
  return typeStr.replace(/ \\ \| /g, ' | ').replace(/`([^`]+)`/g, '$1').trim()
}

function toInterfaceName(key) {
  if (key.endsWith('.ref')) {
    const base = key.slice(0, -4)
    const parts = base.split('.')
    return parts.map((p, i) => (i === 0 ? p : capitalize(p))).join('') + 'Ref'
  }
  const parts = key.split('.')
  if (parts.length === 1) return parts[0] + 'Props'
  return parts[0] + parts.slice(1).map(capitalize).join('') + 'Props'
}

function isComponentProps(data) {
  return Object.values(data).some((v) => typeof v === 'object' && v !== null && !Array.isArray(v))
}

function formatJSDoc(desc) {
  if (!desc) return ''
  const lines = desc.split('\n')
  if (lines.length === 1) return `  /** ${desc} */\n`
  return `  /**\n${lines.map((l) => `   * ${l}`).join('\n')}\n   */\n`
}

function convertComponentProps(data, fileBaseName) {
  const lines = [
    '/**',
    ` * ${fileBaseName} Props / Ref（AI 文档，生成代码时以此为准）`,
    ' */',
    ''
  ]

  for (const [key, props] of Object.entries(data)) {
    const iface = toInterfaceName(key)
    lines.push(`export interface ${iface} {`)
    for (const [propName, propValue] of Object.entries(props)) {
      const { type, desc } = parsePropValue(String(propValue))
      lines.push(formatJSDoc(desc).trimEnd())
      lines.push(`  ${propName}?: ${type}`)
    }
    lines.push('}', '')
  }

  return lines.join('\n').trimEnd() + '\n'
}

function convertUtilProps(data, fileBaseName) {
  const byModule = new Map()

  for (const [key, desc] of Object.entries(data)) {
    const dot = key.indexOf('.')
    const moduleName = dot === -1 ? fileBaseName : key.slice(0, dot)
    const method = dot === -1 ? key : key.slice(dot + 1)
    if (!byModule.has(moduleName)) byModule.set(moduleName, [])
    byModule.get(moduleName).push({ method, desc: String(desc).trim() })
  }

  const lines = [
    '/**',
    ` * ${fileBaseName} API（AI 文档，生成代码时以此为准）`,
    ' */',
    ''
  ]

  for (const [moduleName, methods] of byModule) {
    lines.push(`export namespace ${moduleName} {`)
    for (const { method, desc } of methods) {
      lines.push(formatJSDoc(desc).replace(/^  /, '  '))
      lines.push(`  export function ${method}(...args: unknown[]): unknown`)
    }
    lines.push('}', '')
  }

  return lines.join('\n').trimEnd() + '\n'
}

function convertFile(jsonPath) {
  const raw = fs.readFileSync(jsonPath, 'utf8')
  const data = JSON.parse(raw)
  const fileBaseName = path.basename(jsonPath, '-props.json')
  const tsPath = jsonPath.replace(/-props\.json$/, '-props.ts')

  const content = isComponentProps(data)
    ? convertComponentProps(data, fileBaseName)
    : convertUtilProps(data, fileBaseName)

  return { jsonPath, tsPath, content }
}

function findPropsJsonFiles(dir) {
  const results = []
  if (!fs.existsSync(dir)) return results
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) results.push(...findPropsJsonFiles(full))
    else if (entry.name.endsWith('-props.json')) results.push(full)
  }
  return results
}

function updateMappingJson() {
  const mappingPath = path.join(docsDir, 'mapping.json')
  let text = fs.readFileSync(mappingPath, 'utf8')
  text = text.replace(/-props\.json/g, '-props.ts')
  if (!dryRun) fs.writeFileSync(mappingPath, text, 'utf8')
  return mappingPath
}

function updateTextFile(filePath, replacer) {
  if (!fs.existsSync(filePath)) return
  const text = fs.readFileSync(filePath, 'utf8')
  const next = replacer(text)
  if (next !== text && !dryRun) fs.writeFileSync(filePath, next, 'utf8')
}

function updateReferences() {
  const replacePropsExt = (text) =>
    text
      .replace(/-props\.json/g, '-props.ts')
      .replace(/props\.json/g, 'props.ts')

  updateTextFile(path.join(docsDir, 'README.md'), replacePropsExt)
  updateTextFile(path.join(docsDir, 'components', 'README.md'), replacePropsExt)
  updateTextFile(path.join(docsDir, 'utils', 'README.md'), replacePropsExt)
  updateTextFile(path.join(rootDir, '.ai', 'skills', 'develop', 'SKILL.md'), replacePropsExt)
  updateTextFile(path.join(rootDir, '.ai', 'skills', 'sync-ai-docs', 'SKILL.md'), replacePropsExt)

  for (const sub of ['components', 'utils']) {
    const base = path.join(docsDir, sub)
    if (!fs.existsSync(base)) continue
    for (const name of fs.readdirSync(base)) {
      const dir = path.join(base, name)
      if (!fs.statSync(dir).isDirectory()) continue
      for (const file of ['-rules.md', '-example.md']) {
        const mdPath = path.join(dir, `${name}${file}`)
        updateTextFile(mdPath, replacePropsExt)
      }
    }
  }
}

function main() {
  const jsonFiles = findPropsJsonFiles(docsDir)
  console.log(`${dryRun ? '[dry-run] ' : ''}Converting ${jsonFiles.length} props files...`)

  for (const jsonPath of jsonFiles) {
    const { tsPath, content } = convertFile(jsonPath)
    const rel = path.relative(rootDir, tsPath)
    console.log(`  ${rel}`)
    if (!dryRun) {
      fs.writeFileSync(tsPath, content, 'utf8')
      fs.unlinkSync(jsonPath)
    }
  }

  updateMappingJson()
  updateReferences()
  console.log(`\nDone. mapping.json and doc references updated.${dryRun ? ' (dry-run, no files written)' : ''}`)
}

main()
