/**
 * FooterBar Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'
import type { ListItem } from '../List/List-props'
import type { ButtonProps } from '../Button/Button-props'
import type { ModalProps } from '../Modal/Modal-props'

export interface FooterBarProps {
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 底部栏内容 */
  children?: ReactNode
}

export interface FooterBarRef {
  /** 根元素 */
  element: HTMLElement | null
  /** 获取根元素 */
}

// FooterBar.Button

export interface FooterBarButtonProps extends Omit<ButtonProps, 'onClick'> {
  list?: ListItem[]
  modalStyle?: CSSProperties
  modalClassName?: string
  maskStyle?: CSSProperties
  maskClassName?: string
  portal?: ModalProps['portal']
  onClick?: ButtonProps['onClick']
}

export interface FooterBarButtonRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}