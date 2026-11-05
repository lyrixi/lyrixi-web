/**
 * Progress Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export type ProgressBarStyle = CSSProperties & { [key: string]: string | number | undefined }
export type ProgressCircleStyle = CSSProperties & { [key: string]: string | number | undefined }

export interface ProgressBarProps {
  /** 进度百分比，默认 `0` */
  percent?: number
  /** 自定义样式 */
  style?: ProgressBarStyle
  /** 自定义类名 */
  className?: string
}

export interface ProgressCircleProps {
  /** 进度百分比，默认 `0` */
  percent?: number
  /** 尺寸，默认 `50` */
  size?: number
  /** 自定义样式 */
  style?: ProgressCircleStyle
  /** 自定义类名 */
  className?: string
  /** 中间内容 */
  children?: ReactNode
}

export interface ProgressBarRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}

export interface ProgressCircleRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}