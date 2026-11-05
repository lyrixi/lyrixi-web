/**
 * Selector Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface SelectorItem {
  id?: string | number
  name?: ReactNode
}

export interface SelectorEllipsis {
  count: number
}

export interface SelectorProps {
  /** 选中的值 */
  value?: SelectorItem[]
  /** 选项列表 */
  list: SelectorItem[]
  /** 省略配置 */
  ellipsis?: SelectorEllipsis
  /** 是否多选 */
  multiple?: boolean
  /** 列数，默认 `2` */
  columns?: number
  /** 选择组 ID */
  id?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 变化事件 */
  onChange?: (value: SelectorItem[]) => void | Promise<void>
}

export interface SelectorRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}

export interface SelectorItemProps {

  disabled?: boolean
  checked?: boolean

  className?: string
  style?: CSSProperties

  children?: ReactNode

  onChange?: (checked: boolean) => void
}

export type SelectorItemRef {
  element: HTMLDivElement | null
  inputElement: HTMLInputElement | null
}
