/**
 * Bridge API（AI 文档，生成代码时以此为准）
 */

export interface LocalFile {
  tempFilePath?: string
  tempFile?: string
  fileUrl?: string
  fileType?: string
  tempFileThumbnail?: string
  [key: string]: unknown
}

export interface FileItem {
  status?: string
  fileName?: string
  fileUrl?: string
  fileType?: string
  localFile?: LocalFile
  fileSize?: number
  filePath?: File | string
  className?: string
  fileThumbnail?: string
  message?: string
  reloadKey?: unknown
  [key: string]: unknown
}

export namespace Bridge {
  /** 选择图片或视频。 */
  export function chooseMedia(...args: unknown[]): unknown

  /** 见源码与 demos */
  export function debug(...args: unknown[]): unknown

  /** 获取浏览器地理位置（所有平台都可以调用）。 */
  export function getBrowserLocation(...args: unknown[]): unknown

  /** 获取当前地理位置。 */
  export function getLocation(...args: unknown[]): unknown

  /** 返回上一页或多级页面 */
  export function navigateBack(...args: unknown[]): unknown

  /** 打开地图查看位置。 */
  export function openLocation(...args: unknown[]): unknown

  /** 预览文件（仅客户端支持）。 */
  export function previewFile(...args: unknown[]): unknown

  /** 预览图片或视频。 */
  export function previewMedia(...args: unknown[]): unknown

  /** 上传文件。 */
  export function uploadFile(...args: unknown[]): unknown

}
