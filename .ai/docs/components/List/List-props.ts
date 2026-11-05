/**
 * List Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

// ---------- 根组件 List ----------

/**
 * 列表项数据（扁平；分组只写 type: 'group'，勿再传 children）。
 * 全库列表/选择类组件（List、ListAsync、IndexBar、Input.Select、Cascader、ActionSheet 等）共用此项结构。
 */
export type ListItem = {
  id?: string | number
  name?: string
  checked?: boolean
  className?: string
  style?: CSSProperties
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  type?: 'group' | string
  virtualData?: { type?: string; top?: number; height?: number; index?: number }
  [key: string]: unknown
}

export type ListViewItem = {
  _raw?: ListItem
  id?: unknown
  /** 有 children 时由 List 自动设为 'group'；子项无需设置 */
  type?: 'group' | string
  disabled?: boolean
  style?: CSSProperties
  className?: string
  imageUrl?: unknown
  imageRender?: (item: ListItem & { checked?: boolean }) => ReactNode
  avatarUrl?: unknown
  avatarRender?: (item: ListItem & { checked?: boolean }) => ReactNode
  title?: unknown
  name?: unknown
  description?: unknown
  note?: unknown
  content?: unknown
  actionRender?: (item: ListItem & { checked?: boolean }) => ReactNode
  children?: ListViewItem[]
}

export interface ListProps {
  /** 根元素 id */
  id?: string
  /** 选中的值 */
  value?: ListItem | ListItem[] | null
  /** 是否多选 */
  multiple?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** true 展示 Checkbox 且行与 Checkbox 均可切换；false 不展示，仅点击行切换 */
  checkable?: boolean
  /** 复选框样式变体 */
  checkboxVariant?: string
  /** 复选框位置 */
  checkboxPlacement?: string
  /** 列表数据 */
  list?: ListItem[]
  /** 格式化项 */
  formatViewItem?: (item: ListItem, options: { index: number }) => ListViewItem
  /** 项布局 */
  itemLayout?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 项样式 */
  itemStyle?: CSSProperties
  /** 项类名 */
  itemClassName?: string
  /** 自定义项渲染 */
  itemRender?: (
    item: ListItem,
    options: {
      index: number
      checked: boolean
      onChange: (
        item: ListItem & { checked?: boolean },
        changeOptions?: {
          action?: 'item' | 'checkbox'
          currentItem: ListItem & { checked?: boolean }
        }
      ) => void
    }
  ) => ReactNode
  /** 选中值变化（checkable 勾选/取消时更新 value） */
  onChange?: (
    newValue: ListItem | ListItem[] | null,
    options?: { action?: 'item' | 'checkbox'; currentItem: ListItem }
  ) => void
}

export interface ListRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}

// ---------- List.Item ----------

export interface ListItemProps {
  /** 根元素 id */
  id?: string
  /** 原始数据 */
  _raw?: ListItem
  /** 是否选中 */
  checked?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** true 展示 Checkbox 且行与 Checkbox 均可切换；false 不展示，仅点击行切换 */
  checkable?: boolean
  /** 复选框样式变体 */
  checkboxVariant?: string
  /** 复选框位置 */
  checkboxPlacement?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 布局 */
  layout?: string
  /** 图片地址 */
  imageUrl?: string
  /** 图片渲染 */
  imageRender?: (item: ListItem & { checked?: boolean }) => ReactNode
  /** 头像地址 */
  avatarUrl?: string
  /** 头像渲染 */
  avatarRender?: (item: ListItem & { checked?: boolean }) => ReactNode
  /** 标题 */
  title?: ReactNode
  /** 描述 */
  description?: ReactNode
  /** 备注 */
  note?: ReactNode
  /** 内容 */
  content?: ReactNode
  /** 操作区渲染 */
  actionRender?: (item: ListItem & { checked?: boolean }) => ReactNode
  /** 项变化；options.action 区分点击整行或 Checkbox */
  onChange?: (
    item: ListItem & { checked?: boolean },
    options?: { action?: 'item' | 'checkbox'; currentItem: ListItem & { checked?: boolean } }
  ) => void
}

// ---------- List.HeaderItem ----------

export interface ListHeaderItemProps {
  /** 分组标识 */
  id?: string
  /** 描述 */
  description?: ReactNode
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 标题 */
  title?: ReactNode
}

// ---------- List.InfiniteScroll ----------

export interface ListInfiniteScrollProps {
  /** 状态 */
  status?: string
  /** 内容 */
  content?: ReactNode
}

export interface ListViewFormatterParams {
  formatViewItem?: (item: ListItem, options: { index: number }) => ListViewItem
}

export type ListItemChangeOptions = {
  action?: ListChangeAction
  currentItem: ListItem & { checked?: boolean }
}

export type ListItemOnChange = (
  item: ListItem & { checked?: boolean },
  options?: ListItemChangeOptions
) => void

/** List 对外 onChange 第二出参 */
export type ListValueChangeOptions = {
  action?: ListChangeAction
  currentItem: ListItem
}

export type ListViewItem = {
  _raw?: ListItem
  id?: unknown
  /** 'group' 渲染为 HeaderItem；缺省或其它值渲染为 Item */
  type?: ListItemType | string
  disabled?: boolean
  style?: CSSProperties
  className?: string
  imageUrl?: unknown
  imageRender?: (item: ListItem & { checked?: boolean }) => ReactNode
  avatarUrl?: unknown
  avatarRender?: (item: ListItem & { checked?: boolean }) => ReactNode
  title?: unknown
  name?: unknown
  description?: unknown
  note?: unknown
  content?: unknown
  actionRender?: (item: ListItem & { checked?: boolean }) => ReactNode
}

export interface ListViewFormatterParams {
  formatViewItem?: (item: ListItem, options: { index: number }) => ListViewItem
}

export interface ListRef {
  element: HTMLDivElement | null
}

export interface ListProps {

  id?: string
  value?: ListItem | ListItem[] | null
  multiple?: boolean
  list?: ListItem[]
  formatViewItem?: (item: ListItem, options: { index: number }) => ListViewItem
  itemLayout?: string

  allowClear?: boolean
  /** true 展示 Checkbox 且行与 Checkbox 均可切换；false 不展示 Checkbox，仅点击行切换 */
  checkable?: boolean
  checkboxVariant?: string
  checkboxPlacement?: string

  style?: CSSProperties
  className?: string
  itemStyle?: CSSProperties
  itemClassName?: string

  itemRender?: (
    item: ListItem,
    options: {
      index: number
      checked: boolean
      onChange: ListItemOnChange
    }
  ) => ReactNode

  onChange?: (newValue: ListItem | ListItem[] | null, options?: ListValueChangeOptions) => void
}

export type ListValueChangeOptions = {
  action?: ListChangeAction
  currentItem: ListItem
}

export type ListViewItem = {
  _raw?: ListItem
  id?: unknown
  /** 'group' 渲染为 HeaderItem；缺省或其它值渲染为 Item */
  type?: ListItemType | string
  disabled?: boolean
  style?: CSSProperties
  className?: string
  imageUrl?: unknown
  imageRender?: (item: ListItem & { checked?: boolean }) => ReactNode
  avatarUrl?: unknown
  avatarRender?: (item: ListItem & { checked?: boolean }) => ReactNode
  title?: unknown
  name?: unknown
  description?: unknown
  note?: unknown
  content?: unknown
  actionRender?: (item: ListItem & { checked?: boolean }) => ReactNode
}

export interface ListViewFormatterParams {
  formatViewItem?: (item: ListItem, options: { index: number }) => ListViewItem
}

export interface ListRef {
  element: HTMLDivElement | null
}

export interface ListProps {

  id?: string
  value?: ListItem | ListItem[] | null
  multiple?: boolean
  list?: ListItem[]
  formatViewItem?: (item: ListItem, options: { index: number }) => ListViewItem
  itemLayout?: string

  allowClear?: boolean
  /** true 展示 Checkbox 且行与 Checkbox 均可切换；false 不展示 Checkbox，仅点击行切换 */
  checkable?: boolean
  checkboxVariant?: string
  checkboxPlacement?: string

  style?: CSSProperties
  className?: string
  itemStyle?: CSSProperties
  itemClassName?: string

  itemRender?: (
    item: ListItem,
    options: {
      index: number
      checked: boolean
      onChange: ListItemOnChange
    }
  ) => ReactNode

  onChange?: (newValue: ListItem | ListItem[] | null, options?: ListValueChangeOptions) => void
}
