/**
 * Steps Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface StepsValue {
  index?: number
  id?: string
  status?: string
  activeIndex?: number
  icon?: ReactNode
}

export interface StepsItem {
  id?: string
  icon?: ReactNode
  status?: string
  title?: ReactNode
  description?: ReactNode
}

export interface StepsProps {
  /** 当前步骤 */
  value?: StepsValue
  /** 步骤列表 */
  list?: StepsItem[]
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 图标大小 */
  iconSize?: number
  /** 对齐方式 */
  align?: string
  /** 方向 */
  direction?: string
}

export interface StepsRef {
  element: HTMLDivElement | null
}

export interface StepsNodeProps {

  iconChildren?: ReactNode
  status?: string
  rail?: boolean
  description?: ReactNode

  iconRender?: (options: { children: ReactNode; className: string; status?: string }) => ReactNode
  title?: ReactNode
}
