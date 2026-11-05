/**
 * VideoPlayer Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface VideoPlayerProps {
  /** 视频地址 */
  src?: string
  /** 自动播放 */
  autoPlay?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 挂载节点 */
  portal?: Element
  /** 封面图 */
  poster?: string
  /** 子元素 */
  children?: ReactNode
  /** 自定义头部渲染 */
  headerRender?: () => ReactNode
  /** 错误事件 */
  onError?: (err: { status: string; message: string; error: unknown }) => void
}

export interface VideoPlayerRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
  /** 暂停播放 */
  pause: () => void
  /** 开始播放 */
  play: () => void
}