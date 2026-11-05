#!/usr/bin/env node
/**
 * 从 .ai/docs/mapping.json 按关键词解析组件/工具文档路径。
 * 用法（仓库根目录）：
 *   node .ai/skills/develop/scripts/resolve-docs.mjs 按钮 列表 加载
 *   node .ai/skills/develop/scripts/resolve-docs.mjs --query "DatePicker,Request"
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '../../../../')
const mappingPath = path.join(rootDir, '.ai', 'docs', 'mapping.json')

function readMapping() {
  const raw = fs.readFileSync(mappingPath, 'utf8')
  return JSON.parse(raw)
}

function tokenize(argv) {
  const tokens = []
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--query' && argv[i + 1]) {
      tokens.push(
        ...argv[i + 1]
          .split(/[,，|/\s]+/)
          .map((s) => s.trim())
          .filter(Boolean)
      )
      i++
      continue
    }
    if (!argv[i].startsWith('--')) {
      tokens.push(
        ...argv[i]
          .split(/[,，|/\s]+/)
          .map((s) => s.trim())
          .filter(Boolean)
      )
    }
  }
  return [...new Set(tokens.map((t) => t.toLowerCase()))]
}

function scoreEntry(entry, tokens) {
  const name = entry.name.toLowerCase()
  const keywordList = (entry.keywords || entry.name)
    .split('|')
    .map((k) => k.trim().toLowerCase())
    .filter(Boolean)

  let score = 0
  const matched = []

  for (const token of tokens) {
    if (!token) continue
    if (name === token) {
      score += 100
      matched.push(`name:${token}`)
      continue
    }
    if (name.includes(token) || token.includes(name)) {
      score += 40
      matched.push(`name~:${token}`)
    }
    for (const kw of keywordList) {
      if (kw === token) {
        score += 80
        matched.push(`kw:${kw}`)
      } else if (kw.includes(token) || token.includes(kw)) {
        score += 25
        matched.push(`kw~:${kw}`)
      }
    }
  }

  return score > 0 ? { score, matched } : null
}

function main() {
  const tokens = tokenize(process.argv.slice(2))
  if (!tokens.length) {
    console.error(
      'Usage: node .ai/skills/develop/scripts/resolve-docs.mjs <keyword...>\n       node .ai/skills/develop/scripts/resolve-docs.mjs --query "Button,列表"'
    )
    process.exit(1)
  }

  const mapping = readMapping()
  const results = []

  for (const kind of ['components', 'utils']) {
    for (const entry of mapping[kind] || []) {
      const hit = scoreEntry(entry, tokens)
      if (hit) {
        results.push({
          kind: kind === 'components' ? 'component' : 'util',
          name: entry.name,
          score: hit.score,
          matched: hit.matched,
          props: entry.props,
          rule: entry.rule,
          example: entry.example
        })
      }
    }
  }

  results.sort((a, b) => b.score - a.score)

  const payload = {
    query: tokens,
    hits: results,
    hint:
      results.length === 0
        ? '无匹配：扩大关键词，或直接 Read mapping.json / .ai/docs/components|utils 目录'
        : '按 score 降序；生成代码时优先读 props + rules，example 仅在需要片段时读取'
  }

  console.log(JSON.stringify(payload, null, 2))
}

main()
