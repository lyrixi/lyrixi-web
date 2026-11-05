import type { BridgeGetLocationParams, BridgeOpenLocationParams } from './types'

// 内库使用-start
import LocaleUtil from './../LocaleUtil'
import GeoUtil from './../GeoUtil'
import Toast from './../../components/Toast'
// 内库使用-end

import type { BridgeGetLocationResultData } from './types'

/** PC 管理后台：文档对外仅 {@link getLocation}；其余为库内兼容占位 */
const Bridge = {
  debug: false,
  load(params?: { onSuccess?: () => void }) {
    params?.onSuccess?.()
  },
  navigateBack(_params?: { steps?: number }) {
    window.history.go(-1)
  },
  previewMedia(_params?: unknown) {
    Toast.open({
      content: String(LocaleUtil.locale('此平台不支持', 'lyrixi_60a7978c99ee3bd2f538096ee46727ca'))
    })
  },
  previewFile(_params?: unknown) {
    Toast.open({
      content: String(LocaleUtil.locale('此平台不支持', 'lyrixi_60a7978c99ee3bd2f538096ee46727ca'))
    })
  },
  chooseMedia(_params?: unknown) {
    Toast.open({
      content: String(LocaleUtil.locale('此平台不支持', 'lyrixi_60a7978c99ee3bd2f538096ee46727ca'))
    })
  },
  uploadFile(_params?: unknown, _platform?: string) {
    Toast.open({
      content: String(LocaleUtil.locale('此平台不支持', 'lyrixi_60a7978c99ee3bd2f538096ee46727ca'))
    })
  },
  getBrowserLocation(params?: BridgeGetLocationParams) {
    Bridge.getLocation(params)
  },
  openLocation(params?: BridgeOpenLocationParams) {
    const { to, onSuccess, onError } = params || {}
    const latitude = to?.latitude
    const longitude = to?.longitude
    if (typeof latitude === 'number' && typeof longitude === 'number') {
      const label = encodeURIComponent(to?.name || to?.address || '')
      window.open(
        `https://uri.amap.com/marker?position=${longitude},${latitude}&name=${label}`,
        '_blank',
        'noopener,noreferrer'
      )
      onSuccess?.({ status: 'success', data: undefined })
      return
    }
    const message = `Browser ${LocaleUtil.locale(
      'openLocation需要有效坐标',
      'lyrixi_57e10c9e6a6193d42780515ec710a675'
    )}`
    Toast.open({ content: String(message) })
    onError?.({ status: 'error', message })
  },
  getLocation(params?: BridgeGetLocationParams) {
    const { type, onSuccess, onError } = params || {}
    if (Bridge.debug) {
      setTimeout(() => {
        const data: BridgeGetLocationResultData =
          type === 'gcj02'
            ? {
                type: type || 'wgs84',
                latitude: 39.909187,
                longitude: 116.397451,
                accuracy: 3
              }
            : {
                type: type || 'wgs84',
                latitude: 39.907783490367706,
                longitude: 116.39120737493609,
                accuracy: 3
              }
        onSuccess?.({
          status: 'success',
          code: '',
          message: '',
          data
        })
      }, 500)
      return
    }

    if (!navigator.geolocation) {
      onError?.({
        status: 'error',
        code: 'UNSUPPORTED',
        message: `Browser ${LocaleUtil.locale(
          '此环境不支持定位',
          'lyrixi_8f98030e133bc04925e94cb09b7a7774'
        )}`
      })
      return
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        let longitude = position.coords.longitude
        let latitude = position.coords.latitude
        if (typeof longitude !== 'number' || typeof latitude !== 'number') {
          onError?.({
            status: 'error',
            code: 'LATLNG_ERROR',
            message: `Browser ${LocaleUtil.locale(
              '定位失败',
              'lyrixi_9831baf6b76c1da7b69b463033b924cc'
            )}`
          })
          return
        }
        if (type === 'gcj02') {
          const points = GeoUtil.transformPoint({ longitude, latitude }, 'wgs84', 'gcj02')
          if (points) {
            longitude = points.longitude ?? longitude
            latitude = points.latitude ?? latitude
          }
        }
        onSuccess?.({
          status: 'success',
          code: '',
          message: '',
          data: {
            longitude,
            latitude,
            type: type || 'wgs84',
            accuracy: position.coords.accuracy ?? undefined
          }
        })
      },
      (error) => {
        let code = 'UNKNOWN'
        let message = `Browser ${LocaleUtil.locale(
          '定位失败',
          'lyrixi_9831baf6b76c1da7b69b463033b924cc'
        )}`
        switch (error.code) {
          case error.PERMISSION_DENIED:
            code = 'PERMISSION_DENIED'
            message = `Browser ${LocaleUtil.locale(
              '定位失败,用户拒绝请求地理定位',
              'lyrixi_f8cfa8427bee70b3f5759bcbce99b4b3'
            )}`
            break
          case error.POSITION_UNAVAILABLE:
            code = 'POSITION_UNAVAILABLE'
            message = `Browser ${LocaleUtil.locale(
              '定位失败,位置信息是不可用',
              'lyrixi_c9eb59bd4d16540b9f2295104060284f'
            )}`
            break
          case error.TIMEOUT:
            code = 'TIMEOUT'
            break
          default:
            break
        }
        onError?.({ status: 'error', code, message })
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    )
  }
}

export default Bridge
