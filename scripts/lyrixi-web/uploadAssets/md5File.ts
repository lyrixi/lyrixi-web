const fs = require('fs')
const crypto = require('crypto')

/**
 * 计算文件的 MD5 hash
 */
function md5File(filePath) {
  const buffer = fs.readFileSync(filePath)
  const hash = crypto.createHash('md5')
  hash.update(buffer)
  return hash.digest('hex')
}

module.exports = md5File
