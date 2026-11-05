/**
 * Picker Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { ComponentType, CSSProperties, MouseEvent, ReactNode, SVGProps } from 'react'
import type { ModalProps } from '../Modal/Modal-props'
import type { PickerItem } from './Picker-item-types'

export interface PickerComboProps {
  /** 选中的值 */
  value?: PickerItem[] | null
  /** 占位符 */
  placeholder?: string
  /** 格式化函数 */
  formatter?: (value: PickerItem[] | null, options?: { separator?: string }) => string
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
  list?: PickerItem[] | PickerItem[][]
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
  /** 打开前事件 */
  onBeforeOpen?: () => boolean | void | Promise<boolean | void>
  /** 变化事件 */
  onChange?: (value: PickerItem[]) => void
}

export interface PickerModalProps {
  /** 选中的值 */
  value?: PickerItem[] | null
  /** 选项列表 */
  list?: PickerItem[] | PickerItem[][]
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
  onClose?: (e?: MouseEvent<HTMLDivElement>) => void
  /** 确认事件 */
  onOk?: (value: PickerItem[]) => boolean | void | Date | Promise<boolean | void | Date>
  /** 变化事件 */
  onChange?: (value: PickerItem[]) => void
}

export interface PickerMainProps {
  /** 是否显示 */
  open?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 选中的值 */
  value?: PickerItem[] | null
  /** 选项列表 */
  list?: PickerItem[] | PickerItem[][]
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 变化事件 */
  onChange?: (value: PickerItem[]) => void
}

export interface PickerComboRef {
  /** 根元素 */
  element?: HTMLDivElement | null
  /** 获取根元素 */
  /** 关闭选择器 */
  close?: () => void
  /** 打开选择器 */
  open?: () => void
}

export interface PickerModalRef {
  /** 主元素 */
  mainElement: HTMLDivElement | null
  /** 获取主元素 */
  getMainElement: () => HTMLDivElement | null
  /** 获取当前值 */
  getValue: () => PickerItem[] | null
  /** 更新视图 */
  update: () => void
}

export interface PickerMainRef {
  /** 主元素 */
  mainElement: HTMLDivElement | null
  /** 获取主元素 */
  getMainElement: () => HTMLDivElement | null
  /** 获取当前值 */
  getValue: () => PickerItem[] | null
  /** 更新视图 */
  update: () => void
}

export interface PickerItem {
  id: string | number
  name: string
  [key: string]: unknown
}
