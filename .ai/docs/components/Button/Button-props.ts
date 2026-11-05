/**
 * Button Props / Ref（AI 文档，生成代码时以此为准）
 * @see src/components/Button/types/
 */

/** 语义色，与 VariablesUtil 标准色一致；可从 `lyrixi-web` 导入 `ButtonColor` */
export type ButtonColor =
  | 'default'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'primary'
  | 'info'
  | 'warning'
  | 'danger'
  | 'success'

/** 外观变体，由 getVariantClassName 映射为文字/背景/边框 class；可从 `lyrixi-web` 导入 `ButtonVariant` */
export type ButtonVariant = 'solid' | 'text' | 'outlined' | 'filled' | 'dashed'

/** 尺寸 token，与 Button.less 中 `.lyrixi-size-*` 一致 */
export type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'

export interface ButtonProps {
  /** 按钮 ID */
  id?: string
  /** 方向，默认 `'horizontal'` */
  direction?: 'horizontal' | 'vertical' | string
  /** 是否为块级元素 */
  block?: boolean
  /** 外观变体，默认 `'solid'` */
  variant?: ButtonVariant
  /** 语义色，默认 `'default'`；与 variant 组合决定最终样式 */
  color?: ButtonColor
  /** 高度尺寸；未传时默认 `'m'` */
  size?: ButtonSize | string | number
  /** 是否为等宽高 */
  sizeEqual?: boolean
  /** 字体大小 */
  fontSize?: string | number
  /** 圆角 */
  radius?: string | number
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 按钮内容 */
  children?: ReactNode
  /** 点击事件 */
  onClick?: MouseEventHandler<HTMLDivElement>
}

export interface ButtonTextProps {
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 文本内容 */
  children?: ReactNode
}

/** 同 IconProps（`svg` 必填），详见 Icon-props.ts */
export type ButtonIconProps = IconProps

export interface ButtonRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}

export interface ButtonTextRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}

export interface ButtonGroupRef {
  element: HTMLDivElement | null
}

export interface ButtonGroupProps {
  id?: string
  list?: ButtonItem[]
  separator?: ReactNode | boolean
  block?: boolean
  variant?: ButtonProps['variant']
  color?: ButtonProps['color']
  size?: ButtonProps['size']
  radius?: Radius | string

  style?: CSSProperties
  className?: string
}

export interface ButtonItem {
  id?: string
  name?: string
  color?: ButtonColor
  disabled?: boolean
  style?: CSSProperties
  className?: string
  onClick?: MouseEventHandler<HTMLDivElement>
}
