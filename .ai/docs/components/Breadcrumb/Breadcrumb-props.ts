/**
 * Breadcrumb Props / Ref（AI 文档，生成代码时以此为准）
 * API 对齐 TabBar.Tabs（BreadcrumbItem 与 TabBarItem 字段一致）
 */

import type { ComponentType, CSSProperties, ReactNode, SVGProps } from 'react'

export interface BreadcrumbItem {
  id?: string | number
  name?: ReactNode
  description?: ReactNode
  placeholder?: ReactNode
  disabled?: boolean
  iconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  iconSize?: string | number
  iconColor?: string
  iconRender?: (params: Record<string, unknown>) => ReactNode
  contentRender?: (params: Record<string, unknown>) => ReactNode
}

export type BreadcrumbSize = 's' | 'm' | 'l'

export interface BreadcrumbProps {
  /** 当前页面对应项 */
  value?: BreadcrumbItem
  /** 路径列表 */
  list?: BreadcrumbItem[]
  /** 分隔符 */
  separator?: ReactNode
  /** 间距 */
  gap?: string | number
  /** 描述位置 */
  descriptionPlacement?: string
  /** 是否禁用 */
  disabled?: boolean
  /** 尺寸 */
  size?: BreadcrumbSize
  /** 是否占满一整行 */
  block?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 点击上级节点 */
  onChange?: (item: BreadcrumbItem) => void
}

export interface BreadcrumbRef {
  element: HTMLDivElement | null
}
