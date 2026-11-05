const axios = require('axios')
const chalk = require('chalk')
const languageMapModule = require('lyrixi-web/utils/LocaleUtil/languageMap')
const languageMap = languageMapModule.default ?? languageMapModule

module.exports = async function bingTranslate(text, config) {
  const from = languageMap[config.from].translate.bing
  const to = languageMap[config.to].translate.bing

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

  try {
    const params = new URLSearchParams({
      isEnterpriseClient: 'false',
      to
    })
    if (from) {
      params.set('from', from)
    }

    const url = `https://edge.microsoft.com/translate/translatetext?${params.toString()}`
    console.log(`bingTranslate: 准备将${from || 'auto'}翻译成${to}`)

    const resp = await axios.post(url, textList, {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0'
      }
    })

    if (resp.status === 200 && Array.isArray(resp.data)) {
      console.log(`bingTranslate: ${from || 'auto'}翻译成${to}成功!`)
      const parts = resp.data.map((item) => item?.translations?.[0]?.text ?? '')
      return isArray ? parts : parts[0] ?? ''
    }

    console.log(chalk.red(`bingTranslate: ${from}翻译成${to}失败!`))
    console.log(chalk.red(resp?.data))
    return isArray ? [] : ''
  } catch (error) {
    console.log(chalk.red(`bingTranslate: ${from}翻译成${to}失败!`))
    console.log(chalk.red(error))
    return isArray ? [] : ''
  }
}
