const fs = require('fs')
const prettier = require('prettier')

async function formatFileSync(filePath, code) {
  try {
    const options = await prettier.resolveConfig(filePath)
    const formattedCode = await prettier.format(code, {
      ...options,
      parser: 'babel-ts'
    })
    fs.writeFileSync(filePath, formattedCode, 'utf8')
  } catch (error) {
    console.error('格式化或写入文件时出错:', error)
  }
}
module.exports = formatFileSync
