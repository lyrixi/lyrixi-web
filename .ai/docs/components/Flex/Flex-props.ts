/**
 * Flex Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface FlexProps {
  /** 子项间距 */
  gap?: number
  /** 主轴对齐方式，默认 `'start'` */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  /** 交叉轴对齐方式 */
  align?: 'start' | 'center' | 'end'
  /** 主轴方向，默认 `'horizontal'` */
  direction?: 'horizontal' | 'vertical'
  /** 是否换行；`true` 换行，`false` 不换行，`'scroll'` 超出滚动 */
  wrap?: boolean | 'scroll'
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 子元素 */
  children?: ReactNode
}

export interface FlexRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}
