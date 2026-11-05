/**
 * Message Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode, ComponentType, SVGProps } from 'react'

export interface MessageButton {
  id?: string
  name?: string
  style?: CSSProperties
  className?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => boolean | void | Promise<boolean | void>
}

export interface MessageModalProps {
  /** 是否显示 */
  open?: boolean
  /** 点击遮罩关闭 */
  maskClosable?: boolean
  /** 是否启用安全区 */
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
  portal?: HTMLElement | null | false | (() => HTMLElement | null)
  /** 关闭事件 */
  onClose?: () => void
  /** SVG 图标组件 */
  iconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  /** 图标尺寸 */
  iconSize?: string
  /** 图标颜色 */
  iconColor?: string
  /** 图标区域渲染 */
  iconRender?: () => ReactNode
  /** 标题 */
  title?: ReactNode
  /** 正文 */
  content?: ReactNode
  /** 底部按钮布局 */
  buttonsLayout?: 'vertical' | 'horizontal'
  /** 底部按钮配置 */
  buttons?: MessageButton[]
  /** 标题类名 */
  titleClassName?: string
  /** 标题样式 */
  titleStyle?: CSSProperties
  /** 正文类名 */
  contentClassName?: string
  /** 正文样式 */
  contentStyle?: CSSProperties
  /** 底部类名 */
  footerClassName?: string
  /** 底部样式 */
  footerStyle?: CSSProperties
}

export interface MessageComboProps {
  /** SVG 图标组件 */
  iconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  /** 图标尺寸 */
  iconSize?: string
  /** 图标颜色 */
  iconColor?: string
  /** 是否显示 */
  open?: boolean
  /** 点击遮罩关闭 */
  maskClosable?: boolean
  /** 是否启用安全区 */
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
  portal?: HTMLElement | null | false | (() => HTMLElement | null)
  /** 打开事件 */
  onOpen?: () => void
  /** 关闭事件 */
  onClose?: () => void
  /** 图标区域渲染 */
  iconRender?: () => ReactNode
  /** 标题 */
  title?: ReactNode
  /** 正文 */
  content?: ReactNode
  /** 底部按钮布局 */
  buttonsLayout?: 'vertical' | 'horizontal'
  /** 底部按钮配置 */
  buttons?: MessageButton[]
  /** 标题类名 */
  titleClassName?: string
  /** 标题样式 */
  titleStyle?: CSSProperties
  /** 正文类名 */
  contentClassName?: string
  /** 正文样式 */
  contentStyle?: CSSProperties
  /** 底部类名 */
  footerClassName?: string
  /** 底部样式 */
  footerStyle?: CSSProperties
  /** 根节点类名 */
  className?: string
  /** 根节点样式 */
  style?: CSSProperties
  /** 自定义内容 */
  children?: ReactNode
}

export interface MessageMainProps {
  /** SVG 图标组件 */
  iconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  /** 图标尺寸 */
  iconSize?: string
  /** 图标颜色 */
  iconColor?: string
  /** 图标区域渲染 */
  iconRender?: () => ReactNode
  /** 标题 */
  title?: ReactNode
  /** 正文 */
  content?: ReactNode
  /** 底部按钮布局 */
  buttonsLayout?: 'vertical' | 'horizontal'
  /** 底部按钮配置 */
  buttons?: MessageButton[]
  /** 标题类名 */
  titleClassName?: string
  /** 标题样式 */
  titleStyle?: CSSProperties
  /** 正文类名 */
  contentClassName?: string
  /** 正文样式 */
  contentStyle?: CSSProperties
  /** 底部类名 */
  footerClassName?: string
  /** 底部样式 */
  footerStyle?: CSSProperties
  /** 根节点类名 */
  className?: string
  /** 根节点样式 */
  style?: CSSProperties
  /** 按钮点击 */
  onButtonClick?: (
    button: MessageButton,
    e: React.MouseEvent<HTMLDivElement>
  ) => boolean | void | Promise<boolean | void>
}

export interface MessageOpenProps {
  /** SVG 图标组件 */
  iconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  /** 图标尺寸 */
  iconSize?: string
  /** 图标颜色 */
  iconColor?: string
  /** 是否显示 */
  open?: boolean
  /** 点击遮罩关闭 */
  maskClosable?: boolean
  /** 是否启用安全区 */
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
  portal?: HTMLElement | null | false | (() => HTMLElement | null)
  /** 图标区域渲染 */
  iconRender?: () => ReactNode
  /** 标题 */
  title?: ReactNode
  /** 正文 */
  content?: ReactNode
  /** 底部按钮布局 */
  buttonsLayout?: 'vertical' | 'horizontal'
  /** 底部按钮配置 */
  buttons?: MessageButton[]
  /** 标题类名 */
  titleClassName?: string
  /** 标题样式 */
  titleStyle?: CSSProperties
  /** 正文类名 */
  contentClassName?: string
  /** 正文样式 */
  contentStyle?: CSSProperties
  /** 底部类名 */
  footerClassName?: string
  /** 底部样式 */
  footerStyle?: CSSProperties
  /** 根节点类名 */
  className?: string
  /** 根节点样式 */
  style?: CSSProperties
}

export interface MessageHeaderProps {
  /** 类名 */
  className?: string
  /** 样式 */
  style?: CSSProperties
  /** 头部内容 */
  children?: ReactNode
}

export interface MessageFooterProps {
  /** 按钮布局 */
  layout?: string
  /** 类名 */
  className?: string
  /** 样式 */
  style?: CSSProperties
  /** 底部内容 */
  children?: ReactNode
}

export interface MessageIconProps {
  /** 类名 */
  className?: string
  /** 样式 */
  style?: CSSProperties
  /** 图标内容 */
  children?: ReactNode
}

export interface MessageTitleProps {
  /** 类名 */
  className?: string
  /** 样式 */
  style?: CSSProperties
  /** 标题内容 */
  children?: ReactNode
}

export interface MessageButtonProps {
  /** 块级按钮 */
  block?: boolean
  /** 文字颜色 */
  color?: string
  /** 背景颜色 */
  backgroundColor?: string
  /** 类名 */
  className?: string
  /** 样式 */
  style?: CSSProperties
  /** 按钮文案 */
  children?: ReactNode
  /** 点击事件 */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export interface MessageComboRef {
  element: HTMLDivElement | null
  open?: () => void
  close?: () => void
}

export interface MessageModalRef {
  element: HTMLDivElement | null
}

export interface MessageMainRef {
  element: HTMLElement | null
}

export interface MessageHeaderRef {
  element: HTMLElement | null
}

export interface MessageFooterRef {
  element: HTMLElement | null
}

export interface MessageIconRef {
  element: HTMLDivElement | null
}

export interface MessageTitleRef {
  element: HTMLDivElement | null
}

export interface MessageButtonRef {
  element: HTMLDivElement | null
}

export interface MessageBodyProps {
  content?: ReactNode
  buttonsLayout?: 'vertical' | 'horizontal'
  buttons?: MessageButton[]

  titleClassName?: string
  titleStyle?: CSSProperties
  contentClassName?: string
  contentStyle?: CSSProperties
  footerClassName?: string
  footerStyle?: CSSProperties

  iconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  iconSize?: string
  iconColor?: string
  iconRender?: () => ReactNode
  title?: ReactNode
}
