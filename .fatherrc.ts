import { defineConfig } from 'father'

export default defineConfig({
  esm: {
    output: 'esm'
  },
  extraBabelPlugins: [
    [
      'inline-react-svg',
      {
        svgo: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false
                }
              }
            }
          ]
        }
      }
    ]
  ],
  umd: {
    output: 'umd',
    name: 'LyrixiWeb',
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      axios: 'axios',
      dayjs: 'dayjs',
      vconsole: 'vconsole',
      lodash: 'lodash'
    }
  }
})
