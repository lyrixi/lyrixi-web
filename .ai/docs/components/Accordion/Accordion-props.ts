/**
 * Accordion Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface AccordionProps {
  /** 是否展开，默认 `false` */
  open?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 头部样式 */
  headerStyle?: CSSProperties
  /** 标题样式 */
  titleStyle?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 最小高度 */
  minHeight?: number
  /** 标题 */
  title?: ReactNode
  /** 自定义头部渲染 */
  headerRender?: (props: { open: boolean; onClick: () => void }) => ReactNode
  /** 省略配置 */
  ellipsis?: { expandText?: ReactNode; collapseText?: ReactNode }
  /** 自定义省略渲染 */
  ellipsisRender?: (props: { open: boolean; onClick: () => void }) => ReactNode
  /** 箭头容器类名（布局用，不用于选图标） */
  arrowClassName?: string
  /** 箭头位置，默认 `'right'` */
  arrowPlacement?: 'left' | 'right'
  /** 自定义箭头渲染 */
  arrowRender?: (props: { open: boolean }) => ReactNode
  /** 内容 */
  children?: ReactNode
  /** 展开事件 */
  onOpen?: () => void
  /** 收起事件 */
  onClose?: () => void
}

export interface AccordionRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
  /** 展开 */
  open: () => void
  /** 收起 */
  close: () => void
}

// Accordion.Group

export interface AccordionGroupProps {
  /** 当前激活项的索引 */
  value?: number | null
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 内容 */
  children?: ReactNode
  /** 变化事件 */
  onChange?: (index: number | null) => void
}

export interface AccordionGroupRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
  /** 获取当前激活索引 */
  getActiveIndex: () => number | null | undefined
  /** 展开指定项 */
  openIndex: (index: number) => void
  /** 收起全部 */
  close: () => void
}

export interface AccordionTransitionProps {
  minHeight?: number

  open: boolean

  children?: ReactNode
}
