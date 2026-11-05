/**
 * Modal Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, MouseEvent, ReactNode } from 'react'

export interface ModalProps {
  /**
   * 动画效果，默认 `'zoom'`
   * 常用：`'none' | 'slideLeft' | 'slideRight' | 'slideUp' | 'slideDown' | 'zoom' | 'fade'`
   * 方位（Tooltip / DropdownModal）：`'slideUpLeft' | 'zoomUpLeft' | ... | 'fadeDownRight'` 等
   */
  animation?:
    | 'none'
    | 'slideLeft'
    | 'slideRight'
    | 'slideUp'
    | 'slideDown'
    | 'zoom'
    | 'fade'
    | 'slideUpLeft'
    | 'zoomUpLeft'
    | 'fadeUpLeft'
    | 'slideDownLeft'
    | 'zoomDownLeft'
    | 'fadeDownLeft'
    | 'slideUpRight'
    | 'zoomUpRight'
    | 'fadeUpRight'
    | 'slideDownRight'
    | 'zoomDownRight'
    | 'fadeDownRight'
  /** 是否显示 */
  open?: boolean
  /** 点击遮罩关闭，默认 `true` */
  maskClosable?: boolean
  /** 是否安全区 */
  safeArea?: boolean
  /** 模态框样式 */
  modalStyle?: CSSProperties
  /** 模态框类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: CSSProperties
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: HTMLElement | false | null
  /** 模态框内容 */
  children?: ReactNode
  /** 关闭事件 */
  onClose?: (e?: MouseEvent<HTMLDivElement>) => void
}

export interface ModalRef {
  /** 遮罩元素 */
  maskElement: HTMLDivElement | null
  /** 获取遮罩元素 */
  /** 模态框元素 */
  modalElement: HTMLDivElement | null
  /** 获取模态框元素 */
}

// --- Modal.NavBarModal ---

export interface ModalNavBarModalProps
  extends Pick<
    ModalProps,
    | 'open'
    | 'maskClosable'
    | 'safeArea'
    | 'modalStyle'
    | 'modalClassName'
    | 'maskStyle'
    | 'maskClassName'
    | 'portal'
    | 'children'
    | 'onClose'
  > {
  navBarStyle?: CSSProperties
  navBarClassName?: string
  title?: ReactNode
  ok?: ReactNode
  okVisible?: boolean
  okPlacement?: 'left' | 'right'
  cancel?: ReactNode
  cancelVisible?: boolean
  cancelPlacement?: 'left' | 'right'
  onCancel?: () => void
  onOk?: () => boolean | void | Promise<boolean | void>
}

export interface ModalNavBarModalRef extends ModalRef {}

// --- Modal.DropdownModal ---

export interface ModalDropdownModalProps
  extends Pick<
    ModalProps,
    | 'open'
    | 'maskClosable'
    | 'safeArea'
    | 'modalStyle'
    | 'modalClassName'
    | 'maskStyle'
    | 'maskClassName'
    | 'portal'
    | 'children'
    | 'onClose'
  > {
  offset?: Record<string, number>
  left?: string | number
  right?: string | number
  referenceElement?: HTMLElement | (() => HTMLElement) | null
}

export interface ModalDropdownModalRef extends ModalRef {}

// --- Modal.FilterModal ---

export interface ModalFilterModalProps
  extends Pick<
    ModalProps,
    | 'open'
    | 'maskClosable'
    | 'safeArea'
    | 'modalStyle'
    | 'modalClassName'
    | 'maskStyle'
    | 'maskClassName'
    | 'portal'
    | 'children'
    | 'onClose'
  > {
  footerRender?: (params: { onClose?: (e?: MouseEvent<HTMLDivElement>) => void }) => ReactNode
  onCancel?: () => void
}

export interface ModalFilterModalRef extends ModalRef {}

export interface ModalFilterModalRef {}

export interface ModalFilterModalProps
  extends Pick<
    ModalProps,
    | 'open'
    | 'maskClosable'
    | 'safeArea'
    | 'modalStyle'
    | 'modalClassName'
    | 'maskStyle'
    | 'maskClassName'
    | 'portal'
    | 'children'
    | 'onClose'
  > {
  footerRender?: (options: { onClose?: (e?: MouseEvent<HTMLDivElement>) => void }) => ReactNode
  onCancel?: () => void
}
