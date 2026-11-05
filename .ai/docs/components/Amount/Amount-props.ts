/**
 * Amount API（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties } from 'react'

export interface AmountProps {
  /** 小数精度，默认 `2` */
  precision?: number
  /** 货币符号 */
  currencySymbol?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 是否无样式（不使用组件默认样式） */
  noStyle?: boolean
  /** 金额数值 */
  children?: number | string
}

/** Amount 默认属性 */
export type AmountDefaultProps = AmountProps