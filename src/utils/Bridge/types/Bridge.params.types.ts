import type { ErrorResult, SuccessResult } from '../../../types'

export interface LocalFile {
  fileSize?: number
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
import type {
  BridgeCancelCallback,
  BridgeErrorCallback,
  BridgeGetLocationResultData,
  BridgeSuccessCallback
} from './Bridge.callbacks.types'

export type BridgeChooseMediaParams = {
  onSuccess?: BridgeSuccessCallback
  onError?: BridgeErrorCallback
  onCancel?: BridgeCancelCallback
  [key: string]: unknown
}

export type BridgeGetLocationParams = {
  type?: 'wgs84' | 'gcj02' | 'bd09'
  onSuccess?: BridgeSuccessCallback<BridgeGetLocationResultData>
  onError?: BridgeErrorCallback
  onCancel?: BridgeCancelCallback
}

export type BridgeGetBrowserLocationParams = BridgeGetLocationParams

export type BridgeOpenLocationPoint = {
  latitude?: number
  longitude?: number
  type?: 'wgs84' | 'gcj02' | 'bd09'
  name?: string
  address?: string
}

export type BridgeOpenLocationParams = {
  to?: BridgeOpenLocationPoint
  from?: BridgeOpenLocationPoint
  scale?: number
  onSuccess?: BridgeSuccessCallback
  onError?: BridgeErrorCallback
}

/** Attach / MediaUploader 上传配置（库内使用，非对外 Bridge API） */
export type BridgeUploadFileParams = {
  getUploadUrl?: (options: { platform: string }) =>
    | string
    | undefined
    | { saveMediaUrl: string; getMediaUrl: string }
    | Promise<string | undefined | { saveMediaUrl: string; getMediaUrl: string }>
  formatHeaders?: (
    headers: Record<string, string>,
    options: { platform: string }
  ) => Record<string, string> | Promise<Record<string, string>>
  formatPayload?: (
    payload: Record<string, unknown>,
    options: { platform: string }
  ) => Record<string, unknown> | Promise<Record<string, unknown>>
  formatResponse?: (
    response: unknown,
    options: { platform: string }
  ) => ErrorResult | SuccessResult<FileItem>
  onSuccess?: BridgeSuccessCallback<FileItem>
  onError?: BridgeErrorCallback
  onCancel?: BridgeCancelCallback
  platform?: string
  [key: string]: unknown
} & Record<string, unknown>
