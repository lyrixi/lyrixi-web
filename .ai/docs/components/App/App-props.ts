/**
 * App Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface AppLoadResult {
  status: string
  message?: string
}

export interface AppProps {
  /** 语言配置，默认 `null`，如 `'zh_CN' | 'en_US' | 'ja_JP'` */
  language?: string | null
  /** 预加载函数，默认 `null`；返回 `{ status: 'success' | 'error'; message?: string }` */
  preload?: (() => Promise<AppLoadResult>) | null
  /** 主题名，默认 `'default'`，调用 `Theme.setTheme` */
  themeName?: string
  /** 应用内容 */
  children?: ReactNode
}

export type ReactNode = import('react').ReactNode
