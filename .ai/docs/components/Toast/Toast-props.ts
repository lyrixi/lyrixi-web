/**
 * Toast API（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties } from 'react'

export type ToastPlacement = 'top' | 'middle' | 'bottom'

export interface ToastProps {
  /** 显示时长（ms），默认 `2000` */
  duration?: number
  /** 遮罩是否可点击穿透 */
  maskClickable?: boolean
  /** 弹出位置，`top` 上、`middle` 中、`bottom` 下，默认 `middle` */
  placement?: ToastPlacement
  /** 内容文本 */
  content?: string
  /** 遮罩类名 */
  maskClassName?: string
  /** 遮罩样式 */
  maskStyle?: CSSProperties
  /** 内容区类名 */
  modalClassName?: string
  /** 内容区样式 */
  modalStyle?: CSSProperties
  /** 挂载节点 */
  portal?: HTMLElement
  /** 关闭回调 */
  onClose?: () => void
}

export interface ToastRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}

export interface ToastCloseOptions {
  /** 关闭回调 */
  onClose?: () => void
}

// ---------- Toast module types ----------

export interface ToastComponents {
  /** 默认属性 */
  defaultProps?: ToastProps
  /** 显示 Toast */
  open: (props?: ToastProps) => HTMLElement
  /** 隐藏 Toast */
  close: (options?: ToastCloseOptions) => void
}

export interface ToastCloseParams {
  onClose?: () => void
}
