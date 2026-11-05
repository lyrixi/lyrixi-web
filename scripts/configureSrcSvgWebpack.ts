import path from 'path'

import type Config from '@umijs/bundler-webpack/compiled/webpack-5-chain'

export function configureSrcSvgWebpack(memo: Config, projectRoot: string = process.cwd()) {
  const v2IconsDir = path.resolve(projectRoot, 'src/library/v2/icons')
  const svgrLoader = require.resolve('@umijs/bundler-webpack/dist/loader/svgr')

  if (memo.module.rules.has('svgr')) {
    memo.module.rule('svgr').exclude.add(v2IconsDir)
  }
  if (memo.module.rules.has('svg')) {
    memo.module.rule('svg').exclude.add(v2IconsDir)
  }

  memo.module
    .rule('src-svg-component')
    .before('svgr')
    .test(/\.svg$/)
    .include.add(v2IconsDir)
    .end()
    .issuer(/\.[jt]sx?$/)
    .type('javascript/auto')
    .use('svgr-loader')
    .loader(svgrLoader)
    .options({
      exportType: 'named',
      namedExport: 'ReactComponent',
      svgo: false
    })
}
