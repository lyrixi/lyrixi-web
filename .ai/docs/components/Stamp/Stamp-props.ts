/**
 * Stamp Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface StampProps {
  /** 形状，默认 `'round'` */
  shape?: string
  /** 颜色 */
  color?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 标签内容 */
  children?: ReactNode
}

export interface StampRef {
  element: HTMLDivElement | null
}