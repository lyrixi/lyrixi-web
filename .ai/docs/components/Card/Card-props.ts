/**
 * Card Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, MouseEventHandler, ReactNode } from 'react'

export interface CardProps {
  /** 卡片 ID */
  id?: string
  /** 圆角，与 Button.radius 用法一致：token（`xs` / `s` / `m` / `l` / `xl` / `xxl` / `xxxl`）或自定义 string / number */
  radius?: string | number
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 卡片内容 */
  children?: ReactNode
  /** 点击事件 */
  onClick?: MouseEventHandler<HTMLDivElement>
}

export interface CardHeaderProps {
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 头部内容 */
  children?: ReactNode
}

export interface CardMainProps {
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 主体内容 */
  children?: ReactNode
}

export interface CardRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}

export interface CardHeaderRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}

export interface CardMainRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}
