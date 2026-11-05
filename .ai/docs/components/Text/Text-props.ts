/**
 * Text Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'

export interface TextEllipsisConfig {
  /** 省略行数 */
  rows?: number
  /** 是否可展开 */
  expandable?: boolean
  /** 默认展开 */
  defaultExpanded?: boolean
}

export interface TextProps {
  /** 高亮文本 */
  highlight?: string | string[]
  /** 省略配置 */
  ellipsis?: TextEllipsisConfig
  /** 文字颜色 */
  color?: string
  /** 字号 */
  fontSize?: string | number
  /** 字重 */
  fontWeight?: string | number
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 文本内容 */
  children?: ReactNode
  /** 点击事件 */
  onClick?: MouseEventHandler<HTMLDivElement>
}

export interface TextRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}

export interface TextGetDisplayValueOptions {
  /** 最大计数 */
  maxCount?: number
  /** 精度 */
  precision?: number
}

// ---------- Text module type ----------

/** Text.getDisplayValue 的签名 */
export type TextGetDisplayValue = (value: unknown, options?: TextGetDisplayValueOptions) => string

export interface TextGetDisplayValueParams {
  maxCount?: number
  precision?: number
}
