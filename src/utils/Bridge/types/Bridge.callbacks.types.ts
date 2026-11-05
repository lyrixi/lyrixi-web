import type { ErrorResult, SuccessResult } from '../../../types'

export type BridgeGetLocationResultData = {
  latitude?: number
  longitude?: number
  type?: 'wgs84' | 'gcj02' | 'bd09'
  accuracy?: number
}

export type BridgeSuccessCallback<T = undefined> = (result: SuccessResult<T>) => void
export type BridgeErrorCallback = (result: ErrorResult) => void
export type BridgeCancelCallback = () => void
