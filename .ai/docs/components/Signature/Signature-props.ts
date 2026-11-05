/**
 * Signature Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties } from 'react'

export interface SignatureComboProps {
  /** 签名值 */
  value?: string
  /** 允许清除 */
  allowClear?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 模态框类名 */
  modalClassName?: string
  /** 模态框样式 */
  modalStyle?: CSSProperties
  /** 遮罩样式 */
  maskStyle?: CSSProperties
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: Element
  /** 画笔颜色 */
  color?: string
  /** 背景颜色 */
  backgroundColor?: string
  /** 变化事件 */
  onChange?: (base64: string | null) => void
  /** 预览事件 */
  onPreview?: (src: string) => Promise<boolean | string | void>
}

export interface SignatureModalProps {
  /** 签名值 */
  value?: string
  /** 是否显示 */
  open?: boolean
  /** 模态框类名 */
  modalClassName?: string
  /** 模态框样式 */
  modalStyle?: CSSProperties
  /** 挂载节点 */
  portal?: Element
  /** 画笔颜色 */
  color?: string
  /** 背景颜色 */
  backgroundColor?: string
  /** 变化事件 */
  onChange?: (base64: string | null) => void
  /** 打开事件 */
  onOpen?: () => void
  /** 关闭事件 */
  onClose?: () => void
}

export interface SignatureMainProps {
  /** 画笔颜色 */
  color?: string
  /** 背景颜色 */
  backgroundColor?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 变化事件 */
  onChange?: (base64: string | null) => void
  /** 取消事件 */
  onCancel?: () => void
}

export interface SignatureComboAddProps {
  /** 签名值 */
  value?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 模态框类名 */
  modalClassName?: string
  /** 模态框样式 */
  modalStyle?: CSSProperties
  /** 画笔颜色 */
  color?: string
  /** 背景颜色 */
  backgroundColor?: string
  /** 变化事件 */
  onChange?: (base64: string | null) => void
}

export interface SignatureComboEditProps {
  /** 签名值 */
  value?: string
  /** 删除事件 */
  onDelete?: (val: string) => void
  /** 预览事件 */
  onPreview?: (src: string) => Promise<boolean | string | void>
}

export interface SignatureComboRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}

export interface SignatureComboAddRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}

export interface SignatureComboEditRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}

export interface SignatureModalRef {
  /** 模态框元素 */
  modalElement: HTMLElement | null
  /** 获取模态框元素 */
}

export interface SignatureMainRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
  /** 获取 Base64 */
  getBase64?: (() => Promise<string | null>) | undefined
  /** 清除签名 */
  clear?: (() => void) | undefined
}