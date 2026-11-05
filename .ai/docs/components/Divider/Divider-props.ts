/**
 * Divider Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { HTMLAttributes, ReactNode } from 'react'

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /** 分割线内容 */
  children?: ReactNode
}

export interface DividerRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}