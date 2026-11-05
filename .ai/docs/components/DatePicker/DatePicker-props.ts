/**
 * DatePicker Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { ComponentType, CSSProperties, ReactNode, RefObject, SVGProps } from 'react'
import type { DatePickerPickerType, DatePickerRangesMap, DatePickerRangeChangeMeta, DatePickerMultipleValue } from './DatePicker-item-types'

export interface DatePickerComboProps {
  /** 选中的值 */
  value?: Date | null
  /** 占位符 */
  placeholder?: string
  /** 格式化函数 */
  formatter?: (value: Date | null | undefined, options?: { separator?: string }) => string
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
  comboRender?: (params: {
    comboRef: RefObject<unknown>
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
  /** 日期类型，默认 `'date'` */
  type?: DatePickerPickerType
  /** 最小日期 */
  min?: Date | null
  /** 最大日期 */
  max?: Date | null
  /** 小时步长 */
  hourStep?: number
  /** 分钟步长 */
  minuteStep?: number
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
  /** 标题渲染 */
  titleRender?: (
    value: Date | null | undefined,
    options: { type?: DatePickerPickerType }
  ) => ReactNode
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
  onChange?: (value: Date | null | undefined, options?: unknown) => void
  /** 确认事件 */
  onOk?: (value: Date | null | undefined) => boolean | Date | void | Promise<boolean | Date | void>
}

export interface DatePickerModalProps {
  /** 选中的值 */
  value?: Date | null
  /** 日期类型，默认 `'date'` */
  type?: DatePickerPickerType
  /** 最小日期 */
  min?: Date | null
  /** 最大日期 */
  max?: Date | null
  /** 小时步长 */
  hourStep?: number
  /** 分钟步长 */
  minuteStep?: number
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
  portal?: HTMLElement | null | false
  /** 标题渲染 */
  titleRender?: (
    value: Date | null | undefined,
    options: { type?: DatePickerPickerType }
  ) => ReactNode
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
  /** 变化事件 */
  onChange?: (value: Date | null) => void
  /** 确认事件 */
  onOk?: (value: Date | null | undefined) => boolean | Date | void | Promise<boolean | Date | void>
}

export interface DatePickerMainProps {
  /** 选中的值 */
  value?: Date | null
  /** 日期类型 */
  type?: DatePickerPickerType
  /** 最小日期 */
  min?: Date | null
  /** 最大日期 */
  max?: Date | null
  /** 小时步长 */
  hourStep?: number
  /** 分钟步长 */
  minuteStep?: number
  /** 周起始日 */
  weekStart?: string
  /** 是否显示 */
  open?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 变化事件 */
  onChange?: (value: Date | null) => void
}

export interface DatePickerTypeSwitcherValue {
  type: string
  id?: string
  name?: ReactNode
  value?: Date
  [key: string]: unknown
}

export interface DatePickerTypeSwitcherProps {
  /** 当前选中项（带具体日期） */
  value?: DatePickerTypeSwitcherValue
  /** 类型列表 */
  types?: DatePickerTypeSwitcherValue[]
  /** 切换方式 */
  variant?: 'tabbar' | 'dropdown'
  /** 下拉挂载节点 */
  dropdownPortal?: HTMLElement
  /** 下拉左侧偏移 */
  dropdownLeft?: string | number
  /** 下拉颜色，对应 `ToolBar.List` 的 `color` */
  dropdownColor?: 'default' | 'transparent' | 'primary' | 'info' | 'warning' | 'danger' | 'success'
  /** 下拉变体，对应 `ToolBar.List` 的 `variant` */
  dropdownVariant?: 'solid' | 'text' | 'outlined' | 'filled' | 'dashed'
  /** 下拉高度尺寸，对应 `ToolBar.List` 的 `size` */
  dropdownSize?: string | number | readonly string[]
  /** 下拉是否为等宽高，对应 `ToolBar.List` 的 `sizeEqual` */
  dropdownSizeEqual?: boolean
  /** 下拉字体大小，对应 `ToolBar.List` 的 `fontSize` */
  dropdownFontSize?: string | number
  /** 下拉圆角，对应 `ToolBar.List` 的 `radius` */
  dropdownRadius?: string | number
  /** 下拉自定义类名，对应 `ToolBar.List` 的 `className` */
  dropdownClassName?: string
  /** 下拉自定义样式，对应 `ToolBar.List` 的 `style` */
  dropdownStyle?: CSSProperties
  /** 下拉箭头 SVG，对应 `ToolBar.List` 的 `arrowSvg` */
  dropdownArrowSvg?: ComponentType<SVGProps<SVGSVGElement>> | null
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 选择器组合样式 */
  pickerComboStyle?: CSSProperties
  /** 选择器组合类名 */
  pickerComboClassName?: string
  /** Tab 栏样式 */
  tabbarStyle?: CSSProperties
  /** Tab 栏类名 */
  tabbarClassName?: string
  /** 最小日期 */
  min?: Date | null
  /** 最大日期 */
  max?: Date | null
  /** 是否禁用日期选择器点击（`.lyrixi-datepicker-typeswitcher-combo-date`） */
  pickerDisabled?: boolean
  /** 选择器组合渲染 */
  pickerComboRender?: (
    value: DatePickerTypeSwitcherValue,
    ctx: { onChange: (d: Date) => void }
  ) => ReactNode
  /** 变化事件 */
  onChange?: (value: DatePickerTypeSwitcherValue) => void
}

export interface DatePickerRangeSelectorProps {
  /** 选中的值 */
  value?: (Date | null)[] | null
  /** 自动交换值，默认 `true` */
  autoSwapValue?: boolean
  /** 日期类型 */
  type?: string
  /** 当前选中的范围 */
  rangeId?: string | null
  /** 范围配置 */
  ranges?: DatePickerRangesMap
  /** 最小日期 */
  min?: Date | null
  /** 最大日期 */
  max?: Date | null
  /** 小时步长 */
  hourStep?: number
  /** 分钟步长 */
  minuteStep?: number
  /** 禁用开始日期 */
  startDisabled?: boolean
  /** 禁用结束日期 */
  endDisabled?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 挂载节点 */
  portal?: HTMLElement | null
  /** 变化事件 */
  onChange?: (value: (Date | null)[] | null, options?: DatePickerRangeChangeMeta) => void
  /** 确认事件 */
  onOk?: (value: (Date | null)[] | null) => void
}

export interface DatePickerComboRef {
  /** 根元素 */
  element?: HTMLDivElement | null
  /** 获取根元素 */
  /** 关闭选择器 */
  close?: () => void
  /** 打开选择器 */
  open?: () => void
}

export interface DatePickerTypeSwitcherRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}

// DatePicker.RangeCombo

export interface DatePickerRangeComboProps extends Omit<
  DatePickerComboProps,
  'value' | 'onChange' | 'onOk' | 'titleRender'
> {
  /** 区间值 */
  value?: (Date | null)[] | null
  /** 当前选中的范围 id */
  rangeId?: string | null
  /** 范围配置 */
  ranges?: DatePickerRangesMap
  /** 自动交换起止值 */
  autoSwapValue?: boolean
  /** 禁用开始日期 */
  startDisabled?: boolean
  /** 禁用结束日期 */
  endDisabled?: boolean
  /** 变化事件 */
  onChange?: (value: (Date | null)[] | null, options?: DatePickerRangeChangeMeta) => void
  /** 确认事件 */
  onOk?: (value: (Date | null)[] | null) => boolean | Date[] | void | Promise<boolean | void | Date[]>
}

// DatePicker.RangeModal

export interface DatePickerRangeModalProps extends Omit<
  DatePickerModalProps,
  'value' | 'onChange' | 'onOk' | 'type' | 'titleRender'
> {
  value?: (Date | null)[] | null
  type?: string
  autoSwapValue?: boolean
  rangeId?: string | null
  ranges?: DatePickerRangesMap
  rangesVisible?: boolean
  startDisabled?: boolean
  endDisabled?: boolean
  separator?: string
  onChange?: (value: (Date | null)[] | null, options?: DatePickerRangeChangeMeta) => void
  onOk?: (value: (Date | null)[] | null) => void | boolean | Date[] | Promise<void | boolean | Date[]>
}

// DatePicker.RangeMain

export interface DatePickerRangeMainProps {
  value?: (Date | null)[] | null
  rangeId?: string | null
  ranges?: DatePickerRangesMap
  type?: string
  min?: Date | null
  max?: Date | null
  hourStep?: number
  minuteStep?: number
  startDisabled?: boolean
  endDisabled?: boolean
  separator?: string
  autoSwapValue?: boolean
  open?: boolean
  rangesVisible?: boolean
  allowClear?: boolean
  portal?: HTMLElement | null
  onChange?: (value: (Date | null)[] | null, options?: DatePickerRangeChangeMeta) => void
}

// DatePicker.WeekCombo / WeekModal / WeekMain

export interface DatePickerWeekComboProps extends DatePickerComboProps {}

export interface DatePickerWeekModalProps extends DatePickerModalProps {}

export interface DatePickerWeekMainProps {
  value?: Date | null
  min?: Date | null
  max?: Date | null
  weekStart?: string
  open?: boolean
  allowClear?: boolean
  style?: CSSProperties
  className?: string
  onChange?: (value: Date | null) => void
}

// DatePicker.MultipleCombo / MultipleModal / MultipleMain

export interface DatePickerMultipleComboProps extends Omit<
  DatePickerComboProps,
  'value' | 'onChange' | 'onOk' | 'titleRender'
> {
  value?: DatePickerMultipleValue
  onChange?: (value: DatePickerMultipleValue, options?: { action: string }) => void
  onOk?: (
    value: DatePickerMultipleValue
  ) => boolean | DatePickerMultipleValue | void | Promise<boolean | void | DatePickerMultipleValue>
}

export interface DatePickerMultipleModalProps extends Omit<
  DatePickerModalProps,
  'value' | 'onChange' | 'onOk' | 'titleRender'
> {
  separator?: string
  value?: DatePickerMultipleValue
  onChange?: (value: DatePickerMultipleValue) => void
  onOk?: (
    value: DatePickerMultipleValue
  ) => boolean | DatePickerMultipleValue | void | Promise<boolean | void | DatePickerMultipleValue>
}

export interface DatePickerMultipleMainProps {
  value?: DatePickerMultipleValue
  type?: DatePickerPickerType | string
  min?: Date | null
  max?: Date | null
  hourStep?: number
  minuteStep?: number
  separator?: string
  open?: boolean
  allowClear?: boolean
  onChange?: (value: DatePickerMultipleValue) => void
}

export interface DatePickerRangeSelectorButtonsProps {

  value?: (Date | null)[] | null
  rangeId?: string | null
  ranges?: DatePickerRangesMap

  allowClear?: boolean

  onChange?: (value: (Date | null)[] | null, options?: { rangeId?: string | null }) => void
}

export type DatePickerRangeSelectorCustomDatesProps {
  maskClassName?: string
  maskStyle?: CSSProperties
  modalClassName?: string
  modalStyle?: CSSProperties
}

export type DatePickerTypeSwitcherDateComboComboProps {
  value?: Date | null
  type?: DatePickerPickerType | string
  style?: CSSProperties
  className?: string
  children?: ReactNode
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

export type DatePickerTypeSwitcherDateComboProps {
  value?: Date | null
  type: string
  min?: Date | null
  max?: Date | null
  disabled?: boolean
  style?: CSSProperties
  className?: string
  onChange?: (value: Date) => void
}

export interface DatePickerTypeSwitcherSwitcherProps {

  variant?: DatePickerTypeSwitcherType
  dropdownPortal?: HTMLElement
  dropdownLeft?: string | number
  dropdownColor?: ToolBarComboProps['color']
  dropdownVariant?: ToolBarComboProps['variant']
  dropdownSize?: ToolBarComboProps['size']
  dropdownSizeEqual?: ToolBarComboProps['sizeEqual']
  dropdownFontSize?: ToolBarComboProps['fontSize']
  dropdownRadius?: ToolBarComboProps['radius']
  dropdownClassName?: string
  dropdownStyle?: CSSProperties
  dropdownArrowSvg?: ToolBarComboProps['arrowSvg']
  types: DatePickerTypeListItem[]
  value: DatePickerTypeSwitcherValue

  style?: CSSProperties
  className?: string

  onChange: (item: DatePickerTypeListItem) => void
}

export type DatePickerTypeSwitcherWeekComboComboProps {
  value?: Date | null
  style?: CSSProperties
  className?: string
  children?: React.ReactNode
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

export type DatePickerTypeSwitcherWeekComboProps {
  value?: Date | null
  min?: Date | null
  max?: Date | null
  disabled?: boolean
  style?: React.CSSProperties
  className?: string
  onChange?: (value: Date) => void
}

export interface DatePickerTypeListItem {
  type: string
  id?: string
  name?: ReactNode
  value?: Date
  [key: string]: unknown
}

export interface DatePickerWeekMainProps {

  value?: Date | null
  min?: Date | null
  max?: Date | null
  weekStart?: string

  open?: boolean
  allowClear?: boolean

  style?: CSSProperties
  className?: string

  onChange?: (value: Date | null) => void
}

export interface DatePickerPickerListItem {
  id: number
  /** LocaleUtil.locale 可能返回 string 或带占位节点 */
  name: number | string | ReactNode | ReactElement
}

export type DatePickerModalRef = ModalRef & Record<string, unknown>

export interface DatePickerWeekComboRef {}

export interface DatePickerMultipleItem {
  id?: string | number
  name?: string
  description?: ReactNode
  value?: Date | null
  disabled?: boolean
}

export interface DatePickerGetTitleOptions {
  type?: DatePickerPickerType | string
  separator?: string
}

export interface DatePickerGetTitleParams {
  type?: DatePickerPickerType | string
  separator?: string
}

export type DatePickerMainRef = CalendarRef | PickerMainRef

export interface DatePickerMainProps {

  id?: string
  value?: Date | null
  type?: DatePickerPickerType
  min?: Date | null
  max?: Date | null
  hourStep?: number
  minuteStep?: number
  weekStart?: string

  open?: boolean
  allowClear?: boolean

  style?: CSSProperties
  className?: string

  onChange?: (value: Date | null) => void
}

export type DatePickerMultipleComboRef = DatePickerComboRef

export type DatePickerRangeComboRef = DatePickerComboRef
