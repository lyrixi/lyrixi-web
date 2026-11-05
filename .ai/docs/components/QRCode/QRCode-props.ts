/**
 * QRCode Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface QRCodeProps {
  /** 二维码内容 */
  text?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 子元素 */
  children?: ReactNode
}

export interface QRCodeRef {
  /** 根元素 */
  element: HTMLSpanElement | null
  /** 获取根元素 */
}