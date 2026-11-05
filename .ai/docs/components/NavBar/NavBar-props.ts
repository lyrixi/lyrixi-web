/**
 * NavBar Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'
import type { ButtonProps } from '../Button/Button-props'

export interface NavBarProps {
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 标题 */
  title?: ReactNode
  /** 导航栏内容 */
  children?: ReactNode
  /** 左侧区域渲染 */
  leftRender?: () => ReactNode
  /** 右侧区域渲染 */
  rightRender?: () => ReactNode
}

/** NavBar ref 类型 — 直接引用 HTMLDivElement */
export type NavBarRef = HTMLDivElement | null

export interface NavBarTitleProps {
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 标题内容 */
  children?: ReactNode
}

export interface NavBarButtonProps {
  /** 方向 */
  direction?: string
  /** 块级按钮 */
  block?: boolean
  /** 外观变体，默认 `'text'` */
  variant?: 'solid' | 'text' | 'outlined' | 'filled' | 'dashed'
  /** 语义色 */
  color?: ButtonProps['color']
  /** 尺寸 */
  size?: ButtonProps['size']
  /** 等宽高 */
  sizeEqual?: boolean
  /** 字体大小 */
  fontSize?: string | number
  /** 圆角 */
  radius?: string | number
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 按钮内容 */
  children?: ReactNode
  /** 点击事件 */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export interface ButtonRef {
  element: HTMLDivElement | null
}

export type NavBarButtonRef = ButtonRef

export interface NavBarTitleRef {
  element: HTMLDivElement | null
}

export interface NavBarLeftRef {
  element: HTMLDivElement | null
}

export interface NavBarLeftProps {
  className?: string
  style?: CSSProperties

  children?: ReactNode
}

export interface NavBarRightRef {
  element: HTMLDivElement | null
}

export interface NavBarRightProps {
  className?: string
  style?: CSSProperties

  children?: ReactNode
}

export interface NavBarTitleRef {
  element: HTMLDivElement | null
}

export interface NavBarTitleProps {
  className?: string
  style?: CSSProperties

  children?: ReactNode
}
