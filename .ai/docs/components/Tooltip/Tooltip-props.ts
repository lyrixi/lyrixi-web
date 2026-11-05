/**
 * Tooltip Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode, RefObject } from 'react'
import type { ComboRef } from '../Combo/Combo-props'

export interface TooltipProps {
  /** 点击遮罩关闭 */
  maskClosable?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 动画效果 */
  animation?: string
  /** 模态框样式 */
  modalStyle?: CSSProperties
  /** 模态框类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: CSSProperties
  /** 遮罩类名 */
  maskClassName?: string
  /** 触发元素 */
  children?: ReactNode
  /** 自定义组合渲染 */
  comboRender?: (ctx: {
    comboRef: RefObject<ComboRef | null>
    open: boolean | null
    onClick: () => void
  }) => ReactNode
  /** 自定义模态框渲染 */
  modalRender?: (ctx: { open: boolean | null; onClose: () => void }) => ReactNode
  /** 参考元素 */
  referenceElement?: Element | null | (() => Element | null)
  /** 挂载节点 */
  portal?: boolean | Element | null
  /** 打开前事件 */
  onBeforeOpen?: () => boolean | void | Promise<boolean | void>
  /** 打开事件 */
  onOpen?: () => void
  /** 关闭事件 */
  onClose?: () => void
}

export interface TooltipRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
}

export interface TooltipPopupProps {
  /** 动画效果 */
  animation?: string
  /** 是否打开 */
  open?: boolean
  /** 点击遮罩关闭 */
  maskClosable?: boolean
  /** 模态框样式 */
  modalStyle?: CSSProperties
  /** 模态框类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: CSSProperties
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: Element | null
  /** 子元素 */
  children?: ReactNode
  /** 关闭事件 */
  onClose?: () => void
}

export interface TooltipPopupRef {
  /** 遮罩元素 */
  maskElement: HTMLDivElement | null
  /** 获取遮罩元素 */
  /** 模态框元素 */
  modalElement: HTMLDivElement | null
  /** 获取模态框元素 */
}

/** 静态方法：根据参考元素更新 Tooltip 位置 */
export interface TooltipStatic {
  updatePositionByReferenceElement: (params: {
    referenceElement?: HTMLElement | null
    parentElement?: HTMLElement | null
    animation?: string
    bottom?: string | number | null
    top?: string | number | null
    left?: string | number | null
    right?: string | number | null
    offset?: {
      top?: number
      bottom?: number
      left?: number
      right?: number
    }
  }) => void
}

export interface TooltipPosition {
  bottom: number | null
  top: number | null
  left: number | null
  right: number | null
}

export interface TooltipUpdatePositionOptions {
  referenceElement?: HTMLElement | null
  parentElement?: HTMLElement | null
  animation?: string
  bottom?: string | number | null
  top?: string | number | null
  left?: string | number | null
  right?: string | number | null
  offset?: {
    top?: number
    bottom?: number
    left?: number
    right?: number
  }
}

export interface TooltipGetPositionByReferenceParams {
  referenceElement: HTMLElement | null
  animation: string
}

export interface TooltipGetRelativePositionParams {
  targetElement: HTMLElement
  parentElement: HTMLElement
  animation: string
}

export interface TooltipUpdatePositionParams {
  referenceElement?: HTMLElement | null
  parentElement?: HTMLElement | null
  animation?: string
  bottom?: string | number | null
  top?: string | number | null
  left?: string | number | null
  right?: string | number | null
  offset?: {
    top?: number
    bottom?: number
    left?: number
    right?: number
  }
}
