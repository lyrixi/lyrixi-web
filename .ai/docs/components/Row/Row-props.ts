/**
 * Row Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface RowProps {
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 行内容 */
  children?: ReactNode
}

export interface RowRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}

// --- Row.Col ---

export interface RowColProps {
  /** 栅格占比；传 `'auto'` 时为 flex: 1 */
  span?: number | 'auto'
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 列内容 */
  children?: ReactNode
}

export interface RowColRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}