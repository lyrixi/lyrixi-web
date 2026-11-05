const fs = require('fs')
const path = require('path')

const OVERWRITE_DIRS = ['docs']
const OVERWRITE_FILES = ['AGENTS.md', 'CLAUDE.md', 'README.md']
const DEFAULT_PRESERVE_IF_EXISTS = ['docs/examples', 'docs/business', 'docs/mapping.json']
const CLIENT_DIRS = { Cursor: '.cursor', Claude: '.claude', Codex: '.codex', Root: '' }
const OBSOLETE_RESOURCES = ['commands', 'memory', 'versions', 'vision']
const OBSOLETE_MANAGED_PATHS = [
  'skills/develop-version',
  'rules/ai-index.md',
  'rules/ai-rule-index.md'
]
const ALLOWED_LINK_SOURCES = new Set([
  '.ai/docs',
  '.ai/rules',
  '.ai/skills',
  '.ai/CLAUDE.md',
  '.ai/AGENTS.md'
])

function parseArgs(argv) {
  return {
    dryRun: argv.includes('--dry-run'),
    forceLink: argv.includes('--force-link')
  }
}

function createSummary() {
  return {
    skillsUpdated: [],
    skillsAdded: [],
    skillsKept: [],
    rulesUpdated: [],
    rulesAdded: [],
    rulesKept: [],
    dirsOverwritten: [],
    dirsAdded: [],
    dirsKept: [],
    filesOverwritten: [],
    symlinksCreated: [],
    symlinksUpdated: [],
    symlinksRemoved: [],
    symlinksSkipped: [],
    warnings: []
  }
}

function ensureDir(dir, dryRun) {
  if (dryRun) return
  fs.mkdirSync(dir, { recursive: true })
}

function exists(p) {
  try {
    fs.accessSync(p)
    return true
  } catch {
    return false
  }
}

function pathEntryExists(p) {
  try {
    fs.lstatSync(p)
    return true
  } catch {
    return false
  }
}

function listDirNames(dir) {
  if (!exists(dir)) return []
  return fs.readdirSync(dir).filter((name) => {
    const full = path.join(dir, name)
    return fs.statSync(full).isDirectory() && !name.startsWith('.')
  })
}

function listFileNames(dir) {
  if (!exists(dir)) return []
  return fs.readdirSync(dir).filter((name) => {
    const full = path.join(dir, name)
    return fs.statSync(full).isFile() && !name.startsWith('.')
  })
}

function samePath(a, b) {
  return path.resolve(a) === path.resolve(b)
}

function copyRecursive(src, dest, dryRun) {
  if (samePath(src, dest)) return
  if (dryRun) return
  fs.cpSync(src, dest, { recursive: true, force: true })
}

function removeIfExists(p, dryRun) {
  if (!exists(p)) return
  if (dryRun) return
  fs.rmSync(p, { recursive: true, force: true })
}

function mergeSkills(srcSkills, destSkills, dryRun, summary) {
  if (samePath(srcSkills, destSkills)) return
  ensureDir(destSkills, dryRun)
  const srcNames = listDirNames(srcSkills)
  const destNames = listDirNames(destSkills)

  for (const name of srcNames) {
    const srcPath = path.join(srcSkills, name)
    const destPath = path.join(destSkills, name)
    const had = exists(destPath)
    copyRecursive(srcPath, destPath, dryRun)
    if (had) summary.skillsUpdated.push(name)
    else summary.skillsAdded.push(name)
  }

  for (const name of destNames) {
    if (!srcNames.includes(name)) summary.skillsKept.push(name)
  }
}

function mergeRules(srcRules, destRules, dryRun, summary) {
  if (samePath(srcRules, destRules)) return
  ensureDir(destRules, dryRun)
  const srcFiles = listFileNames(srcRules)
  const destFiles = listFileNames(destRules)

  for (const file of srcFiles) {
    const srcPath = path.join(srcRules, file)
    const destPath = path.join(destRules, file)
    const had = exists(destPath)
    copyRecursive(srcPath, destPath, dryRun)
    if (had) summary.rulesUpdated.push(file)
    else summary.rulesAdded.push(file)
  }

  for (const file of destFiles) {
    if (!srcFiles.includes(file)) summary.rulesKept.push(file)
  }
}

function normalizePreservePath(relativePath) {
  return relativePath.replace(/\\/g, '/')
}

function isPreservedPath(relativePath, preserveIfExists, destRoot) {
  const normalized = normalizePreservePath(relativePath)
  return preserveIfExists.some((preservePath) => {
    const normalizedPreserve = normalizePreservePath(preservePath)
    if (normalized !== normalizedPreserve && !normalized.startsWith(`${normalizedPreserve}/`)) {
      return false
    }
    return exists(path.join(destRoot, preservePath))
  })
}

function syncDocsDir(srcDocs, destDocs, preserveIfExists, destRoot, dryRun, summary) {
  const preservedTopLevel = ['examples', 'business', 'mapping.json']

  if (!exists(destDocs)) {
    copyRecursive(srcDocs, destDocs, dryRun)
    summary.dirsOverwritten.push('docs')
    return
  }

  for (const name of fs.readdirSync(srcDocs)) {
    if (name.startsWith('.')) continue
    const relativePath = path.posix.join('docs', name)
    const srcPath = path.join(srcDocs, name)
    const destPath = path.join(destDocs, name)

    if (
      preservedTopLevel.includes(name) &&
      isPreservedPath(relativePath, preserveIfExists, destRoot)
    ) {
      summary.dirsKept.push(relativePath)
      continue
    }

    removeIfExists(destPath, dryRun)
    copyRecursive(srcPath, destPath, dryRun)
  }

  summary.dirsOverwritten.push('docs')
}

function syncPreserveDirs(templateRoot, destRoot, preserveIfExists, dryRun, summary) {
  if (samePath(templateRoot, destRoot)) return

  for (const relativePath of preserveIfExists) {
    if (relativePath.startsWith('docs/')) continue
    const src = path.join(templateRoot, relativePath)
    const dest = path.join(destRoot, relativePath)
    if (!exists(src)) continue

    if (isPreservedPath(relativePath, preserveIfExists, destRoot)) {
      summary.dirsKept.push(relativePath)
      continue
    }

    copyRecursive(src, dest, dryRun)
    summary.dirsAdded.push(relativePath)
  }
}

function syncOverwriteDirs(templateRoot, destRoot, preserveIfExists, dryRun, summary) {
  if (samePath(templateRoot, destRoot)) return
  for (const dir of OVERWRITE_DIRS) {
    const src = path.join(templateRoot, dir)
    const dest = path.join(destRoot, dir)
    if (!exists(src)) continue

    if (dir === 'docs') {
      syncDocsDir(src, dest, preserveIfExists, destRoot, dryRun, summary)
      continue
    }

    removeIfExists(dest, dryRun)
    copyRecursive(src, dest, dryRun)
    summary.dirsOverwritten.push(dir)
  }
}

function syncOverwriteFiles(templateRoot, destRoot, dryRun, summary) {
  if (samePath(templateRoot, destRoot)) return
  for (const file of OVERWRITE_FILES) {
    const src = path.join(templateRoot, file)
    const dest = path.join(destRoot, file)
    if (!exists(src)) continue
    copyRecursive(src, dest, dryRun)
    summary.filesOverwritten.push(file)
  }
}

function isSymlink(p) {
  try {
    return fs.lstatSync(p).isSymbolicLink()
  } catch {
    return false
  }
}

function readSymlinkTarget(linkPath) {
  try {
    return fs.readlinkSync(linkPath)
  } catch {
    return null
  }
}

function readLinkConfig(templateRoot) {
  const configPath = path.join(templateRoot, 'client-links.json')
  let config

  try {
    config = JSON.parse(fs.readFileSync(configPath, 'utf8'))
  } catch (err) {
    throw new Error(`Invalid client link config ${configPath}: ${err.message}`)
  }

  if (!config || typeof config !== 'object' || !Array.isArray(config.links)) {
    throw new Error(`Invalid client link config ${configPath}: "links" must be an array`)
  }

  const destinationsSeen = new Set()
  return config.links.flatMap((entry) => {
    const { source, destinations } = entry || {}
    if (!ALLOWED_LINK_SOURCES.has(source) || !destinations || typeof destinations !== 'object') {
      throw new Error(`Invalid client link config ${configPath}: malformed link entry`)
    }

    return Object.entries(destinations).map(([client, destination]) => {
      if (!Object.hasOwn(CLIENT_DIRS, client) || typeof destination !== 'string') {
        throw new Error(`Invalid client link config ${configPath}: unsupported client ${client}`)
      }
      if (
        !destination ||
        path.basename(destination) !== destination ||
        destination === '.' ||
        destination === '..'
      ) {
        throw new Error(
          `Invalid client link config ${configPath}: invalid destination ${destination}`
        )
      }
      const destinationKey = `${client}:${destination}`
      if (destinationsSeen.has(destinationKey)) {
        throw new Error(
          `Invalid client link config ${configPath}: duplicate destination ${destinationKey}`
        )
      }
      destinationsSeen.add(destinationKey)
      return { client, destination, source }
    })
  })
}

function cleanupObsoleteManagedResources(targetAi, dryRun) {
  for (const relativePath of OBSOLETE_MANAGED_PATHS) {
    removeIfExists(path.join(targetAi, relativePath), dryRun)
  }
}

function cleanupObsoleteSymlinks(targetRoot, dryRun, summary) {
  const absoluteTargetRoot = path.resolve(targetRoot)
  for (const [client, clientDir] of Object.entries(CLIENT_DIRS)) {
    if (client === 'Root') continue
    for (const resource of OBSOLETE_RESOURCES) {
      const linkPath = path.join(absoluteTargetRoot, clientDir, resource)
      if (!pathEntryExists(linkPath)) continue

      const expectedTarget = path.join(absoluteTargetRoot, '.ai', resource)
      const currentTarget = isSymlink(linkPath)
        ? path.resolve(path.dirname(linkPath), readSymlinkTarget(linkPath))
        : null

      if (currentTarget === expectedTarget) {
        if (!dryRun) fs.rmSync(linkPath, { force: true })
        summary.symlinksRemoved.push(linkPath)
        continue
      }

      summary.warnings.push(
        `Skipped obsolete ${client} link destination ${linkPath}: contains user content`
      )
    }
  }
}

function ensureSymlink(linkPath, targetRelative, dryRun, forceLink, summary) {
  const parentDir = path.dirname(linkPath)
  ensureDir(parentDir, dryRun)

  const existsLink = pathEntryExists(linkPath)
  if (existsLink) {
    if (isSymlink(linkPath)) {
      const current = readSymlinkTarget(linkPath)
      if (current === targetRelative) return
      if (!forceLink) {
        summary.symlinksSkipped.push(linkPath)
        summary.warnings.push(
          `Skipped ${linkPath}: points to ${current}; use --force-link to replace it with ${targetRelative}`
        )
        return
      }
      if (dryRun) {
        summary.symlinksUpdated.push(linkPath)
        return
      }
      fs.rmSync(linkPath, { force: true })
      fs.symlinkSync(targetRelative, linkPath)
      summary.symlinksUpdated.push(linkPath)
      return
    }

    if (forceLink) {
      if (dryRun) {
        summary.symlinksCreated.push(linkPath)
        return
      }
      fs.rmSync(linkPath, { recursive: true, force: true })
      fs.symlinkSync(targetRelative, linkPath)
      summary.symlinksCreated.push(linkPath)
      return
    }

    summary.symlinksSkipped.push(linkPath)
    summary.warnings.push(
      `Skipped ${linkPath}: exists and is not a symlink (use --force-link to replace)`
    )
    return
  }

  if (dryRun) {
    summary.symlinksCreated.push(linkPath)
    return
  }

  try {
    fs.symlinkSync(targetRelative, linkPath)
    summary.symlinksCreated.push(linkPath)
  } catch (err) {
    summary.warnings.push(`Failed to create symlink ${linkPath}: ${err.message}`)
  }
}

function syncSymlinks(targetRoot, links, dryRun, forceLink, summary) {
  for (const { client, destination, source } of links) {
    const clientRoot = path.join(targetRoot, CLIENT_DIRS[client])
    const linkPath = path.join(clientRoot, destination)
    const sourcePath = path.join(targetRoot, source)
    const targetRelative = path.relative(path.dirname(linkPath), sourcePath)
    ensureSymlink(linkPath, targetRelative, dryRun, forceLink, summary)
  }
}

function printSummary(summary, targetAi, dryRun, label) {
  const prefix = dryRun ? '[dry-run] ' : ''
  console.log(`\n${prefix}${label} sync complete\n`)

  if (summary.skillsAdded.length) console.log(`Skills added: ${summary.skillsAdded.join(', ')}`)
  if (summary.skillsUpdated.length)
    console.log(`Skills updated: ${summary.skillsUpdated.join(', ')}`)
  if (summary.skillsKept.length) console.log(`Skills kept (user): ${summary.skillsKept.join(', ')}`)

  if (summary.rulesAdded.length) console.log(`Rules added: ${summary.rulesAdded.join(', ')}`)
  if (summary.rulesUpdated.length) console.log(`Rules updated: ${summary.rulesUpdated.join(', ')}`)
  if (summary.rulesKept.length) console.log(`Rules kept (user): ${summary.rulesKept.join(', ')}`)

  if (summary.dirsOverwritten.length) {
    console.log(`Dirs overwritten: ${summary.dirsOverwritten.join(', ')}`)
  }
  if (summary.dirsAdded.length) {
    console.log(`Dirs added: ${summary.dirsAdded.join(', ')}`)
  }
  if (summary.dirsKept.length) {
    console.log(`Dirs kept (user): ${summary.dirsKept.join(', ')}`)
  }
  if (summary.filesOverwritten.length) {
    console.log(`Files overwritten: ${summary.filesOverwritten.join(', ')}`)
  }

  if (summary.symlinksCreated.length) {
    console.log(`Symlinks created: ${summary.symlinksCreated.length}`)
  }
  if (summary.symlinksUpdated.length) {
    console.log(`Symlinks updated: ${summary.symlinksUpdated.length}`)
  }
  if (summary.symlinksRemoved.length) {
    console.log(`Symlinks removed: ${summary.symlinksRemoved.length}`)
  }
  if (summary.symlinksSkipped.length) {
    console.log(`Symlinks skipped: ${summary.symlinksSkipped.length}`)
  }

  if (summary.warnings.length) {
    console.log('\nWarnings:')
    for (const w of summary.warnings) console.log(`  - ${w}`)
  }

  console.log(`\nTarget: ${targetAi}`)
}

/**
 * @param {object} options
 * @param {string} options.templateDir - source .ai directory
 * @param {string} options.targetRoot - project root (writes .ai + symlinks here)
 * @param {string[]} [options.argv]
 * @param {string[]} [options.preserveIfExists]
 */
function updateAI(options) {
  const {
    templateDir,
    targetRoot,
    argv = [],
    label = 'lyrixi-ai',
    preserveIfExists = DEFAULT_PRESERVE_IF_EXISTS
  } = options
  const parsed = parseArgs(argv)
  const absoluteTargetRoot = path.resolve(targetRoot)
  const targetAi = path.join(absoluteTargetRoot, '.ai')
  const summary = createSummary()

  if (!exists(templateDir)) {
    console.error(`Template not found: ${templateDir}`)
    process.exit(1)
  }

  const links = readLinkConfig(templateDir)

  if (parsed.dryRun) {
    console.log('Dry run — no files will be changed\n')
  }

  ensureDir(targetAi, parsed.dryRun)

  const isLocal = samePath(templateDir, targetAi)
  if (isLocal && !parsed.dryRun) {
    console.log('Local mode: template and target are the same .ai directory, skipping file sync\n')
  }

  cleanupObsoleteManagedResources(targetAi, parsed.dryRun)

  mergeSkills(
    path.join(templateDir, 'skills'),
    path.join(targetAi, 'skills'),
    parsed.dryRun,
    summary
  )
  mergeRules(path.join(templateDir, 'rules'), path.join(targetAi, 'rules'), parsed.dryRun, summary)
  syncPreserveDirs(templateDir, targetAi, preserveIfExists, parsed.dryRun, summary)
  syncOverwriteDirs(templateDir, targetAi, preserveIfExists, parsed.dryRun, summary)
  syncOverwriteFiles(templateDir, targetAi, parsed.dryRun, summary)
  cleanupObsoleteSymlinks(absoluteTargetRoot, parsed.dryRun, summary)
  syncSymlinks(absoluteTargetRoot, links, parsed.dryRun, parsed.forceLink, summary)

  printSummary(summary, targetAi, parsed.dryRun, label)
}

module.exports = { updateAI, parseArgs, DEFAULT_PRESERVE_IF_EXISTS }
