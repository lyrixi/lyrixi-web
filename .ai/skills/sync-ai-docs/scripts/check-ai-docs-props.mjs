#!/usr/bin/env node
/**
 * 检查 .ai/docs *-props.ts 与 src 是否漂移（CI 用）
 * 用法：node .ai/skills/sync-ai-docs/scripts/check-ai-docs-props.mjs
 */
import { spawnSync } from 'child_process'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const script = path.join(__dirname, 'sync-ai-docs-props.mjs')

const result = spawnSync(process.execPath, [script, '--check'], {
  stdio: 'inherit'
})

process.exit(result.status ?? 1)
