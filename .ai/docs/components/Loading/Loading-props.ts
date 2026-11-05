/**
 * Loading Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface LoadingProps {
  /** 提示内容 */
  content?: ReactNode
  /** 内容区样式 */
  modalStyle?: CSSProperties
  /** 内容区类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: CSSProperties
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: Element | DocumentFragment
  /** 图标渲染 */
  iconRender?: () => ReactNode
  /** 子元素 */
  children?: ReactNode
}

export interface LoadingRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}

/** Loading 图标尺寸，对应 `--lyrixi-height-*` */
export type LoadingIconSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'

export interface LoadingSpinFadeProps {
  /** 颜色 */
  color?: string
  /** 尺寸 */
  size?: LoadingIconSize | string | number
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}

export interface LoadingSpinFadeRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}

export interface LoadingOuroborosProps {
  /** 颜色 */
  color?: string
  /** 尺寸 */
  size?: LoadingIconSize | string | number
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}

export interface LoadingOuroborosRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}

export interface LoadingBallWaveProps {
  /** 颜色 */
  color?: string
  /** 尺寸 */
  size?: LoadingIconSize | string | number
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}

export interface LoadingBallWaveRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}

/** Loading.open 静态方法参数 */
export type LoadingOpen = (props?: LoadingProps) => HTMLDivElement

/** Loading.close 静态方法 */
export type LoadingClose = () => void

/** Loading.exists 静态方法 */
export type LoadingExists = () => boolean