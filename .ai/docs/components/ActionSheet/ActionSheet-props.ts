/**
 * ActionSheet Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { ComponentType, CSSProperties, MouseEvent, ReactNode, RefObject, SVGProps } from 'react'
import type { ComboRef } from '../Combo/Combo-props'
import type { ListItem } from '../List/List-props'

export interface ActionSheetComboProps {
  /** 选中的值 */
  value?: ListItem | null
  /** 占位符 */
  placeholder?: string
  /** 格式化函数 */
  formatter?: (...args: unknown[]) => string
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
  /** 自定义组合触发区域渲染 */
  comboRender?: (props: {
    comboRef: RefObject<ComboRef | null>
    open: boolean
    onClick: () => void
  }) => ReactNode
  /** 子元素 */
  children?: ReactNode
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
  list?: ListItem[]
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
  portal?: HTMLElement | null | false
  /** 标题 */
  title?: ReactNode
  /** 取消按钮 */
  cancel?: ReactNode
  /** 取消按钮可见 */
  cancelVisible?: boolean
  /** 项渲染 */
  itemRender?: (
    item: ListItem,
    helpers: { onChange: (item: ListItem) => void }
  ) => ReactNode
  /** 打开前事件 */
  onBeforeOpen?: () => Promise<boolean | void>
  /** 打开事件 */
  onOpen?: () => void
  /** 关闭事件 */
  onClose?: () => void
  /** 点击事件 */
  onClick?: () => void
  /** 变化事件 */
  onChange?: (value: ListItem | null) => void
}

export interface ActionSheetModalProps {
  /** 选中的值 */
  value?: ListItem | null
  /** 选项列表 */
  list?: ListItem[]
  /** 是否显示，默认 `false` */
  open?: boolean
  /** 点击遮罩关闭，默认 `true` */
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
  /** 选项样式 */
  itemStyle?: CSSProperties
  /** 选项类名 */
  itemClassName?: string
  /** 组样式 */
  groupStyle?: CSSProperties
  /** 组类名 */
  groupClassName?: string
  /** 挂载节点 */
  portal?: HTMLElement | null | false
  /** 标题 */
  title?: ReactNode
  /** 取消按钮 */
  cancel?: ReactNode
  /** 取消按钮可见 */
  cancelVisible?: boolean
  /** 项渲染 */
  itemRender?: (
    item: ListItem,
    helpers: { onChange: (item: ListItem) => void }
  ) => ReactNode
  /** 变化事件 */
  onChange?: (value: ListItem | null) => void
  /** 取消事件 */
  onCancel?: () => void
  /** 关闭事件 */
  onClose?: () => void
}

export interface ActionSheetItemProps {
  /** 是否选中 */
  checked?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 项内容 */
  children?: ReactNode
  /** 点击事件 */
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

export interface ActionSheetComboRef {
  /** 关闭面板 */
  close?: () => void
  /** 打开面板 */
  open?: () => void
}

export interface ActionSheetMainProps {

  value?: ListItem | null
  list?: ListItem[]

  itemStyle?: CSSProperties
  itemClassName?: string
  groupStyle?: CSSProperties
  groupClassName?: string

  itemRender?: (
    item: ListItem,
    options: { onChange: (item: ListItem) => void }
  ) => ReactNode

  onChange?: (item: ListItem) => void
}

export interface ActionSheetCancelProps {

  cancel?: ReactNode
  cancelVisible?: boolean

  onCancel?: () => void
  onClose?: () => void
}

export interface ActionSheetHeaderProps {

  title?: ReactNode
}

export interface ActionSheetMainRef {
  element: HTMLElement | null
}
