/**
 * Attach Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode, SyntheticEvent, ChangeEvent } from 'react'

import type { ModalProps } from '../Modal/Modal-props'

/** 文件/媒体列表单项基础类型 */
export interface AttachFileItem {
  status?: string
  fileName?: string
  fileUrl?: string
  fileType?: string
  localFile?: { fileUrl?: string; fileType?: string; tempFileThumbnail?: string; [key: string]: unknown }
  fileSize?: number
  filePath?: File | string
  className?: string
  fileThumbnail?: string
  message?: string
  reloadKey?: unknown
  [key: string]: unknown
}

export interface AttachProps {
  /** 附件列表 */
  list?: AttachFileItem[]
  /** 最大数量 */
  maxCount?: number
  /** 来源类型 */
  sourceType?: string | string[]
  /** 允许选择 */
  allowChoose?: boolean
  /** 是否异步上传 */
  async?: boolean
  /** 支持重新上传 */
  reUpload?: boolean
  /** 最大文件大小 */
  maxSize?: number
  /** 上传位置，默认 `'end'` */
  uploadPlacement?: 'start' | 'end'
  /** 预览挂载节点 */
  previewPortal?: ModalProps['portal']
  /** 预览服务器地址 */
  previewServerUrl?: string
  /** 预览服务器来源类型 */
  previewServerSourceType?: string | string[]
  /** 是否禁用 */
  disabled?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 内容 */
  children?: ReactNode
  /** 上传按钮渲染 */
  uploadRender?: (ctx: { uploadingType: string }) => ReactNode
  /** 上传中渲染 */
  uploadingRender?: (ctx: { uploadingType: string }) => ReactNode
  /** 项渲染 */
  itemRender?: (item: AttachFileItem, index: number) => ReactNode
  /** 选择前事件 */
  onBeforeChoose?: (e: SyntheticEvent) => boolean | void | Promise<boolean | void>
  /** 选择事件 */
  onChoose?: (e?: SyntheticEvent) => unknown
  /** 文件变化事件，入参与返回值均为数组，与 onChoose 一致 */
  onFileChange?: (fileItems: AttachFileItem[]) => AttachFileItem[] | Promise<AttachFileItem[] | unknown>
  /** 上传事件 */
  onUpload?: (item: AttachFileItem) => unknown
  /** 变化事件 */
  onChange?: (list: AttachFileItem[], options?: { action?: string }) => void
  /** 预览事件 */
  onPreview?: (item: AttachFileItem, index: number) => unknown
}

export interface AttachRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
  /** 更新状态 */
  updateStatus: () => void
  /** 选择文件 */
  chooseFile: (e: SyntheticEvent) => Promise<unknown>
  /** 选择 */
  choose: (e: SyntheticEvent) => Promise<unknown>
  /** 上传列表 */
  uploadList: (newList?: AttachFileItem[] | null, options?: { action?: string }) => Promise<AttachFileItem[]>
  /** 显示加载 */
  showLoading: (options?: { content?: string; index?: number }) => void
  /** 隐藏加载 */
  hideLoading: (options?: { failIndexes?: number[] }) => void
}

// Attach sub-components

export interface AttachListProps {
  /** 附件列表 */
  list?: AttachFileItem[]
  /** 允许清除 */
  allowClear?: boolean | ((item: unknown) => boolean)
  /** 上传中渲染 */
  uploadingRender?: (ctx: { uploadingType: string }) => ReactNode
  /** 项渲染 */
  itemRender?: (item: AttachFileItem, index: number) => ReactNode
  /** 变化事件 */
  onChange?: (list: AttachFileItem[], options: { action: string }) => void
  /** 重新上传事件 */
  onReUpload?: (item: AttachFileItem, index: number) => void
  /** 预览事件 */
  onPreview?: (item: AttachFileItem, index: number) => unknown
}

export interface AttachButtonProps {
  /** 是否禁用 */
  disabled?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 上传中渲染 */
  uploadingRender?: (ctx: { uploadingType: string }) => ReactNode
}

export interface AttachUploadingProps {
  /** 上传状态类型 */
  uploadingType?: string
  /** 自定义类名 */
  className?: string
  /** 上传中渲染 */
  uploadingRender?: (ctx: { uploadingType: string }) => ReactNode
}

export interface AttachButtonRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}

/** Attach.choose 工具方法参数 */
export interface AttachChooseOptions {
  /** 是否异步上传 */
  async: boolean
  /** 最大文件大小（字节） */
  maxSize?: number
  /** 最大选择数量 */
  maxCount?: number
  /** 来源类型 */
  sourceType: string[]
  /** 当前列表 */
  list?: AttachFileItem[]
  /** 上传位置 */
  uploadPlacement: 'start' | 'end' | string
  /** 上传列表 */
  uploadList: (
    newList: AttachFileItem[],
    opts?: { action?: string }
  ) => Promise<AttachFileItem[] | undefined>
  /** 选择前回调 */
  onChoose?: () => unknown
  /** 变化回调 */
  onChange?: (list: AttachFileItem[], options: { action: string }) => void
}

/** Attach.validateListStatus 静态方法 */
export type AttachValidateListStatus = (list: AttachFileItem[]) => boolean

/** Attach.supportTypes 静态方法 — 返回支持的 MIME 类型列表 */
export type AttachSupportTypes = () => string[]

export interface AttachPreviewMainProps {

  fileName?: string
  previewServerUrl?: string
  fileUrl?: string
  previewServerSourceType?: string[]
}

export interface AttachPreviewMainRef {
  mainElement: HTMLDivElement | null
  getMainElement: () => HTMLDivElement | null
}

export interface AttachPreviewModalProps {

  fileName?: string
  previewServerUrl?: string
  fileUrl?: string
  previewServerSourceType?: string[]

  open?: boolean

  portal?: ModalProps['portal']

  onClose?: ModalProps['onClose']
}
