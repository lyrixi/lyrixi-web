const fs = require('fs')

// 删除目录
function deleteFolder(folder) {
  if (fs.existsSync(folder)) {
    try {
      fs.rmSync(folder, { recursive: true })
      console.log('successfully deleted' + folder)
    } catch (error) {
      console.error('delete was an error:', error.message)
    }
  }
}
// 创建目录
function createFolder(folder) {
  try {
    fs.mkdirSync(folder)
    console.log('successfully create' + folder)
  } catch (error) {
    console.error('create was an error:', error.message)
  }
}
// 复制目录
function copyFolder(current, target, cb) {
  fs.cp(current, target, { recursive: true }, (err) => {
    if (err) {
      console.error(err)
      return
    }

    cb && cb()
  })
}
// 复制文件
function copyFile(current, target, cb) {
  if (!fs.existsSync(current)) {
    cb && cb()
    return
  }
  fs.cp(current, target, (err) => {
    if (err) {
      console.error(err)
      return
    }

    cb && cb()
  })
}
// 删除文件中的指定代码
function deleteCode(filePath, code) {
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (typeof data === 'string') {
      let newContent = data.replace(code, '')
      fs.writeFile(filePath, newContent, 'utf8', (err) => {
        if (err) throw err
        console.log(`successfully delete '${filePath} code '${code}'`)
      })
    }
  })
}

// 删除 esm/index.js 中加载 less 的代码
// deleteCode(`./esm/index.js`, `import "./assets/index.less";\n`)

// 复制css到dist目录
copyFile('./umd/lyrixi-web.min.css', './esm/index.css')

// 复制国际化文件: assets/locale目录到src/locale(改为直接用dist/assets/locale)
// const currentLocaleFolder = `./src/assets/locale`
// const targetLocaleFolder = `./esm/locale`
// deleteFolder(targetLocaleFolder)
// createFolder(targetLocaleFolder)
// copyFolder(currentLocaleFolder, targetLocaleFolder)
