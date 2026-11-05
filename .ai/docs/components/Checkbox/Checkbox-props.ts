/**
 * Checkbox Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface CheckboxProps {
  /** 样式变体 */
  variant?: string
  /** 图标位置，默认 `'left'` */
  iconPlacement?: 'left' | 'right'
  /** 是否选中 */
  checked?: boolean
  /** 是否只读 */
  readOnly?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 复选框内容 */
  children?: ReactNode
  /** 自定义图标渲染 */
  iconRender?: (props: { checked?: boolean }) => ReactNode
  /** 变化事件 */
  onChange?: (checked: boolean) => void
}

export interface CheckboxItem {
  id: string | number
  name?: string
  [key: string]: unknown
}

export interface CheckboxGroupProps {
  /** 选中的值 */
  value?: unknown
  /** 选项列表 */
  list?: CheckboxItem[]
  /** 占位符 */
  placeholder?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否只读 */
  readOnly?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 是否多选 */
  multiple?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 自定义图标渲染 */
  iconRender?: CheckboxProps['iconRender']
  /** 图标位置 */
  iconPlacement?: CheckboxProps['iconPlacement']
  /** 变化事件 */
  onChange?: (value: CheckboxItem | CheckboxItem[] | null) => void
}

export interface CheckboxRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}

export interface CheckboxGroupRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}