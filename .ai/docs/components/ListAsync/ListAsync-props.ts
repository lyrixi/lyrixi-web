/**
 * ListAsync Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface ListAsyncVirtualProp {
  getItemHeight: (item: ListAsyncItem) => number
}

export type ListAsyncLoadAction = 'load' | 'reload' | 'topRefresh' | 'bottomRefresh' | 'retry' | ''

export interface ListLoadResultData {
  list?: ListAsyncItem[]
  scrollTop?: number
  totalPage?: number
  totalRows?: number
  [key: string]: unknown
}

export interface ListLoadResult {
  status: string
  code?: string
  message?: string
  data?: ListLoadResultData
}

export interface ListAsyncProps {
  /** 数据加载函数 */
  loadData?: (params: {
    previousResult: ListLoadResult | null
    action: string
  }) => Promise<ListLoadResult>
  /** 初始加载，默认 `true` */
  initialLoad?: boolean
  /** 列表数据 */
  list?: ListAsyncItem[]
  /** 列表高度 */
  height?: number
  /** 子元素 */
  children?: ReactNode
  /** 选中的项 */
  value?: ListAsyncItem | ListAsyncItem[] | null
  /** 格式化项 */
  formatViewItem?: (
    item: ListAsyncItem,
    options: { index: number; result?: ListLoadResult | null }
  ) => ListAsyncViewItem
  /** 错误重试，默认 `true` */
  errorRetry?: boolean
  /** 空状态重试 */
  emptyRetry?: boolean
  /** 是否多选 */
  multiple?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 是否可选 */
  checkable?: boolean
  /** 启用顶部刷新，默认 `true` */
  topRefreshEnabled?: boolean
  /** 启用底部刷新，默认 `true` */
  bottomRefreshEnabled?: boolean
  /** 虚拟滚动配置 */
  virtual?: ListAsyncVirtualProp
  /** 滚动阈值 */
  threshold?: number
  /** 触摸事件阻止冒泡 */
  touchStopPropagation?: boolean
  /** 安全区域适配 */
  safeArea?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 项自定义样式 */
  itemStyle?: CSSProperties
  /** 项自定义类名 */
  itemClassName?: string
  /** 项布局 */
  itemLayout?: string
  /** 复选框外观 */
  checkboxVariant?: string
  /** 复选框位置 */
  checkboxPlacement?: string
  /** 自定义项渲染 */
  itemRender?: (
    item: ListAsyncItem,
    options: {
      index: number
      checked: boolean
      onChange: (
        item: ListAsyncItem & { checked?: boolean },
        changeOptions?: {
          action?: 'item' | 'checkbox'
          currentItem: ListAsyncItem & { checked?: boolean }
        }
      ) => void
    }
  ) => ReactNode
  /** 加载中渲染 */
  loadingRender?: (options: { action?: string }) => ReactNode
  /** 加载弹窗样式 */
  loadingModalStyle?: CSSProperties
  /** 加载弹窗类名 */
  loadingModalClassName?: string
  /** 加载遮罩样式 */
  loadingMaskStyle?: CSSProperties
  /** 加载遮罩类名 */
  loadingMaskClassName?: string
  /** 加载弹窗挂载节点 */
  loadingPortal?: HTMLElement
  /** 列表前置渲染 */
  prependRender?: (options: {
    list?: ListAsyncItem[]
    value?: ListAsyncItem | ListAsyncItem[] | null
    onChange?: (
      newValue: ListAsyncItem | ListAsyncItem[] | null,
      options?: { action?: string; currentItem: ListAsyncItem }
    ) => void
  }) => ReactNode
  /** 列表后置渲染 */
  appendRender?: (options: {
    list?: ListAsyncItem[]
    value?: ListAsyncItem | ListAsyncItem[] | null
    onChange?: (
      newValue: ListAsyncItem | ListAsyncItem[] | null,
      options?: { action?: string; currentItem: ListAsyncItem }
    ) => void
  }) => ReactNode
  /** 变化事件 */
  onChange?: (
    newValue: ListAsyncItem | ListAsyncItem[] | null,
    options?: { action?: string; currentItem: ListAsyncItem }
  ) => void
  /** 滚动时顶部可见项变化 */
  onItemVisibleChange?: (item: ListAsyncItem) => void
  /** 顶部刷新回调 */
  onTopRefresh?: () => void | Promise<void>
  /** 底部刷新回调 */
  onBottomRefresh?: () => void | Promise<void>
  /** 加载事件 */
  onLoad?: (params: { result: ListLoadResult | null; action: ListAsyncLoadAction }) => void
  /** 滚动事件 */
  onScroll?: (e: Event) => void
  /** 滚动结束事件 */
  onScrollEnd?: (e: Event) => void
}

export interface ListAsyncScrollToLocationParams {
  id: string | number
}

export interface ListAsyncRef {
  /** 根元素 */
  element: HTMLElement | null
  /** 滚动到指定 Item（按 item.id） */
  scrollToLocation?: (params: ListAsyncScrollToLocationParams) => void
  /** 重新加载 */
  reload?: (action?: string) => void
  /** 获取加载结果 */
  getResult?: () => ListLoadResult | null
}

export interface ListAsyncItem {
  children?: ListAsyncItem[]
}

export interface ListAsyncViewItem {
  children?: ListAsyncViewItem[]
}

export interface ListAsyncListProps {

  initialLoad?: boolean
  errorRetry?: boolean
  onLoad?: (options: { result: ListLoadResult | null; action: ListAsyncLoadAction }) => void
  topRefreshEnabled?: boolean
  bottomRefreshEnabled?: boolean
  emptyRetry?: boolean
  loadingRender?: (options: { action?: string }) => ReactNode
  loadingModalStyle?: CSSProperties
  loadingModalClassName?: string
  loadingMaskStyle?: CSSProperties
  loadingMaskClassName?: string
  loadingPortal?: HTMLElement
  children?: ReactNode

  value?: ListAsyncItem | ListAsyncItem[] | null
  list?: ListAsyncItem[]
  formatViewItem?: (
    item: ListAsyncItem,
    options: { index: number; result?: ListLoadResult | null }
  ) => ListAsyncViewItem
  virtual?: ListAsyncVirtualProp
  threshold?: number
  touchStopPropagation?: boolean
  safeArea?: boolean

  style?: CSSProperties
  className?: string

  prependRender?: (options: {
    list?: ListAsyncItem[]
    value?: ListAsyncItem | ListAsyncItem[] | null
    onChange?: ListProps['onChange']
  }) => ReactNode
  appendRender?: (options: {
    list?: ListAsyncItem[]
    value?: ListAsyncItem | ListAsyncItem[] | null
    onChange?: ListProps['onChange']
  }) => ReactNode
  /** 滚动时顶部可见项变化（对齐 SectionList onViewableItemsChanged 的顶部项场景） */
  onItemVisibleChange?: (item: ListAsyncItem) => void

  onScroll?: PageMainProps['onScroll']
  onScrollEnd?: PageMainProps['onScrollEnd']
  onTopRefresh?: PageMainProps['onTopRefresh']
  onBottomRefresh?: PageMainProps['onBottomRefresh']
}
