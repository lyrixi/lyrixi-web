/**
 * Page Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode, UIEvent } from 'react'

export interface PageProps {
  /** 是否全屏 */
  full?: boolean
  /** 布局方式 */
  layout?: 'horizontal' | 'vertical'
  /** 动画效果 */
  animation?: string
  /** 是否安全区 */
  safeArea?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 页面内容 */
  children?: ReactNode
}

export interface PageHeaderProps {
  /** 是否安全区 */
  safeArea?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 头部内容 */
  children?: ReactNode
}

export interface PageMainProps {
  /** 触发阈值 */
  threshold?: number
  /** 触摸阻止冒泡 */
  touchStopPropagation?: boolean
  /** 是否安全区 */
  safeArea?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 主体内容 */
  children?: ReactNode
  /** 顶部刷新 */
  onTopRefresh?: () => undefined | Promise<boolean | string | undefined>
  /** 底部刷新 */
  onBottomRefresh?: () => void | Promise<boolean | string | undefined | void>
  /** 滚动事件 */
  onScroll?: (e: UIEvent<HTMLElement>) => void
  /** 滚动结束 */
  onScrollEnd?: (e: UIEvent<HTMLElement>) => void
}

export interface PageFooterProps {
  /** 按钮配置 */
  buttons?: unknown
  /** 是否安全区 */
  safeArea?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 底部内容 */
  children?: ReactNode
  /** 变化事件 */
  onChange?: (newValue: unknown) => void
}

// --- Page.Aside ---

export interface PageAsideProps {
  /** 是否安全区 */
  safeArea?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 侧边内容 */
  children?: ReactNode
}

// --- Refs ---

export interface PageRef {
  /** 根元素 */
  element: HTMLElement | null
  /** 获取根元素 */
}

export interface PageHeaderRef {
  /** 根元素 */
  element: HTMLElement | null
  /** 获取根元素 */
}

export interface PageMainRef {
  /** 根元素 */
  element: HTMLElement | null
  /** 获取根元素 */
}

export interface PageFooterRef {
  /** 根元素 */
  element: HTMLElement | null
  /** 获取根元素 */
}

export interface PageAsideRef {
  /** 根元素 */
  element: HTMLElement | null
  /** 获取根元素 */
}