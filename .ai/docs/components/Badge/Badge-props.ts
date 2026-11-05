/**
 * Badge Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface BadgeProps {
  /** 徽标数值 */
  count?: number | undefined | null
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 最大显示数值，超出时显示 `maxCount + ellipsis`，默认 `99` */
  maxCount?: number
  /** 超出 `maxCount` 时的省略符，默认 `'+'` */
  ellipsis?: string
  /** 徽标包裹的内容 */
  children?: ReactNode
}

export interface BadgeRef {
  /** 根元素 */
  element: HTMLSpanElement | null
  /** 获取根元素 */
}
