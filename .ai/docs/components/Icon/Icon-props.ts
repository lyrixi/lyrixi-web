/**
 * Icon Props / Ref（AI 文档，生成代码时以此为准）
 * @see src/components/Icon/types/
 */

import type { CSSProperties, ComponentType, MouseEventHandler, SVGProps, TouchEventHandler } from 'react'

import type { ButtonVariant } from '../Button/Button-props'

/** Icon 外观变体，与 ButtonVariant 一致；默认 `'text'` */
export type IconVariant = ButtonVariant

export type IconSize =
  | 'xxxxs'
  | 'xxxs'
  | 'xxs'
  | 'xs'
  | 's'
  | 'm'
  | 'l'
  | 'xl'
  | 'xxl'
  | 'xxxl'

export interface IconProps {
  /** 图标 ID */
  id?: string
  /** SVG 组件（必填） */
  svg: ComponentType<SVGProps<SVGSVGElement>>
  /** 外观变体（与 Button 一致），默认 `'text'` */
  variant?: IconVariant
  /** 颜色；SVG 需 currentColor；与 variant 组合决定最终样式 */
  color?: string
  /** 尺寸；SVG 模式为容器宽高，默认 `'m'` */
  size?: IconSize | string | number
  /** 圆角 */
  radius?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 点击事件 */
  onClick?: MouseEventHandler<HTMLElement>
  /** 触摸开始事件 */
  onTouchStart?: TouchEventHandler<HTMLElement>
}

export interface IconRef {
  /** 根元素（SVG 模式为 span） */
  element: HTMLElement | null
  /** 获取根元素 */
}

export interface IconClassStyle {
  /** 外观变体，默认 `'text'` */
  variant?: IconVariant
  /** 颜色 */
  color?: string
  /** 尺寸 */
  size?: IconSize | string | number
  /** 圆角 */
  radius?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}
