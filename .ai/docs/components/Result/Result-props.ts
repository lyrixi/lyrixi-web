/**
 * Result Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface ResultProps {
  /** 状态（必填） */
  status: string
  /** 描述 */
  description?: ReactNode
  /** 是否全屏 */
  full?: boolean
  /** 图片地址 */
  imageUrl?: string | null
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 标题 */
  title?: string | null | ReactNode
  /** 自定义图片渲染 */
  imageRender?: (() => ReactNode) | null
  /** 结果页内容 */
  children?: ReactNode
}