/**
 * ToolBar Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, MouseEvent, MouseEventHandler, ReactNode, RefObject, ComponentType, SVGProps } from 'react'
import type { ListItem } from '../List/List-props'
import type { ButtonRef, ButtonProps } from '../Button/Button-props'
import type { ComboRef } from '../Combo/Combo-props'

export interface ToolBarProps {
  /** 变体 */
  variant?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 工具栏内容 */
  children?: ReactNode
}

export interface ToolBarComboProps {
  /** 方向 */
  direction?: string
  /** 是否为块级元素 */
  block?: boolean
  /** 颜色 */
  color?: 'default' | 'transparent' | 'primary' | 'info' | 'warning' | 'danger' | 'success'
  /** 变体 */
  variant?: 'filled' | 'outlined' | 'text' | 'default'
  /** 高度尺寸 */
  size?: ButtonProps['size']
  /** 是否为等宽高 */
  sizeEqual?: boolean
  /** 字体大小 */
  fontSize?: string | number
  /** 圆角 */
  radius?: string | number
  /** 是否打开 */
  open?: boolean | null
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 自定义箭头渲染 */
  arrowRender?: (props: { open: boolean | null }) => ReactNode
  /** 自定义箭头 SVG */
  arrowSvg?: ComponentType<SVGProps<SVGSVGElement>> | null
  /** 子元素 */
  children?: ReactNode
  /** 点击事件 */
  onClick?: MouseEventHandler<HTMLDivElement>
}

export interface ToolBarDropdownProps extends ToolBarComboProps {
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
  portal?: HTMLElement | false | null
  /** 偏移量 */
  offset?: Record<string, number>
  /** 左侧偏移 */
  left?: string | number
  /** 右侧偏移 */
  right?: string | number
  /** 参考元素 */
  referenceElement?: HTMLElement | (() => HTMLElement) | null
  /** 关闭事件 */
  onClose?: () => void
  /** 自定义组合渲染 */
  comboRender?: (params: {
    comboRef: RefObject<ToolBarComboRef | null>
    open: boolean | null
    onClick: (e: MouseEvent) => void | Promise<void>
  }) => ReactNode
  /** 自定义模态框渲染 */
  modalRender?: (ctx: { open: boolean | null; onClose: () => void }) => ReactNode
  /** 打开前事件 */
  onBeforeOpen?: () => boolean | void | Promise<boolean | void>
  /** 打开事件 */
  onOpen?: () => void
}

export interface ToolBarDateRangeProps extends ToolBarDropdownProps {
  /** 日期范围值 */
  value?: (Date | null)[] | null
  /** 范围 ID */
  rangeId?: string | null
  /** 日期类型 */
  type?: string
  /** 占位符 */
  placeholder?: string
  /** 允许清除 */
  allowClear?: boolean
  /** 最小日期 */
  min?: Date | null
  /** 最大日期 */
  max?: Date | null
  /** 预设范围 */
  ranges?: Record<string, [Date | null, Date | null]>
  /** 确认事件 */
  onOk?: (
    value: (Date | null)[] | null | undefined,
    options: { rangeId: string | null | undefined }
  ) => void | boolean | (Date | null)[] | Promise<void | boolean | (Date | null)[]>
  /** 变化事件 */
  onChange?: (value: (Date | null)[] | null, options: { rangeId: string | null | undefined }) => void
}

export interface ToolBarFilterProps {
  /** 方向 */
  direction?: 'horizontal' | 'vertical' | string
  /** 是否为块级元素 */
  block?: boolean
  /** 颜色 */
  color?: 'default' | 'transparent' | 'primary' | 'info' | 'warning' | 'danger' | 'success'
  /** 变体 */
  variant?: 'filled' | 'outlined' | 'text' | 'default'
  /** 尺寸 */
  size?: ButtonProps['size']
  /** 等宽高 */
  sizeEqual?: boolean
  /** 字体大小 */
  fontSize?: string | number
  /** 圆角 */
  radius?: string | number
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 遮罩样式 */
  maskStyle?: CSSProperties
  /** 遮罩类名 */
  maskClassName?: string
  /** 模态框样式 */
  modalStyle?: CSSProperties
  /** 模态框类名 */
  modalClassName?: string
  /** 筛选内容 */
  children?: ReactNode
  /** 组合区渲染 */
  comboRender?: (params: {
    comboRef: RefObject<ButtonRef | null>
    open: boolean | null
    onClick: (e: MouseEvent<HTMLDivElement>) => void
  }) => ReactNode
  /** 模态内容渲染 */
  modalRender?: (params: { open: boolean | null; onClose: () => void }) => ReactNode
  /** 挂载节点 */
  portal?: HTMLElement | false | null
  /** 底部渲染 */
  footerRender?: (params: { onClose?: () => void }) => ReactNode
  /** 图标 */
  icon?: ReactNode
  /** 取消事件 */
  onCancel?: () => void
  /** 打开事件 */
  onOpen?: () => void
  /** 关闭事件 */
  onClose?: () => void
  /** 配置事件 */
  onConfig?: () => void
  /** 重置事件 */
  onReset?: () => void
  /** 确认事件 */
  onOk?: (ctx: { close: () => void }) => void
}

export interface ToolBarActionSheetProps {
  /** 变体 */
  variant?: 'filled' | 'outlined' | 'text' | 'default'
  /** Combo 方向 */
  direction?: string
  /** 块级 */
  block?: boolean
  /** Combo 颜色 */
  color?: 'default' | 'transparent' | 'primary' | 'info' | 'warning' | 'danger' | 'success'
  /** Combo 尺寸 */
  size?: ButtonProps['size']
  /** 等宽高 */
  sizeEqual?: boolean
  /** 字体大小 */
  fontSize?: string | number
  /** 圆角 */
  radius?: string | number
  /** 选中值 */
  value?: ListItem | null
  /** 占位符 */
  placeholder?: string
  /** 格式化函数 */
  formatter?: (...args: unknown[]) => string
  /** 自动尺寸 */
  autoSize?: boolean
  /** 分隔符 */
  separator?: string
  /** 模式 */
  mode?: string
  /** 只读 */
  readOnly?: boolean
  /** 禁用 */
  disabled?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 点击遮罩关闭 */
  maskClosable?: boolean
  /** 安全区 */
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
  portal?: HTMLElement | false | null
  /** 标题 */
  title?: ReactNode
  /** 取消按钮 */
  cancel?: ReactNode
  /** 取消按钮可见 */
  cancelVisible?: boolean
  /** 选项列表 */
  list?: ListItem[]
  /** 组合区渲染 */
  comboRender?: (props: {
    comboRef: RefObject<ComboRef | null>
    open: boolean
    onClick: () => void
  }) => ReactNode
  /** 选项渲染 */
  itemRender?: (
    item: ListItem,
    helpers: { onChange: (item: ListItem) => void }
  ) => ReactNode
  /** 子元素 */
  children?: ReactNode
  /** 左侧图标渲染 */
  leftIconRender?: () => ReactNode
  /** 左侧图标 SVG */
  leftIconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  /** 右侧图标渲染 */
  rightIconRender?: () => ReactNode
  /** 右侧图标 SVG */
  rightIconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  /** 清除按钮渲染 */
  clearRender?: () => ReactNode
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

export interface ToolBarRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
}

export interface ToolBarComboRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}

export interface ToolBarDropdownRef {
  /** 根元素 */
  element?: HTMLDivElement | null
  /** 获取根元素 */
  /** 关闭下拉 */
  close: () => void
  /** 打开下拉 */
  open: () => void
}

export interface ToolBarDateRangeRef {
  /** 根元素 */
  element?: HTMLDivElement | null
  /** 获取根元素 */
  /** 关闭选择器 */
  close: () => void
  /** 打开选择器 */
  open: () => void
}

export interface ToolBarFilterRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
  /** 关闭筛选 */
  close: () => void
  /** 打开筛选 */
  open: () => void
}

export interface ToolBarActionSheetRef {
  /** 关闭面板 */
  close?: () => void
  /** 打开面板 */
  open?: () => void
}

export interface ToolBarDateRangeBarProps {
  value?: (Date | null)[] | null
  rangeId?: string | null
  type?: string
  placeholder?: string
  allowClear?: boolean
  min?: Date | null
  max?: Date | null
  ranges?: DatePickerRangesMap
  onOk?: (
    value: (Date | null)[] | null | undefined,
    options: { rangeId: string | null | undefined }
  ) => void | boolean | (Date | null)[] | Promise<void | boolean | (Date | null)[]>
  onChange?: (value: (Date | null)[] | null, options: { rangeId: string | null | undefined }) => void
}

export interface ToolBarListProps {
  value?: ToolBarItem | ToolBarItem[] | null
  placeholder?: string
  list: ToolBarItem[]
  children?: ReactNode
  onChange?: (value: ToolBarItem | ToolBarItem[] | null) => void
}

export interface ToolBarSearchActiveProps {
  onCancel?: () => void
}

export interface ToolBarItem {
  children?: ToolBarItem[]
}

export type ToolBarActionSheetComboRenderParams = Parameters<
  NonNullable<ToolBarActionSheetProps['comboRender']>
>[0]

export interface ToolBarButtonProps {}

export interface ToolBarSearchProps {}

export interface ToolBarCompactRef {}

export interface ToolBarCompactProps {

  separator?: ReactNode | boolean
  radius?: Radius | string
}
