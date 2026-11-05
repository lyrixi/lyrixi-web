#!/usr/bin/env node

const path = require('path')
const { updateAI, DEFAULT_PRESERVE_IF_EXISTS } = require('./updateAI.js')
const { updateScripts } = require('./updateScripts.js')

const pkgRoot = path.resolve(__dirname, '..')
const argv = process.argv.slice(2)
const targetRoot = process.cwd()
const templateDir = path.join(pkgRoot, '.ai')

updateAI({
  templateDir,
  targetRoot,
  argv,
  label: 'lyrixi-ai',
  preserveIfExists: DEFAULT_PRESERVE_IF_EXISTS
})

updateScripts({
  templateDir,
  targetRoot,
  scriptsSrc: path.join(pkgRoot, 'scripts', 'lyrixi-web'),
  argv,
  label: 'lyrixi-web-scripts'
})
