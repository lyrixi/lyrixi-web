import { defineConfig } from 'dumi'

import { configureSrcSvgWebpack } from './scripts/configureSrcSvgWebpack'

export default defineConfig({
  outputPath: 'docs',
  favicons: ['https://lyrixi.github.io/lyrixi/assets/images/favicon.ico'],
  logo: 'https://lyrixi.github.io/lyrixi/assets/images/logo.png',
  publicPath: '/lyrixi-web/',
  base: '/lyrixi-web/',
  styles: [
    `
    .dumi-default-header-left { width: initial; }
    .dumi-default-header-content,
    .dumi-default-doc-layout > main {
      max-width: none !important;
    }
    .dumi-default-sidebar { width: 280px !important; }
    * { scrollbar-width: thin !important; }
  `
  ],
  themeConfig: {
    name: 'Lyrixi Web',
    nav: {
      'zh-CN': [
        { title: '组件', link: '/components/install' },
        { title: '工具', link: '/utils' }
      ]
    },
    footer:
      '<div class="homepage-copyright">Lyrixi Web — PC 管理后台组件库</div>'
  },
  resolve: {
    docDirs: ['src-docs'],
    atomDirs: [
      { type: 'components', dir: 'src/components' },
      { type: 'utils', dir: 'src/utils' }
    ]
  },
  alias: {
    'src/': '/src/',
    'lyrixi-web/': '/src/'
  },
  chainWebpack(memo) {
    memo.resolve.alias.set('src', '/src')
    configureSrcSvgWebpack(memo)
  },
  locales: [{ id: 'zh-CN', name: '中文' }]
})
