const google = require('@vitalets/google-translate-api')
const chalk = require('chalk')
const languageMapModule = require('lyrixi-web/utils/LocaleUtil/languageMap')
const languageMap = languageMapModule.default ?? languageMapModule

function getFetchOptions() {
  const proxyUrl = process.env.TRANSLATE_HTTP_PROXY
  if (proxyUrl === '') {
    return undefined
  }
  const url = proxyUrl || 'http://127.0.0.1:7890'
  try {
    const { HttpProxyAgent } = require('http-proxy-agent')
    return { agent: new HttpProxyAgent(url) }
  } catch {
    console.log(
      chalk.yellow(
        'googleTranslate: 未安装 http-proxy-agent，将直连 Google。国内网络请 npm i -D http-proxy-agent 并确保本地代理（默认 127.0.0.1:7890），或设置 TRANSLATE_HTTP_PROXY'
      )
    )
    return undefined
  }
}

// 翻译文本，支持的语言:https://cloud.google.com/translate/docs/languages
module.exports = async function googleTranslate(text, config) {
  const from = languageMap[config.from].translate.google
  const to = languageMap[config.to].translate.google

  const isArray = Array.isArray(text)
  let textList = []
  if (isArray) {
    textList = text
  } else if (typeof text === 'string') {
    textList = [text]
  } else {
    return isArray ? [] : ''
  }

  if (!textList.length) {
    return isArray ? [] : ''
  }

  const value = textList.join('\n###\n')
  const fetchOptions = getFetchOptions()

  try {
    const options = { from, to }
    if (fetchOptions) {
      options.fetchOptions = fetchOptions
    }
    const { text: translated } = await google.translate(value, options)
    const parts = translated.split(/\n *# *# *# *\n/)
    return isArray ? parts : parts[0] ?? ''
  } catch (error) {
    console.log(chalk.red(`googleTranslate: ${from}翻译成${to}失败!`))
    console.log(chalk.red(error))
    return isArray ? [] : ''
  }
}
