/**
 * Skeleton Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, RefObject } from 'react'

export type PageLayout = 'horizontal' | 'vertical'

// ===== Avatar =====

export interface SkeletonAvatarProps {
  /** 是否开启动画 */
  animated?: boolean
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: CSSProperties
}

// ===== Title =====

export interface SkeletonTitleProps {
  /** 是否开启动画 */
  animated?: boolean
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: CSSProperties
}

// ===== Item =====

export interface SkeletonItemProps {
  /** 是否开启动画 */
  animated?: boolean
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: CSSProperties
}

// ===== Paragraph =====

export interface SkeletonParagraphProps {
  /** 行数 */
  length?: number
  /** 分隔符 */
  divider?: string
  /** 是否开启动画 */
  animated?: boolean
  /** 是否显示头像占位 */
  avatarVisible?: boolean
  /** 是否显示标题占位 */
  titleVisible?: boolean
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 头像类名 */
  avatarClassName?: string
  /** 头像样式 */
  avatarStyle?: CSSProperties
  /** 标题类名 */
  titleClassName?: string
  /** 标题样式 */
  titleStyle?: CSSProperties
  /** 每行类名 */
  itemClassName?: string
  /** 每行样式 */
  itemStyle?: CSSProperties
  /** 奇数行类名 */
  oddClassName?: string
  /** 奇数行样式 */
  oddStyle?: CSSProperties
  /** 偶数行类名 */
  evenClassName?: string
  /** 偶数行样式 */
  evenStyle?: CSSProperties
}

// ===== Tabs =====

export interface SkeletonTabsProps {
  /** Tab 数量 */
  length?: number
  /** 是否开启动画 */
  animated?: boolean
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 每个 Tab 类名 */
  tabClassName?: string
  /** 每个 Tab 样式 */
  tabStyle?: CSSProperties
}

// ===== List =====

export interface SkeletonListProps {
  /** 列表项数 */
  listLength?: number
  /** 每项行数 */
  itemLength?: number
  /** 是否开启动画 */
  animated?: boolean
  /** 安全区 */
  safeArea?: boolean
  /** 是否全屏 */
  full?: boolean
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 分隔符 */
  divider?: string
  /** 页面布局 */
  layout?: PageLayout
  /** 动画效果 */
  animation?: string
}

// ===== Detail =====

export interface SkeletonDetailProps {
  /** 详情项数 */
  listLength?: number
  /** 每项行数 */
  itemLength?: number
  /** 是否开启动画 */
  animated?: boolean
  /** 安全区 */
  safeArea?: boolean
  /** 是否全屏 */
  full?: boolean
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 分隔符 */
  divider?: string
  /** 页面布局 */
  layout?: PageLayout
  /** 动画效果 */
  animation?: string
}

// ===== Edit =====

export interface SkeletonEditProps {
  /** 编辑项数 */
  listLength?: number
  /** 每项行数 */
  itemLength?: number
  /** 是否开启动画 */
  animated?: boolean
  /** 安全区 */
  safeArea?: boolean
  /** 是否全屏 */
  full?: boolean
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 分隔符 */
  divider?: string
  /** 页面布局 */
  layout?: PageLayout
  /** 动画效果 */
  animation?: string
}

// ===== Refs =====

export type SkeletonAvatarRef = HTMLDivElement
export type SkeletonTitleRef = HTMLDivElement
export type SkeletonItemRef = HTMLDivElement
export type SkeletonTabsRef = HTMLDivElement
export type SkeletonParagraphRef = HTMLDivElement
export type SkeletonListRef = HTMLDivElement
export type SkeletonDetailRef = HTMLDivElement
export type SkeletonEditRef = HTMLDivElement

export interface SkeletonRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
}

export interface SkeletonAvatarProps {

  animated?: boolean

  className?: string
  style?: CSSProperties
}
