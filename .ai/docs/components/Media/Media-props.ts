/**
 * Media Props / Ref（AI 文档，生成代码时以此为准）
 */

import type {
  CSSProperties,
  ReactNode,
  MouseEvent,
  ChangeEvent,
  SyntheticEvent,
  Dispatch,
  SetStateAction
} from 'react'

export interface MediaProps {
  /** 媒体列表，默认 `[]` */
  list?: FileItem[]
  /** 最大数量 */
  maxCount?: number
  /** 媒体类型，默认 `['image']` */
  mediaType?: ('image' | 'video' | 'mix')[]
  /** 省略配置 */
  ellipsis?: { count?: number }
  /** 来源类型，默认 `['album', 'camera']` */
  sourceType?: ('album' | 'camera')[]
  /** 尺寸类型，默认 `['compressed']` */
  sizeType?: ('original' | 'compressed')[]
  /** 图片压缩配置 */
  compressConfig?: { maxWidth: number; quality: number }
  /** 允许选择，默认 `false` */
  allowChoose?: boolean
  /** 允许清除，默认 `false` */
  allowClear?: boolean | ((item: FileItem) => boolean)
  /** 是否异步上传，默认 `false` */
  async?: boolean
  /** 支持重新上传 */
  reUpload?: boolean
  /** 预览允许选择 */
  previewAllowChoose?: boolean
  /** 预览允许清除 */
  previewAllowClear?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 上传位置，默认 `'end'` */
  uploadPlacement?: 'start' | 'end'
  /** 预览安全区 */
  previewSafeArea?: boolean
  /** 预览导航栏样式 */
  previewNavBarStyle?: CSSProperties
  /** 预览导航栏类名 */
  previewNavBarClassName?: string
  /** 预览模态框样式 */
  previewModalStyle?: CSSProperties
  /** 预览模态框类名 */
  previewModalClassName?: string
  /** 预览遮罩样式 */
  previewMaskStyle?: CSSProperties
  /** 预览遮罩类名 */
  previewMaskClassName?: string
  /** 上传按钮渲染 */
  uploadRender?: (ctx: { uploadType: string }) => ReactNode
  /** 上传中渲染 */
  uploadingRender?: (ctx: FileItem & { uploadingType: string }) => ReactNode
  /** 项渲染 */
  itemRender?: (item: FileItem) => ReactNode
  /** 预览挂载节点 */
  previewPortal?: HTMLElement | null
  /** 预览取消位置 */
  previewCancelPlacement?: 'left' | 'right'
  /** 选择前事件 */
  onBeforeChoose?: (e: React.MouseEvent) => boolean | void | Promise<boolean | void>
  /** 选择事件 */
  onChoose?: (e?: React.MouseEvent) => void | Promise<unknown>
  /** 文件变化事件，入参与返回值均为数组，与 onChoose 一致 */
  onFileChange?: (fileItems: FileItem[]) => FileItem[] | Promise<FileItem[] | unknown>
  /** 上传事件 */
  onUpload?: (item: FileItem) => void | Promise<unknown>
  /** 变化事件 */
  onChange?: (list: FileItem[], options: { action: string }) => void | Promise<unknown>
  /** 预览事件 */
  onPreview?: (
    item: FileItem,
    index: number
  ) =>
    | void
    | boolean
    | 'nativeMedia'
    | 'nativeFile'
    | 'browser'
    | Promise<void | boolean | 'nativeMedia' | 'nativeFile' | 'browser'>
}

export interface MediaRef {
  element: HTMLDivElement | null
  updateStatus: () => void
  chooseFile: (e?: SyntheticEvent) => Promise<unknown>
  choose: (e?: SyntheticEvent) => Promise<unknown>
  uploadList: (newList?: FileItem[], opts?: { action?: string }) => Promise<FileItem[] | undefined>
  showLoading: (options?: { content?: string; index?: number }) => void
  hideLoading: (options?: { failIndexes?: number[] }) => void
  setPreviewVisible: Dispatch<SetStateAction<number | null>>
}

/** Media 组件静态方法 */
export interface MediaStatic {
  validateListStatus: (...args: unknown[]) => unknown
  isAllowClear: (...args: unknown[]) => unknown
}

export interface MediaListProps {
  /** 媒体列表 */
  list?: FileItem[]
  /** 媒体类型 */
  mediaType?: ('image' | 'video' | 'mix')[]
  /** 省略配置 */
  ellipsis?: { count?: number }
  /** 允许清除 */
  allowClear?: boolean | ((item: FileItem) => boolean)
  /** 上传中渲染 */
  uploadingRender?: (ctx: FileItem & { uploadingType: string }) => ReactNode
  /** 项渲染 */
  itemRender?: (item: FileItem) => ReactNode
  /** 变化事件 */
  onChange?: (list: FileItem[], options: { action: string }) => void | Promise<unknown>
  /** 重新上传事件 */
  onReUpload?: (item: FileItem, index: number) => void
  /** 预览事件 */
  onPreview?: (
    item: FileItem,
    index: number
  ) =>
    | void
    | boolean
    | 'nativeMedia'
    | 'nativeFile'
    | 'browser'
    | Promise<void | boolean | 'nativeMedia' | 'nativeFile' | 'browser'>
}

export interface MediaPreviewModalProps {
  /** 媒体列表 */
  list?: FileItem[]
  /** 当前索引 */
  index?: number
  /** 当前页索引 */
  current?: number
  /** 媒体类型 */
  mediaType?: ('image' | 'video' | 'mix') | ('image' | 'video' | 'mix')[]
  /** 最大数量 */
  maxCount?: number
  /** 来源类型 */
  sourceType?: ('album' | 'camera')[]
  /** 尺寸类型 */
  sizeType?: ('original' | 'compressed')[]
  /** 图片压缩配置 */
  compressConfig?: { maxWidth: number; quality: number }
  /** 是否显示 */
  open?: boolean
  /** 允许选择 */
  allowChoose?: boolean
  /** 允许清除 */
  allowClear?: boolean | ((item: FileItem) => boolean)
  /** 主区域样式 */
  mainStyle?: CSSProperties
  /** 主区域类名 */
  mainClassName?: string
  /** 是否安全区 */
  safeArea?: boolean
  /** 导航栏样式 */
  navBarStyle?: CSSProperties
  /** 导航栏类名 */
  navBarClassName?: string
  /** 模态框样式 */
  modalStyle?: CSSProperties
  /** 模态框类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: CSSProperties
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: HTMLElement
  /** 取消按钮位置 */
  cancelPlacement?: 'left' | 'right'
  /** 选择前事件 */
  onBeforeChoose?: (e: React.MouseEvent) => boolean | void | Promise<boolean | void>
  /** 选择事件 */
  onChoose?: (e?: React.MouseEvent) => void | Promise<unknown>
  /** 文件变化事件，入参与返回值均为数组，与 onChoose 一致 */
  onFileChange?: (fileItems: FileItem[]) => FileItem[] | Promise<FileItem[] | unknown>
  /** 上传事件 */
  onUpload?: (item: FileItem) => void | Promise<unknown>
  /** 变化事件 */
  onChange?: (list: FileItem[], options: { action: string }) => void | Promise<unknown>
  /** 关闭事件 */
  onClose?: () => void
}

export interface MediaPreviewMainProps {
  /** 媒体列表 */
  list?: FileItem[]
  /** 当前索引 */
  index?: number
  /** 媒体类型 */
  mediaType?: ('image' | 'video' | 'mix') | ('image' | 'video' | 'mix')[]
  /** 来源类型 */
  sourceType?: ('album' | 'camera')[]
  /** 尺寸类型 */
  sizeType?: ('original' | 'compressed')[]
  /** 最大数量 */
  maxCount?: number
  /** 图片压缩配置 */
  compressConfig?: { maxWidth: number; quality: number }
  /** 是否显示 */
  open?: boolean
  /** 是否可关闭 */
  closable?: boolean
  /** 允许选择 */
  allowChoose?: boolean
  /** 允许清除 */
  allowClear?: boolean | ((item: FileItem) => boolean)
  /** 是否异步上传 */
  async?: boolean
  /** 支持重新上传 */
  reUpload?: boolean
  /** 自定义类名 */
  className?: string
  /** 自定义样式 */
  style?: CSSProperties
  /** 是否安全区 */
  safeArea?: boolean
  /** 选择前事件 */
  onBeforeChoose?: (e: React.MouseEvent) => boolean | void | Promise<boolean | void>
  /** 选择事件 */
  onChoose?: (e?: React.MouseEvent) => void | Promise<unknown>
  /** 文件变化事件，入参与返回值均为数组，与 onChoose 一致 */
  onFileChange?: (fileItems: FileItem[]) => FileItem[] | Promise<FileItem[] | unknown>
  /** 上传事件 */
  onUpload?: (item: FileItem) => void | Promise<unknown>
  /** 变化事件 */
  onChange?: (list: FileItem[], options: { action: string }) => void | Promise<unknown>
  /** 关闭事件 */
  onClose?: () => void
}

export interface MediaMarkProps {
  /** 标记文案列表 */
  labels?: ReactNode[]
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}

export interface MediaListRef {
  element: HTMLDivElement | null
}

export interface MediaPreviewModalRef {
  mainElement?: SwiperRef | null
  getMainElement?: () => SwiperRef | null
}

export interface MediaPreviewMainRef {
  mainElement?: SwiperRef | null
  getMainElement?: () => SwiperRef | null
}

interface SwiperRef {}

interface FileItem {
  fileThumbnail: string
  fileUrl: string
  filePath: string
  status: 'choose' | 'uploading' | 'error' | 'success'
}

/** Media.choose 工具方法参数 */
export interface MediaChooseUtilOptions {
  /** 是否异步上传 */
  async: boolean
  /** 最大选择数量 */
  maxCount?: number
  /** 当前列表 */
  list?: FileItem[]
  /** 上传位置 */
  uploadPlacement: 'start' | 'end' | string
  /** 上传列表 */
  uploadList: (
    newList: FileItem[] | undefined,
    opts?: { action?: string }
  ) => Promise<FileItem[] | undefined>
  /** 选择回调 */
  onChoose?: () => void | FileItem[] | Promise<FileItem[] | void | null | undefined | unknown>
  /** 变化回调 */
  onChange?: (list: FileItem[], options: { action: string }) => void | Promise<unknown>
}

/** Media.validateListStatus 静态方法 */
export type MediaValidateListStatus = (list: FileItem[]) => boolean

/** Media.isAllowClear 静态方法 */
export type MediaIsAllowClear = (item: FileItem) => boolean

export interface MediaChooseProps {
  mediaType?: ('image' | 'video' | 'mix')[]
  sourceType?: ('album' | 'camera')[]

  className?: string

  uploadRender?: (options: { uploadType: string }) => ReactNode
  uploadingRender?: MediaUploadingProps['uploadingRender']

  onBeforeChoose?: (e: MouseEvent) => void | boolean | Promise<void | boolean>
  onChoose?: (e?: MouseEvent) => void
  onFileChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface MediaItemDeleteProps {
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

export interface MediaItemImgProps {
  fileUrl?: string
  /** 重新加载的key */
  reloadKey?: unknown
}

export interface MediaItemReloadProps {
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

export interface MediaRemainCountProps {
  count: number
}

export interface MediaItemProps {
  item: FileItem
  index: number
  remainCount?: number | null

  uploadingRender?: MediaUploadingProps['uploadingRender']
  itemRender?: (item: FileItem) => ReactNode

  onDelete?: (item: FileItem, index: number) => void
  onReUpload?: (item: FileItem, index: number) => void
  onPreview?: (item: FileItem, index: number) => void
}

export interface MediaListMainProps {
  list: FileItem[]
  ellipsis?: { count?: number }

  allowClear?: boolean | ((item: FileItem) => boolean)

  uploadingRender?: MediaUploadingProps['uploadingRender']
  itemRender?: (item: FileItem) => ReactNode

  onChange?: (list: FileItem[], options: { action: string }) => void
  onReUpload?: (item: FileItem, index: number) => void
  onPreview?: (item: FileItem, index: number) => void
}

export interface MediaPreviewChooseProps {
  mediaType?: ('image' | 'video' | 'mix') | ('image' | 'video' | 'mix')[]
  sourceType: ('album' | 'camera')[]

  onBeforeChoose?: MediaChooseProps['onBeforeChoose']
  onChoose?: MediaChooseProps['onChoose']
  onFileChange?: MediaChooseProps['onFileChange']
}

export interface MediaPreviewToolbarProps {
  onRotateAnticlockwise?: (e: MouseEvent) => void
  onRotateClockwise?: (e: MouseEvent) => void
  onZoomOut?: (e: MouseEvent) => void
  onZoomIn?: (e: MouseEvent) => void
}

export interface MediaUploadingProps {
  uploadingType: string
  item?: FileItem

  className?: string

  uploadingRender?: (options: FileItem & { uploadingType: string }) => ReactNode
}

export interface MediaCompressConfig {
  maxWidth: number
  quality: number
}
