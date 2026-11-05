/**
 * Combo Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'

export interface ComboProps {
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 组合内容 */
  children?: ReactNode
  /** 点击事件 */
  onClick?: MouseEventHandler<HTMLDivElement>
}

export interface ComboRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}