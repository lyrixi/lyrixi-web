/**
 * ListPagination Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

// ---------- 公共类型 ----------

export interface ListPaginationItem {
  id?: string | number
  name?: string
  disabled?: boolean
  children?: ListPaginationItem[]
  [key: string]: unknown
}

export interface ListPaginationViewItem extends ListPaginationItem {
  _raw: ListPaginationItem
}

export type ListAsyncLoadAction = 'load' | 'reload' | 'topRefresh' | 'bottomRefresh' | 'retry' | ''

export interface ListLoadResultData {
  list?: ListPaginationItem[]
  scrollTop?: number
  totalPage?: number
  totalRows?: number
  [key: string]: unknown
}

/** loadData / formatResponse 返回结果，形态对齐 Bridge `{ status, code, data }` */
export interface ListLoadResult {
  status: string
  code?: string
  message?: string
  data?: ListLoadResultData
}

export interface ListAsyncVirtualProp {
  getItemHeight: (item: ListPaginationItem) => number
}

// ---------- ListPagination.Main ----------

export interface ListPaginationMainProps {
  /** 缓存名称 */
  cacheName?: string
  /** 数据接口地址 */
  url?: string
  /** 请求头 */
  headers?: Record<string, string>
  /** 查询参数 */
  payload?: Record<string, unknown>
  /** 分页配置 */
  pagination?: { rows?: number }
  /** 格式化入参 */
  formatPayload?: (
    params: Record<string, unknown>
  ) => Promise<Record<string, unknown>> | Record<string, unknown>
  /** 格式化响应 */
  formatResponse?: (
    response: unknown,
    options: { payload: Record<string, unknown> }
  ) => Promise<ListLoadResult> | ListLoadResult
  /** 是否初始加载 */
  initialLoad?: boolean
  /** 错误重试 */
  errorRetry?: boolean
  /** 空状态重试 */
  emptyRetry?: boolean
  /** 选中的值 */
  value?: ListPaginationItem | ListPaginationItem[] | null
  /** 是否多选 */
  multiple?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 是否可选 */
  checkable?: boolean
  /** 复选框样式变体 */
  checkboxVariant?: string
  /** 复选框位置 */
  checkboxPlacement?: string
  /** 项样式 */
  itemStyle?: CSSProperties
  /** 项类名 */
  itemClassName?: string
  /** 项布局 */
  itemLayout?: string
  /** 静态列表 */
  list?: ListPaginationItem[]
  /** 格式化项 */
  formatViewItem?: (item: ListPaginationItem, options: { index: number }) => ListPaginationViewItem
  /** 是否虚拟滚动 */
  virtual?: boolean | { itemHeight?: number; overscan?: number }
  /** 触发阈值 */
  threshold?: number
  /** 触摸阻止冒泡 */
  touchStopPropagation?: boolean
  /** 是否安全区 */
  safeArea?: boolean
  /** 启用顶部刷新 */
  topRefreshEnabled?: boolean
  /** 启用底部刷新 */
  bottomRefreshEnabled?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 子元素 */
  children?: ReactNode
  /** 自定义项渲染 */
  itemRender?: (
    item: ListPaginationItem,
    options: {
      index: number
      checked: boolean
      onChange: (
        item: ListPaginationItem & { checked?: boolean },
        changeOptions?: {
          action?: 'item' | 'checkbox'
          currentItem: ListPaginationItem & { checked?: boolean }
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
  /** 加载挂载节点 */
  loadingPortal?: HTMLElement
  /** 前置渲染 */
  prependRender?: (options: {
    list?: ListPaginationItem[]
    value?: ListPaginationItem | ListPaginationItem[] | null
    onChange?: (
      newValue: ListPaginationItem | ListPaginationItem[] | null,
      options?: { action?: string; currentItem: ListPaginationItem }
    ) => void
  }) => ReactNode
  /** 后置渲染 */
  appendRender?: (options: {
    list?: ListPaginationItem[]
    value?: ListPaginationItem | ListPaginationItem[] | null
    onChange?: (
      newValue: ListPaginationItem | ListPaginationItem[] | null,
      options?: { action?: string; currentItem: ListPaginationItem }
    ) => void
  }) => ReactNode
  /** 变化事件 */
  onChange?: (
    newValue: ListPaginationItem | ListPaginationItem[] | null,
    options?: { action?: string; currentItem: ListPaginationItem }
  ) => void
  /** 滚动事件 */
  onScroll?: (e: React.UIEvent) => void
  /** 滚动结束事件 */
  onScrollEnd?: (e: React.UIEvent) => void
  /** 顶部刷新事件 */
  onTopRefresh?: () => void | Promise<boolean | string | undefined>
  /** 底部刷新事件 */
  onBottomRefresh?: () => void | Promise<boolean | string | undefined>
  /** 加载事件 */
  onLoad?: (params: {
    result: { total?: number; rows: ListPaginationItem[] } | null
    action: string
  }) => void
}

export interface ListPaginationMainRef {
  /** 根元素 */
  element: HTMLElement | null
  /** 滚动到指定 Item（按 item.id） */
  scrollToLocation?: (params: { id: string | number }) => void
  /** 重新加载 */
  reload: (action?: string) => void
  /** 获取结果 */
  getResult: () => { total?: number; rows: ListPaginationItem[] } | null
  /** 更新缓存 */
  updateCache: (extraCache?: Record<string, unknown>) => void
  /** 清除缓存 */
  clearCache: () => unknown
  /** 获取缓存 */
  getCache: () => unknown
}

// ---------- ListPagination.Modal ----------

export interface ListPaginationModalProps extends ListPaginationMainProps {
  /** 是否显示弹窗 */
  open?: boolean
  /** 点击遮罩关闭 */
  maskClosable?: boolean
  /** 弹窗样式 */
  modalStyle?: CSSProperties
  /** 弹窗类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: CSSProperties
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: HTMLElement | null | false
  /** 弹窗标题 */
  title?: ReactNode
  /** 取消按钮 */
  cancel?: ReactNode
  /** 取消按钮可见 */
  cancelVisible?: boolean
  /** 头部渲染 */
  headerRender?: (options: {
    open?: boolean
    value?: ListPaginationItem | ListPaginationItem[] | null
    list?: ListPaginationItem[]
  }) => ReactNode
  /** 确认事件 */
  onOk?: (
    value: ListPaginationItem | ListPaginationItem[] | null
  ) => Promise<unknown | false> | unknown | false
  /** 关闭事件 */
  onClose?: () => void
}

export interface ListPaginationModalRef extends ListPaginationMainRef {
  /** 遮罩元素 */
  maskElement: HTMLDivElement | null
  /** 获取遮罩元素 */
  /** 模态框元素 */
  modalElement: HTMLDivElement | null
  /** 获取模态框元素 */
}

// ---------- ListPagination.Combo ----------

export interface ListPaginationComboProps extends ListPaginationModalProps {
  /** 占位符 */
  placeholder?: string
  /** 展示格式化 */
  formatter?: (
    value: ListPaginationItem | ListPaginationItem[] | null,
    options?: { separator?: string }
  ) => string
  /** 自动调整大小 */
  autoSize?: boolean
  /** 多选时分隔符 */
  separator?: string
  /** 展示模式 */
  mode?: string
  /** 只读 */
  readOnly?: boolean
  /** 禁用 */
  disabled?: boolean
  /** 左侧图标渲染 */
  leftIconRender?: (props: { value?: string }) => ReactNode
  /** 左侧图标 SVG */
  leftIconSvg?: string
  /** 右侧图标渲染 */
  rightIconRender?: (props: { value?: string }) => ReactNode
  /** 右侧图标 SVG */
  rightIconSvg?: string
  /** 清除按钮渲染 */
  clearRender?: (props: { onClear?: () => void }) => ReactNode
  /** 点击事件 */
  onClick?: (e: React.MouseEvent) => void
  /** 打开前事件 */
  onBeforeOpen?: () => Promise<boolean | undefined> | boolean | undefined
}

export interface ListPaginationComboRef extends ListPaginationModalRef {
  /** 关闭弹窗 */
  close: () => void
  /** 打开弹窗 */
  open: () => void
}

export interface ListPaginationListProps {
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
  value?: ListPaginationItem | ListPaginationItem[] | null
  list?: ListPaginationItem[]
  formatViewItem?: (item: ListPaginationItem, options: { index: number }) => ListPaginationViewItem
  virtual?: ListAsyncVirtualProp
  threshold?: number
  touchStopPropagation?: boolean
  safeArea?: boolean
  style?: CSSProperties
  className?: string
  itemRender?: (
    item: ListPaginationItem,
    options: {
      index: number
      checked: boolean
      onChange: (
        item: ListPaginationItem & { checked?: boolean },
        changeOptions?: {
          action?: 'item' | 'checkbox'
          currentItem: ListPaginationItem & { checked?: boolean }
        }
      ) => void
    }
  ) => ReactNode
  prependRender?: (options: {
    list?: ListPaginationItem[]
    value?: ListPaginationItem | ListPaginationItem[] | null
    onChange?: (
      newValue: ListPaginationItem | ListPaginationItem[] | null,
      options?: { action?: string; currentItem: ListPaginationItem }
    ) => void
  }) => ReactNode
  appendRender?: (options: {
    list?: ListPaginationItem[]
    value?: ListPaginationItem | ListPaginationItem[] | null
    onChange?: (
      newValue: ListPaginationItem | ListPaginationItem[] | null,
      options?: { action?: string; currentItem: ListPaginationItem }
    ) => void
  }) => ReactNode
  onChange?: (
    newValue: ListPaginationItem | ListPaginationItem[] | null,
    options?: { action?: string; currentItem: ListPaginationItem }
  ) => void
  onScroll?: PageMainProps['onScroll']
  onScrollEnd?: PageMainProps['onScrollEnd']
  onTopRefresh?: PageMainProps['onTopRefresh']
  onBottomRefresh?: PageMainProps['onBottomRefresh']
}
