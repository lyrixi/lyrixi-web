const chalk = require('chalk')

const PROVIDERS = ['bing', 'google']
const DEFAULT_PROVIDER = 'bing'

const METHODS = {
  bing: () => require('./bingTranslate'),
  google: () => require('./googleTranslate')
}

function getEngine() {
  return process.env.TRANSLATE_ENGINE || DEFAULT_PROVIDER
}

function assertEngine(engine) {
  if (PROVIDERS.includes(engine)) {
    return engine
  }
  console.log(
    chalk.red(
      `translate: 不支持的翻译引擎 "${engine}"，可选: ${PROVIDERS.join(
        ', '
      )}（默认 ${DEFAULT_PROVIDER}）`
    )
  )
  console.log(chalk.yellow('示例: TRANSLATE_ENGINE=google npm run translate'))
  process.exit(1)
}

function getTranslateMethod() {
  const engine = assertEngine(getEngine())
  return METHODS[engine]()
}

module.exports = {
  PROVIDERS,
  DEFAULT_PROVIDER,
  getEngine,
  assertEngine,
  getTranslateMethod
}
