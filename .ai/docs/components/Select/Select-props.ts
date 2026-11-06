/**
 * Select Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { ComponentType, CSSProperties, ReactNode, SVGProps } from 'react'
import type { ModalProps } from '../Modal/Modal-props'
import type { SelectItem } from './Select-item-types'
import type { ListViewItem } from '../List/List-props'

export interface SelectComboProps {
  /** 选中的值 */
  value?: SelectItem | SelectItem[] | null
  /** 占位符 */
  placeholder?: string
  /** 格式化函数 */
  formatter?: (value: SelectItem | SelectItem[] | null, options?: { separator?: string }) => string
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
  /** 选项列表 */
  list?: SelectItem[]
  /** 格式化项 */
  formatViewItem?: (item: SelectItem, options: { index: number }) => ListViewItem
  /** 是否多选 */
  multiple?: boolean
  /** 是否可选 */
  checkable?: boolean
  /** 点击遮罩关闭 */
  maskClosable?: boolean
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
  /** 取消按钮 */
  cancel?: ReactNode
  /** 取消按钮可见 */
  cancelVisible?: boolean
  /** 头部渲染 */
  headerRender?: (ctx: {
    open: boolean
    value?: SelectItem | SelectItem[] | null
    list?: SelectItem[]
  }) => ReactNode
  /** 项样式 */
  itemStyle?: CSSProperties
  /** 项类名 */
  itemClassName?: string
  /** 项布局 */
  itemLayout?: string
  /** 复选框变体 */
  checkboxVariant?: string
  /** 复选框位置 */
  checkboxPlacement?: string
  /** 项渲染 */
  itemRender?: (
    item: SelectItem,
    options: {
      index: number
      checked: boolean
      onChange: (
        item: SelectItem & { checked?: boolean },
        changeOptions?: {
          action?: 'item' | 'checkbox'
          currentItem: SelectItem & { checked?: boolean }
        }
      ) => void
    }
  ) => ReactNode
  /** 确认事件 */
  onOk?: (value: SelectItem | SelectItem[] | null) => unknown
  /** 变化事件 */
  onChange?: (
    newValue: SelectItem | SelectItem[] | null,
    options?: { action?: string; currentItem: SelectItem }
  ) => void
  /** 打开前事件 */
  onBeforeOpen?: () => boolean | void | Promise<boolean | void>
}

export interface SelectModalProps {
  /** 选中的值 */
  value?: SelectItem | SelectItem[] | null
  /** 选项列表 */
  list?: SelectItem[]
  /** 格式化项 */
  formatViewItem?: (item: SelectItem, options: { index: number }) => ListViewItem
  /** 是否多选 */
  multiple?: boolean
  /** 是否可选 */
  checkable?: boolean
  /** 项样式 */
  itemStyle?: CSSProperties
  /** 项类名 */
  itemClassName?: string
  /** 项布局 */
  itemLayout?: string
  /** 复选框变体 */
  checkboxVariant?: string
  /** 复选框位置 */
  checkboxPlacement?: string
  /** 项渲染 */
  itemRender?: (
    item: SelectItem,
    options: {
      index: number
      checked: boolean
      onChange: (
        item: SelectItem & { checked?: boolean },
        changeOptions?: {
          action?: 'item' | 'checkbox'
          currentItem: SelectItem & { checked?: boolean }
        }
      ) => void
    }
  ) => ReactNode
  /** 变化事件 */
  onChange?: (
    newValue: SelectItem | SelectItem[] | null,
    options?: { action?: string; currentItem: SelectItem }
  ) => void
  /** 是否显示 */
  open?: boolean
  /** 点击遮罩关闭 */
  maskClosable?: boolean
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
  /** 取消按钮 */
  cancel?: ReactNode
  /** 取消按钮可见 */
  cancelVisible?: boolean
  /** 头部渲染 */
  headerRender?: (ctx: {
    open: boolean
    value?: SelectItem | SelectItem[] | null
    list?: SelectItem[]
  }) => ReactNode
  /** 确认事件 */
  onOk?: (value: SelectItem | SelectItem[] | null) => unknown
  /** 关闭事件 */
  onClose?: () => void
}

export interface SelectMainProps {
  /** 选中的值 */
  value?: SelectItem | SelectItem[] | null
  /** 选项列表 */
  list?: SelectItem[]
  /** 格式化项 */
  formatViewItem?: (item: SelectItem, options: { index: number }) => ListViewItem
  /** 是否多选 */
  multiple?: boolean
  /** 是否可选 */
  checkable?: boolean
  /** 项样式 */
  itemStyle?: CSSProperties
  /** 项类名 */
  itemClassName?: string
  /** 项布局 */
  itemLayout?: string
  /** 复选框变体 */
  checkboxVariant?: string
  /** 复选框位置 */
  checkboxPlacement?: string
  /** 项渲染 */
  itemRender?: (
    item: SelectItem,
    options: {
      index: number
      checked: boolean
      onChange: (
        item: SelectItem & { checked?: boolean },
        changeOptions?: {
          action?: 'item' | 'checkbox'
          currentItem: SelectItem & { checked?: boolean }
        }
      ) => void
    }
  ) => ReactNode
  /** 变化事件 */
  onChange?: (
    newValue: SelectItem | SelectItem[] | null,
    options?: { action?: string; currentItem: SelectItem }
  ) => void
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}

export interface SelectComboRef {
  /** 根元素 */
  element?: HTMLElement | null
  /** 获取根元素 */
  /** 关闭选择器 */
  close?: () => void
  /** 打开选择器 */
  open?: () => void
}

export interface SelectModalRef {
  /** 主列表元素 */
  mainElement: HTMLDivElement | null
  /** 获取主列表元素 */
  getMainElement: () => HTMLDivElement | null
}

export interface SelectMainRef {
  /** 主元素 */
  mainElement: HTMLDivElement | null
  /** 获取主元素 */
  getMainElement: () => HTMLDivElement | null
}

export interface SelectItem {
  children?: SelectItem[]
}

export interface SelectListProps {
  value?: SelectItem | SelectItem[] | null
  list?: SelectItem[]
  formatViewItem?: (item: SelectItem, options: { index: number }) => ListViewItem
  itemRender?: (
    item: SelectItem,
    options: {
      index: number
      checked: boolean
      onChange: (
        item: SelectItem & { checked?: boolean },
        changeOptions?: {
          action?: 'item' | 'checkbox'
          currentItem: SelectItem & { checked?: boolean }
        }
      ) => void
    }
  ) => ReactNode
  onChange?: (
    newValue: SelectItem | SelectItem[] | null,
    options?: { action?: string; currentItem: SelectItem }
  ) => void
}
