const OSS = require('ali-oss')
const path = require('path')
const fs = require('fs')
const recursive = require('recursive-readdir')
// md5文件名
const md5File = require('./md5File')

// 配置 OSS 客户端
const client = new OSS({
  region: 'cn-hangzhou', // 根据你的存储桶地域修改
  accessKeyId: 'xx',
  accessKeySecret: 'xx',
  endpoint: 'http://oss-cn-hangzhou.aliyuncs.com',
  bucket: 'zkres', // 根据你的存储桶地域修改
  timeout: '300s'
})

async function uploadDirectory(localDir, targetPrefix, fileNameTransform) {
  try {
    // 获取文件夹所有文件路径
    const files = await recursive(localDir)

    for (const file of files) {
      // 计算相对路径
      let relativePath = path.relative(localDir, file)

      // 如果提供了文件名转换函数，则应用转换
      if (typeof fileNameTransform === 'function') {
        const dir = path.dirname(relativePath)
        const fileName = path.basename(relativePath)
        const transformedFileName = fileNameTransform(fileName)
        relativePath = dir === '.' ? transformedFileName : path.join(dir, transformedFileName)
      }

      // OSS 对象路径
      const ossObjectPath = path.join(targetPrefix, relativePath).replace(/\\/g, '/')

      // 增加文件内容md5, 用于客户端本地js对比阿里云js内容是否变化
      let fileContentMd5 = md5File(file)
      console.log(`🌍 开始上传 ${relativePath}: ${fileContentMd5}`)

      // 上传文件
      await client.put(ossObjectPath, file, {
        headers: {
          // 关键：添加自定义元数据头, 客户端会根据md5的比对判断文件是否下载完成
          'x-oss-meta-origin-md5': fileContentMd5
        }
      })
      console.log(`✅ 上传成功: https://xx.com/${ossObjectPath}`)
    }

    console.log('🎉 所有文件上传完成！')
  } catch (err) {
    console.error('❌ 上传失败:', err)
  }
}

// 执行上传
// uploadDirectory()

module.exports = uploadDirectory
