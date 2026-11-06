/**
 * Input Props / Ref（AI 文档，生成代码时以此为准）
 */

import type {
  ComponentType,
  CompositionEventHandler,
  CSSProperties,
  FocusEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
  SVGProps,
  TouchEvent
} from 'react'
import type { IconSize, InputSize } from './Input-size-types'

export interface InputTextProps {
  /** 输入框 ID */
  id?: string
  /** 输入框名称 */
  name?: string
  /** 输入类型 */
  type?: string
  /** 输入值 */
  value?: string
  /** 占位符 */
  placeholder?: string
  /** 格式化函数 */
  formatter?: (value: string) => ReactNode
  /** 是否只读 */
  readOnly?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 自动获取焦点 */
  autoFocus?: boolean
  /** 自动选中 */
  autoSelect?: boolean
  /** 仅输入法落字后触发 onChange */
  compositionEndEnabled?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 尺寸 */
  size?: InputSize
  /** 自定义类名 */
  className?: string
  /** 自定义输入框渲染 */
  inputRender?: (params: Record<string, unknown>) => ReactNode
  /** 左侧图标渲染 */
  leftIconRender?: () => ReactNode
  /** 左侧图标 SVG 组件 */
  leftIconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  /** 右侧图标渲染 */
  rightIconRender?: () => ReactNode
  /** 右侧图标 SVG 组件 */
  rightIconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  /** 清除按钮渲染 */
  clearRender?: (params: {
    clearable: boolean
    allowClear?: boolean
    onClear: (e?: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => void
    onTouchStart?: (e?: TouchEvent<HTMLElement>) => void
  }) => ReactNode | undefined
  /** 小数精度 */
  precision?: number
  /** 是否去除空格 */
  trim?: boolean
  /** 最大值 */
  max?: number
  /** 最小值 */
  min?: number
  /** 最大长度 */
  maxLength?: number
  /** 输入模式 */
  inputMode?: InputHTMLAttributes<HTMLInputElement>['inputMode']
  /** 回车键提示 */
  enterKeyHint?: InputHTMLAttributes<HTMLInputElement>['enterKeyHint']
  /** 自动完成 */
  autoComplete?: string
  /** 自动纠正 */
  autoCorrect?: string
  /** 拼写检查 */
  spellCheck?: boolean | 'true' | 'false'
  /** 是否显示光标 */
  cursor?: boolean | null
  /** 点击事件 */
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  /** 值变化事件 */
  onChange?: (value: string, options?: { action: string }) => void
  /** 失焦事件 */
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  /** 聚焦事件 */
  onFocus?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  /** 按键事件 */
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  /** 回车事件 */
  onPressEnter?: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  /** 输入法开始 */
  onCompositionStart?: CompositionEventHandler<HTMLInputElement | HTMLTextAreaElement>
  /** 输入法更新 */
  onCompositionUpdate?: CompositionEventHandler<HTMLInputElement | HTMLTextAreaElement>
  /** 输入法结束 */
  onCompositionEnd?: CompositionEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

// Input.NumberBox

export interface InputNumberBoxProps extends InputTextProps {
  /** 步进值 */
  step?: number
  /** 步进时是否聚焦 */
  stepFocus?: boolean
  /** 加号按钮类名 */
  plusClassName?: string
  /** 加号按钮样式 */
  plusStyle?: CSSProperties
  /** 减号按钮类名 */
  minusClassName?: string
  /** 减号按钮样式 */
  minusStyle?: CSSProperties
  /** 子元素 */
  children?: ReactNode
}

export interface InputNodeProps {
  /** 输入框 ID */
  id?: string
  /** 输入类型 */
  type?: string
  /** 输入值 */
  value?: InputNodeValue
  /** 占位符 */
  placeholder?: string
  /** 格式化函数 */
  formatter?: (value: InputNodeValue) => ReactNode
  /** 是否只读 */
  readOnly?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 是否显示光标 */
  cursor?: boolean | null
  /** 自定义样式 */
  style?: CSSProperties
  /** 尺寸 */
  size?: InputSize
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
  clearRender?: (params: {
    clearable: boolean
    allowClear?: boolean
    onClear: (e?: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => void
    onTouchStart?: (e?: TouchEvent<HTMLElement>) => void
  }) => ReactNode | undefined
  /** 小数精度 */
  precision?: number
  /** 是否去除空格 */
  trim?: boolean
  /** 最大值 */
  max?: number
  /** 最小值 */
  min?: number
  /** 最大长度 */
  maxLength?: number
  /** 输入模式 */
  inputMode?: InputHTMLAttributes<HTMLInputElement>['inputMode']
  /** 回车键提示 */
  enterKeyHint?: InputHTMLAttributes<HTMLInputElement>['enterKeyHint']
  /** 自动完成 */
  autoComplete?: string
  /** 自动纠正 */
  autoCorrect?: string
  /** 拼写检查 */
  spellCheck?: boolean | 'true' | 'false'
  /** 点击事件 */
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  /** 值变化事件 */
  onChange?: (value: InputNodeValue, options?: { action: string }) => void
  /** 失焦事件 */
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  /** 聚焦事件 */
  onFocus?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  /** 按键事件 */
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  /** 回车事件 */
  onPressEnter?: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  /** 输入法开始 */
  onCompositionStart?: CompositionEventHandler<HTMLInputElement | HTMLTextAreaElement>
  /** 输入法更新 */
  onCompositionUpdate?: CompositionEventHandler<HTMLInputElement | HTMLTextAreaElement>
  /** 输入法结束 */
  onCompositionEnd?: CompositionEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

/** 全库列表/选择类组件共用的列表项结构（源：List 的 ListItem） */
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

export type InputNodeValue =
  | number
  | string
  | null
  | Date
  | (Date | null | string | number)[]
  | ListItem
  | ListItem[]

export type InputSelectValue = InputNodeValue

export interface InputSelectProps {
  /** 输入框 ID */
  id?: string
  /** 名称 */
  name?: string
  /** 输入类型 */
  type?: string
  /** 输入值 */
  value?: InputSelectValue
  /** 占位符 */
  placeholder?: string
  /** 格式化函数 */
  formatter?: (value: InputSelectValue, options?: { separator?: string }) => string
  /** 是否只读 */
  readOnly?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 是否显示光标 */
  cursor?: boolean | null
  /** 自动获取焦点 */
  autoFocus?: boolean
  /** 自动选中 */
  autoSelect?: boolean
  /** 仅输入法落字后触发 onChange */
  compositionEndEnabled?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 尺寸 */
  size?: InputSize
  /** 自定义类名 */
  className?: string
  /** 自定义输入框渲染 */
  inputRender?: (params: Record<string, unknown>) => ReactNode
  /** 左侧图标渲染 */
  leftIconRender?: () => ReactNode
  /** 左侧图标 SVG 组件 */
  leftIconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  /** 右侧图标渲染 */
  rightIconRender?: () => ReactNode
  /** 右侧图标 SVG 组件 */
  rightIconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  /** 清除按钮渲染 */
  clearRender?: (params: {
    clearable: boolean
    allowClear?: boolean
    onClear: (e?: MouseEvent<HTMLElement> | TouchEvent<HTMLElement>) => void
    onTouchStart?: (e?: TouchEvent<HTMLElement>) => void
  }) => ReactNode | undefined
  /** 小数精度 */
  precision?: number
  /** 是否去除空格 */
  trim?: boolean
  /** 最大值 */
  max?: number
  /** 最小值 */
  min?: number
  /** 最大长度 */
  maxLength?: number
  /** 输入模式 */
  inputMode?: InputHTMLAttributes<HTMLInputElement>['inputMode']
  /** 回车键提示 */
  enterKeyHint?: InputHTMLAttributes<HTMLInputElement>['enterKeyHint']
  /** 自动完成 */
  autoComplete?: string
  /** 自动纠正 */
  autoCorrect?: string
  /** 拼写检查 */
  spellCheck?: boolean | 'true' | 'false'
  /** 步长 */
  step?: number
  /** 图标渲染 */
  iconRender?: (params: { className: string; style?: CSSProperties }) => ReactNode
  /** 模式 */
  mode?: string
  /** 自动调整大小 */
  autoSize?: boolean
  /** 分隔符 */
  separator?: string
  /** 预览事件 */
  onPreview?: (value: string) => Promise<boolean | undefined> | boolean | undefined
  /** 搜索事件 */
  onSearch?: (value: string) => void
  /** 点击事件 */
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
  /** 值变化事件 */
  onChange?: (value: InputSelectValue, options?: unknown) => void
  /** 失焦事件 */
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  /** 聚焦事件 */
  onFocus?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  /** 按键事件 */
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  /** 回车事件 */
  onPressEnter?: (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  /** 输入法开始 */
  onCompositionStart?: CompositionEventHandler<HTMLInputElement | HTMLTextAreaElement>
  /** 输入法更新 */
  onCompositionUpdate?: CompositionEventHandler<HTMLInputElement | HTMLTextAreaElement>
  /** 输入法结束 */
  onCompositionEnd?: CompositionEventHandler<HTMLInputElement | HTMLTextAreaElement>
  /** 添加事件 */
  onAdd?: (e: MouseEvent<HTMLDivElement>) => void
  /** 编辑事件 */
  onEdit?: (item: ListItem) => void
}

export interface InputOTPProps {
  /** 输入类型 */
  type?: string
  /** 输入值 */
  value?: string[]
  /** 最大长度 */
  maxLength?: number
  /** 自定义样式 */
  style?: CSSProperties
  /** 尺寸 */
  size?: InputSize
  /** 自定义类名 */
  className?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 是否只读 */
  readOnly?: boolean
  /** 值变化事件 */
  onChange?: (value: string[]) => void
  /** 输入完成 */
  onComplete?: (value: string[]) => void
}

export interface InputRateProps {
  /** 输入框 ID */
  id?: string
  /** 输入框名称 */
  name?: string
  /** 评分值 */
  value?: number
  /** 是否只读 */
  readOnly?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 尺寸 */
  size?: IconSize
  /** 选中颜色 */
  checkedColor?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 图标 SVG 组件 */
  iconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  /** 图标渲染 */
  iconRender?: (params: { checked: boolean }) => ReactNode
  /** 最小值 */
  min?: number
  /** 最大值 */
  max?: number
  /** 步进值 */
  step?: number
  /** 值变化事件 */
  onChange?: (value: number) => void
}

export interface InputRangeProps {
  /** 输入框 ID */
  id?: string
  /** 输入框名称 */
  name?: string
  /** 输入值 */
  value?: number
  /** 是否只读 */
  readOnly?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 最小值 */
  min?: number
  /** 最大值 */
  max?: number
  /** 步进值 */
  step?: number
  /** 值变化事件 */
  onChange?: (value: number) => void
}

export interface InputPasswordStrengthProps {
  /** 密码值 */
  value?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}

export interface InputTextRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 输入框元素 */
  inputElement: (HTMLInputElement | HTMLTextAreaElement) | null
  /** 获取根元素 */
  /** 获取输入框元素 */
  /** 矫正值 */
  correctValue: (val: string) => string
  /** 获取焦点 */
  focus: () => void
  /** 失去焦点 */
  blur: () => void
}

export interface InputNodeRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 输入框元素 */
  inputElement: HTMLDivElement | null
  /** 获取根元素 */
  /** 获取输入框元素 */
  /** 矫正值 */
  correctValue: (val: string) => string
  /** 获取焦点 */
  focus: () => void
  /** 失去焦点 */
  blur: () => void
}

export interface InputSelectRef {
  /** 展示值 */
  displayValue: string
  /** 获取展示值 */
  getDisplayValue: (newValue?: InputSelectValue) => string
  /** 根元素 */
  element: HTMLElement | null
  /** 获取根元素 */
}

export interface InputOTPRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
  /** 获取焦点 */
  focus: (itemIndex?: number) => void
  /** 失去焦点 */
  blur: () => void
}

export interface InputRateRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 输入框元素 */
  inputElement: HTMLInputElement | null
  /** 获取根元素 */
  /** 获取输入框元素 */
}

export interface InputRangeRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 输入框元素 */
  inputElement: HTMLInputElement | null
  /** 获取根元素 */
  /** 获取输入框元素 */
}

export interface InputPasswordStrengthRef {
  /** 根元素 */
  element: HTMLUListElement | null
  /** 获取根元素 */
  /** 获取强度等级 */
  getStrength: (newValue?: string) => number
}

export interface InputNumberBoxRef {
  getInputRef: () => RefObject<InputTextRef | null>
}

export interface InputSearchProps {
  onSearch?: (value: string) => void
}

export interface InputSelectProps {
  name?: string
  value?: InputSelectValue
  formatter?: (value: InputSelectValue, options?: { separator?: string }) => string
  onChange?: (value: InputSelectValue, options?: unknown) => void
  autoFocus?: boolean
  autoSelect?: boolean
  compositionEndEnabled?: boolean
  inputRender?: (options: Record<string, unknown>) => ReactNode
  onPreview?: (value: string) => Promise<boolean | undefined> | boolean | undefined
  onSearch?: (value: string) => void
  step?: number
  iconRender?: (options: { className: string; style?: CSSProperties }) => ReactNode
  mode?: string
  autoSize?: boolean
  separator?: string
  onAdd?: (e: MouseEvent<HTMLDivElement>) => void
  onEdit?: (item: ListItem) => void
}

export interface InputTextCorrectValueOptions {
  type?: string
  min?: number
  max?: number
  maxLength?: number
  trim?: boolean
  precision?: number
}

export interface InputUrlProps {
  onPreview?: (value: string) => Promise<boolean | undefined> | boolean | undefined
}

export interface InputAutoSizeProps {}

export interface InputAutoSizeRef {}

export type InputIconProps = IconProps
export type InputIconRef = IconRef

export type InputIconRef = IconRef

export interface InputNumberProps {}

export interface InputNumberRef {}

export interface InputPasswordProps {}

export interface InputPasswordRef {}

export interface InputSearchRef {}

export interface InputTelProps {}

export interface InputTelRef {}

export interface InputTextareaProps {}

export interface InputTextareaRef {}

export interface InputUrlRef {}

export interface InputTextCorrectValueParams {
  type?: string
  min?: number
  max?: number
  maxLength?: number
  trim?: boolean
  precision?: number
}
