/**
 * Float Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface FloatGapOption {
  left?: number
  right?: number
  top?: number
  bottom?: number
}

export interface FloatSnapPosition {
  top: string
  right: string
  bottom: string
  left: string
}

export interface FloatProps {
  /** 是否可拖动 */
  draggable?: boolean
  /** 边距 */
  gap?: FloatGapOption
  /** 是否安全区 */
  safeArea?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 挂载节点 */
  portal?: Element | DocumentFragment
  /** 悬浮按钮内容 */
  children?: ReactNode
  /** 拖动结束事件 */
  onDragEnd?: (data: { position: FloatSnapPosition }) => void
}

export interface FloatRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}

export interface FloatTreeListItem {
  id: string
  children?: FloatTreeListItem[]
  [key: string]: unknown
}
