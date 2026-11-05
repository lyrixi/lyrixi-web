/**
 * Cascader Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { ComponentType, CSSProperties, ReactNode, SVGProps } from 'react'
import type { ModalProps } from '../Modal/Modal-props'
import type {
  CascaderItem,
  LoadDataResult,
  LoadDataFn
} from './Cascader-item-types'

export interface CascaderComboProps {
  /** 选中的值 */
  value?: CascaderItem[] | null
  /** 占位符 */
  placeholder?: string
  /** 格式化函数 */
  formatter?: (value: CascaderItem[] | null, options?: { separator?: string }) => string
  /** 自动调整大小 */
  autoSize?: boolean
  /** 分隔符 */
  separator?: string
  /** 模式 */
  mode?: string
  /** 是否只读 */
  readOnly?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 左侧图标渲染 */
  leftIconRender?: () => ReactNode
  /** 左侧图标 SVG 组件 */
  leftIconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  /** 右侧图标渲染 */
  rightIconRender?: () => ReactNode
  /** 右侧图标 SVG 组件 */
  rightIconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  /** 清除按钮渲染 */
  clearRender?: () => ReactNode
  /** 级联数据 */
  list?: CascaderItem[]
  /** 加载数据函数 */
  loadData?: LoadDataFn
  /** 点击遮罩关闭 */
  maskClosable?: boolean
  /** 是否安全区 */
  safeArea?: boolean
  /** 模态框样式 */
  modalStyle?: CSSProperties
  /** 模态框类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: CSSProperties
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: ModalProps['portal']
  /** 标题 */
  title?: ReactNode
  /** 确认按钮 */
  ok?: ReactNode
  /** 取消按钮 */
  cancel?: ReactNode
  /** 确认按钮可见 */
  okVisible?: boolean
  /** 取消按钮可见 */
  cancelVisible?: boolean
  /** 搜索可见 */
  searchVisible?: boolean
  /** 打开前事件 */
  onBeforeOpen?: () => boolean | Promise<boolean>
  /** 搜索事件 */
  onSearch?: (keyword: string, ctx: { list: CascaderItem[] }) => void
  /** 变化事件 */
  onChange?: (value: CascaderItem[]) => void
}

export interface CascaderModalProps {
  /** 选中的值 */
  value?: CascaderItem[] | null
  /** 级联数据 */
  list?: CascaderItem[] | null
  /** 加载数据 */
  loadData?: LoadDataFn
  /** 是否显示 */
  open?: boolean
  /** 点击遮罩关闭 */
  maskClosable?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 是否安全区 */
  safeArea?: boolean
  /** 模态框样式 */
  modalStyle?: CSSProperties
  /** 模态框类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: CSSProperties
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: ModalProps['portal']
  /** 搜索可见 */
  searchVisible?: boolean
  /** 标题 */
  title?: ReactNode
  /** 确认按钮 */
  ok?: ReactNode
  /** 取消按钮 */
  cancel?: ReactNode
  /** 确认按钮可见 */
  okVisible?: boolean
  /** 取消按钮可见 */
  cancelVisible?: boolean
  /** 关闭事件 */
  onClose?: () => void
  /** 确认事件 */
  onOk?: (value: CascaderItem[] | null | undefined) => boolean | Promise<unknown> | void
  /** 搜索事件 */
  onSearch?: (keyword: string, ctx: { list: CascaderItem[] }) => void
  /** 变化事件 */
  onChange?: (value: CascaderItem[], options?: unknown) => void
}

export interface CascaderMainProps {
  /** 选中的值 */
  value?: CascaderItem[]
  /** 级联数据 */
  list?: CascaderItem[]
  /** 加载数据 */
  loadData?: LoadDataFn
  /** 列表样式 */
  listStyle?: CSSProperties
  /** 列表类名 */
  listClassName?: string
  /** 项样式 */
  itemStyle?: CSSProperties
  /** 项类名 */
  itemClassName?: string
  /** 搜索可见 */
  searchVisible?: boolean
  /** 标签栏渲染 */
  tabbarRender?: (params: {
    list: CascaderItem[]
    value: CascaderItem | undefined
    onChange: (tab: CascaderItem) => void
  }) => ReactNode
  /** 搜索事件 */
  onSearch?: (keyword: string, ctx: { list: CascaderItem[] }) => unknown
  /** 变化事件 */
  onChange?: (value: CascaderItem[]) => void
}

export interface CascaderDistrictComboProps {
  /** 选中的值 */
  value?: CascaderItem[] | null
  /** 占位符 */
  placeholder?: string
  /** 格式化函数 */
  formatter?: (value: CascaderItem[] | null, options?: { separator?: string }) => string
  /** 自动调整大小 */
  autoSize?: boolean
  /** 分隔符 */
  separator?: string
  /** 模式 */
  mode?: string
  /** 是否只读 */
  readOnly?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 左侧图标渲染 */
  leftIconRender?: () => ReactNode
  /** 左侧图标 SVG 组件 */
  leftIconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  /** 右侧图标渲染 */
  rightIconRender?: () => ReactNode
  /** 右侧图标 SVG 组件 */
  rightIconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  /** 清除按钮渲染 */
  clearRender?: () => ReactNode
  /** 地区类型 */
  type?: string
  /** 最小层级 */
  min?: string
  /** 加载国家 */
  loadCountries?: () => Promise<unknown>
  /** 加载省市区 */
  loadCountryRegions?: (id?: string | number) => Promise<unknown>
  /** 加载街道 */
  loadStreets?: (id: string | number, ctx?: { value?: CascaderItem[] }) => Promise<unknown>
  /** 点击遮罩关闭 */
  maskClosable?: boolean
  /** 列表样式 */
  listStyle?: CSSProperties
  /** 列表类名 */
  listClassName?: string
  /** 项样式 */
  itemStyle?: CSSProperties
  /** 项类名 */
  itemClassName?: string
  /** 模态框样式 */
  modalStyle?: CSSProperties
  /** 模态框类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: CSSProperties
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: ModalProps['portal']
  /** 标题 */
  title?: ReactNode
  /** 确认按钮 */
  ok?: ReactNode
  /** 取消按钮 */
  cancel?: ReactNode
  /** 取消按钮可见 */
  cancelVisible?: boolean
  /** 搜索可见 */
  searchVisible?: boolean
  /** 打开前事件 */
  onBeforeOpen?: () => boolean | Promise<boolean>
  /** 变化事件 */
  onChange?: (value: CascaderItem[]) => void
}

export interface CascaderDistrictModalProps {
  /** 选中的值 */
  value?: CascaderItem[] | null
  /** 地区类型 */
  type?: string
  /** 加载国家 */
  loadCountries?: () => Promise<unknown>
  /** 加载省市区 */
  loadCountryRegions?: (id?: string | number) => Promise<unknown>
  /** 加载街道 */
  loadStreets?: (id: string | number, ctx?: { value?: CascaderItem[] }) => Promise<unknown>
  /** 是否显示 */
  open?: boolean
  /** 最小层级 */
  min?: string
  /** 点击遮罩关闭 */
  maskClosable?: boolean
  /** 是否安全区 */
  safeArea?: boolean
  /** 列表样式 */
  listStyle?: CSSProperties
  /** 列表类名 */
  listClassName?: string
  /** 项样式 */
  itemStyle?: CSSProperties
  /** 项类名 */
  itemClassName?: string
  /** 模态框样式 */
  modalStyle?: CSSProperties
  /** 模态框类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: CSSProperties
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: ModalProps['portal']
  /** 搜索可见 */
  searchVisible?: boolean
  /** 标题 */
  title?: ReactNode
  /** 确认按钮 */
  ok?: ReactNode
  /** 取消按钮 */
  cancel?: ReactNode
  /** 取消按钮可见 */
  cancelVisible?: boolean
  /** 关闭事件 */
  onClose?: () => void
  /** 确认事件 */
  onOk?: (value: CascaderItem[] | null | undefined) => boolean | Promise<unknown> | void
  /** 变化事件 */
  onChange?: (value: CascaderItem[]) => void
}

export interface CascaderDistrictMainProps {
  /** 是否显示 */
  open?: boolean
  /** 选中的值 */
  value?: CascaderItem[] | null
  /** 地区类型 */
  type?: string
  /** 加载国家 */
  loadCountries?: () => Promise<unknown>
  /** 加载省市区 */
  loadCountryRegions?: (id?: string | number) => Promise<unknown>
  /** 加载街道 */
  loadStreets?: (id: string | number, ctx?: { value?: CascaderItem[] }) => Promise<unknown>
  /** 列表样式 */
  listStyle?: CSSProperties
  /** 列表类名 */
  listClassName?: string
  /** 项样式 */
  itemStyle?: CSSProperties
  /** 项类名 */
  itemClassName?: string
  /** 搜索可见 */
  searchVisible?: boolean
  /** 变化事件 */
  onChange?: (value: CascaderItem[]) => void
}

export interface CascaderComboRef {
  /** 根元素 */
  element?: HTMLDivElement | null
  /** 获取根元素 */
  /** 关闭选择器 */
  close?: () => void
  /** 打开选择器 */
  open?: () => void
}

export interface CascaderMainRef {
  /** 主元素 */
  mainElement: HTMLDivElement | null
  /** 获取主元素 */
  getMainElement: () => HTMLDivElement | null
  /** 更新选中值 */
  update: (value: CascaderItem[] | null | undefined, opts?: { action?: string }) => void
}

export type CascaderDistrictComboRef {
  open: () => void
  close: () => void
}

export type CascaderDistrictModalMainHandle= { loadList: () => Promise<void>;

export interface CascaderMainSearchPageSearchResult {
  status: string
  code?: string
  message?: ReactNode
  data?: { list: CascaderMainSearchPageResultItem[] }
}

export interface CascaderMainSearchPageProps {
  list: CascaderItem[]
  onSearch?: (
    keyword: string,
    options: { list: CascaderItem[] }
  ) =>
    | void
    | CascaderMainSearchPageSearchResult
    | Promise<CascaderMainSearchPageSearchResult | void>
  onChange?: (v: CascaderItem[]) => void
  onClose?: () => void
}

export interface CascaderMainSearchControlProps {

  list: CascaderItem[]

  onSearch?: (keyword: string, options: { list: CascaderItem[] }) => void
  onChange?: (v: CascaderItem[]) => void
}

export interface CascaderMainAnchorItem {
  anchor?: string
  [key: string]: unknown
}

export interface CascaderMainUpdateIsLeafTabItem {
  id?: string | number
  isLeaf?: boolean
  [key: string]: unknown
}

export interface CascaderMainUpdateIsLeafParams {
  currentValue?: CascaderMainUpdateIsLeafTabItem[]
  value?: CascaderMainUpdateIsLeafTabItem[]
  tabsRef: MutableRefObject<CascaderMainUpdateIsLeafTabItem[]>
}

export interface CascaderMainLoadChildrenResult {
  status: 'success' | 'error' | 'empty'
  code?: string
  message?: string
  data?: {
    list?: CascaderItem[]
    async?: boolean
  }
}

export interface CascaderItem {
  id: string | number
  name?: string
  anchor?: string
  isLeaf?: boolean
  isChoose?: boolean
  parentid?: string | number | null
  children?: CascaderItem[]
}

export interface CascaderMainSearchControlSearchBarFieldProps {}
