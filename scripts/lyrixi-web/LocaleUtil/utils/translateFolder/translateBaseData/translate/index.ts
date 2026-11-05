const chalk = require('chalk')
const languageMapModule = require('lyrixi-web/utils/LocaleUtil/languageMap')
const languageMap = languageMapModule.default ?? languageMapModule
const getTranslateMethod = require('./getTranslateMethod').getTranslateMethod

const translate = getTranslateMethod()

// 翻译
module.exports = async function (text, options) {
  const from = options?.from
  const to = options?.to
  if (!from || !to || from === to) {
    return text
  }
  if (!languageMap[from] || !languageMap[to]) {
    console.log(chalk.red(`translate: 语言${from}或${to}不支持`))
    return text
  }

  return translate(text, { from, to })
}
