const assert = require('node:assert/strict')
const { spawnSync } = require('node:child_process')
const fs = require('node:fs')
const os = require('node:os')
const path = require('node:path')
const test = require('node:test')

const { updateAI } = require('../updateAI.js')

const repoAi = path.resolve(__dirname, '..')
const linkConfig = JSON.parse(fs.readFileSync(path.join(repoAi, 'client-links.json'), 'utf8'))

function createFixture(t) {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'lyrixi-ai-test-'))
  const templateDir = path.join(tempRoot, 'template', '.ai')
  const targetRoot = path.join(tempRoot, 'target')

  fs.mkdirSync(path.join(templateDir, 'rules'), { recursive: true })
  fs.mkdirSync(path.join(templateDir, 'skills'), { recursive: true })
  fs.mkdirSync(path.join(templateDir, 'docs'), { recursive: true })
  fs.mkdirSync(targetRoot, { recursive: true })
  fs.writeFileSync(path.join(templateDir, 'client-links.json'), JSON.stringify(linkConfig))
  fs.writeFileSync(path.join(templateDir, 'AGENTS.md'), '# Codex')
  fs.writeFileSync(path.join(templateDir, 'CLAUDE.md'), '# Claude')

  t.after(() => fs.rmSync(tempRoot, { recursive: true, force: true }))
  return { templateDir, targetRoot }
}

function createLink(targetRoot, destination, source) {
  const linkPath = path.join(targetRoot, destination)
  fs.mkdirSync(path.dirname(linkPath), { recursive: true })
  fs.symlinkSync(source, linkPath)
}

function assertPathMissing(filePath) {
  assert.throws(() => fs.lstatSync(filePath), { code: 'ENOENT' })
}

function captureConsoleOutput(run) {
  const output = []
  const originalLog = console.log
  console.log = (...args) => output.push(args.join(' '))
  try {
    run()
  } finally {
    console.log = originalLog
  }
  return output.join('\n')
}

test('creates links declared by client-links.json', (t) => {
  const { templateDir, targetRoot } = createFixture(t)

  updateAI({ templateDir, targetRoot, argv: [] })

  assert.equal(fs.readlinkSync(path.join(targetRoot, '.cursor/rules')), '../.ai/rules')
  assert.equal(fs.readlinkSync(path.join(targetRoot, '.claude/CLAUDE.md')), '../.ai/CLAUDE.md')
  assert.equal(fs.readlinkSync(path.join(targetRoot, '.codex/AGENTS.md')), '../.ai/AGENTS.md')
  assert.equal(fs.readlinkSync(path.join(targetRoot, 'AGENTS.md')), '.ai/AGENTS.md')
})

test('removes obsolete links that point to removed ai resources', (t) => {
  const { templateDir, targetRoot } = createFixture(t)
  createLink(targetRoot, '.claude/memory', '../.ai/memory')
  createLink(targetRoot, '.codex/versions', '../.ai/versions')

  updateAI({ templateDir, targetRoot, argv: [] })

  assertPathMissing(path.join(targetRoot, '.claude/memory'))
  assertPathMissing(path.join(targetRoot, '.codex/versions'))
})

test('preserves user content at obsolete link destinations', (t) => {
  const { templateDir, targetRoot } = createFixture(t)
  fs.mkdirSync(path.join(targetRoot, '.claude/memory'), { recursive: true })
  createLink(targetRoot, '.codex/versions', '../user-versions')

  const output = captureConsoleOutput(() => updateAI({ templateDir, targetRoot, argv: [] }))

  assert.equal(fs.statSync(path.join(targetRoot, '.claude/memory')).isDirectory(), true)
  assert.equal(fs.readlinkSync(path.join(targetRoot, '.codex/versions')), '../user-versions')
  assert.match(output, /Warnings:/)
  assert.match(output, /contains user content/)
})

test('dry-run reports changes without writing files', (t) => {
  const { templateDir, targetRoot } = createFixture(t)

  updateAI({ templateDir, targetRoot, argv: ['--dry-run'] })

  assertPathMissing(path.join(targetRoot, '.ai'))
  assertPathMissing(path.join(targetRoot, '.cursor'))
  assertPathMissing(path.join(targetRoot, '.claude'))
  assertPathMissing(path.join(targetRoot, '.codex'))
})

test('full initialization exposes only supported client resources', (t) => {
  const { templateDir, targetRoot } = createFixture(t)

  updateAI({ templateDir, targetRoot, argv: [] })

  for (const client of ['.cursor', '.claude', '.codex']) {
    for (const resource of ['docs', 'rules', 'skills']) {
      assert.equal(fs.lstatSync(path.join(targetRoot, client, resource)).isSymbolicLink(), true)
    }
  }
  for (const resource of ['commands', 'memory', 'versions', 'vision']) {
    assertPathMissing(path.join(targetRoot, '.claude', resource))
    assertPathMissing(path.join(targetRoot, '.codex', resource))
  }
})

test('rejects invalid client link config', (t) => {
  const { templateDir, targetRoot } = createFixture(t)
  fs.writeFileSync(path.join(templateDir, 'client-links.json'), '{ invalid json')

  assert.throws(() => updateAI({ templateDir, targetRoot, argv: [] }), {
    message: /Invalid client link config .*client-links\.json/
  })
  assertPathMissing(path.join(targetRoot, '.ai'))
})

test('rejects null and path-traversing client link entries before writing files', (t) => {
  const { templateDir, targetRoot } = createFixture(t)

  for (const config of [
    { links: [null] },
    { links: [{ source: '.ai/rules', destinations: { Cursor: '../outside' } }] }
  ]) {
    fs.writeFileSync(path.join(templateDir, 'client-links.json'), JSON.stringify(config))
    assert.throws(() => updateAI({ templateDir, targetRoot, argv: [] }), {
      message: /Invalid client link config .*client-links\.json/
    })
    assertPathMissing(path.join(targetRoot, '.ai'))
    assertPathMissing(path.join(targetRoot, 'outside'))
  }
})

test('cleans obsolete links when targetRoot is relative', (t) => {
  const { templateDir, targetRoot } = createFixture(t)
  createLink(targetRoot, '.claude/memory', '../.ai/memory')

  updateAI({ templateDir, targetRoot: path.relative(process.cwd(), targetRoot), argv: [] })

  assertPathMissing(path.join(targetRoot, '.claude/memory'))
})

test('removes deprecated managed rules and skills from an existing ai directory', (t) => {
  const { templateDir, targetRoot } = createFixture(t)
  const staleRule = path.join(targetRoot, '.ai/rules/ai-index.md')
  const staleRuleMap = path.join(targetRoot, '.ai/rules/ai-rule-index.md')
  const staleSkill = path.join(targetRoot, '.ai/skills/develop-version/SKILL.md')
  fs.mkdirSync(path.dirname(staleRule), { recursive: true })
  fs.mkdirSync(path.dirname(staleSkill), { recursive: true })
  fs.writeFileSync(staleRule, '# Old index')
  fs.writeFileSync(staleRuleMap, '# Old rule map')
  fs.writeFileSync(staleSkill, '# Old skill')

  updateAI({ templateDir, targetRoot, argv: [] })

  assertPathMissing(staleRule)
  assertPathMissing(staleRuleMap)
  assertPathMissing(path.join(targetRoot, '.ai/skills/develop-version'))
})

test('real initializer creates the supported ai layout and root entry', (t) => {
  const targetRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'lyrixi-ai-cli-test-'))
  t.after(() => fs.rmSync(targetRoot, { recursive: true, force: true }))

  const result = spawnSync(process.execPath, [path.join(repoAi, 'initAI.js')], {
    cwd: targetRoot,
    encoding: 'utf8'
  })

  assert.equal(result.status, 0, result.stderr)
  assert.equal(fs.readlinkSync(path.join(targetRoot, 'AGENTS.md')), '.ai/AGENTS.md')
  assert.deepEqual(
    fs.readdirSync(path.join(targetRoot, '.ai')).sort(),
    ['AGENTS.md', 'CLAUDE.md', 'README.md', 'docs', 'rules', 'skills'].sort()
  )
  assertPathMissing(path.join(targetRoot, '.ai/skills/develop-version'))
})

test('preserves an unrelated root entry unless force-link is requested', (t) => {
  const { templateDir, targetRoot } = createFixture(t)
  createLink(targetRoot, 'AGENTS.md', 'USER-AGENTS.md')

  updateAI({ templateDir, targetRoot, argv: [] })

  assert.equal(fs.readlinkSync(path.join(targetRoot, 'AGENTS.md')), 'USER-AGENTS.md')

  updateAI({ templateDir, targetRoot, argv: ['--force-link'] })

  assert.equal(fs.readlinkSync(path.join(targetRoot, 'AGENTS.md')), '.ai/AGENTS.md')
})
