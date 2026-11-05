/**
 * AttachUploader Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode, SyntheticEvent } from 'react'

import type { AttachFileItem, AttachRef } from '../Attach/Attach-props'
import type { ModalProps } from '../Modal/Modal-props'

export type { AttachRef }

export interface AttachUploaderItem extends AttachFileItem {
  localFile?: Record<string, unknown> & { fileSize?: number; fileUrl?: string; [key: string]: unknown }
}

export interface UploadFormatContext {
  platform: string
  uploadItem: AttachUploaderItem
  result?: unknown
}

export type GetUploadUrlFn = (ctx: UploadFormatContext) => string | Promise<string>
export type FormatHeadersFn = (
  headers: Record<string, string>,
  ctx: { platform: string }
) => Record<string, string> | Promise<Record<string, string>>
export type FormatPayloadFn = (payload: unknown, ctx: { platform: string }) => unknown
export type FormatResponseFn = (response: unknown, ctx: { platform: string }) => unknown

export interface AttachUploaderProps {
  /** 附件列表 */
  list?: AttachUploaderItem[]
  /** 最大数量 */
  maxCount?: number
  /** 最大选择数量 */
  maxChooseCount?: number
  /** 文件扩展名过滤 */
  extension?: string[]
  /** 来源类型 */
  sourceType?: string | string[]
  /** 最大文件大小 */
  maxSize?: number
  /** 是否异步上传 */
  async?: boolean
  /** 支持重新上传 */
  reUpload?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 允许选择 */
  allowChoose?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 上传位置 */
  uploadPlacement?: 'start' | 'end'
  /** 上传按钮渲染 */
  uploadRender?: (ctx: { uploadingType: string }) => ReactNode
  /** 上传中渲染 */
  uploadingRender?: (ctx: { uploadingType: string }) => ReactNode
  /** 项渲染 */
  itemRender?: (item: AttachUploaderItem, index: number) => ReactNode
  /** 预览挂载节点 */
  previewPortal?: ModalProps['portal']
  /** 预览服务器地址 */
  previewServerUrl?: string
  /** 预览服务器来源类型 */
  previewServerSourceType?: string | string[]
  /** 获取上传地址 */
  getUploadUrl?: GetUploadUrlFn
  /** 格式化请求头 */
  formatHeaders?: FormatHeadersFn
  /** 格式化请求体 */
  formatPayload?: FormatPayloadFn
  /** 格式化响应 */
  formatResponse?: FormatResponseFn
  /** 选择前事件 */
  onBeforeChoose?: () => boolean | void | Promise<boolean | void>
  /** 文件变化事件，入参与返回值均为数组，与 onChoose 一致 */
  onFileChange?: (fileItems: AttachFileItem[]) => AttachFileItem[] | Promise<AttachFileItem[] | unknown>
  /** 上传事件 */
  onUpload?: (item: AttachUploaderItem) => unknown
  /** 变化事件 */
  onChange?: (list: AttachUploaderItem[], options?: { action?: string }) => void
  /** 预览事件 */
  onPreview?: (item: AttachUploaderItem, index: number) => unknown
}

export interface AttachUploaderRef extends AttachRef {}

export interface AttachUploaderBrowserProps {}
