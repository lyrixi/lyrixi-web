/**
 * Location Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties } from 'react'
import type { MapProviderConfig } from '../Map/Map-props'

export interface LocationValue {
  coordinates?: { latitude?: number; longitude?: number; type?: string }
  address?: string
  [key: string]: unknown
}

export interface LocationComboProps {
  /** 位置值 */
  value?: LocationValue | null
  /** 占位符 */
  placeholder?: string
  /** 坐标类型 */
  type?: string
  /** 获取地址函数 */
  getAddress?: ((...args: unknown[]) => unknown) | null
  /** 获取位置函数 */
  getLocation?: ((...args: unknown[]) => unknown) | null
  /** 缓存过期时间 */
  cacheDuration?: number
  /** 地图配置 */
  mapConfig?: MapProviderConfig
  /** 自动调整大小 */
  autoSize?: boolean
  /** 错误提示文本 */
  errorText?: string
  /** 加载提示文本 */
  loadingText?: string
  /** 允许清除 */
  allowClear?: boolean
  /** 是否禁用 */
  disabled?: boolean
  /** 是否可编辑 */
  editable?: boolean
  /** 自动定位 */
  autoLocation?: boolean
  /** 定位按钮可见 */
  locationVisible?: boolean
  /** 选择按钮可见 */
  chooseVisible?: boolean | { nearbyVisible?: boolean }
  /** 预览按钮可见 */
  previewVisible?: boolean
  /** 点击动作 */
  clickAction?: string
  /** 自定义类名 */
  className?: string
  /** 模态框类名 */
  modalClassName?: string
  /** 模态框样式 */
  modalStyle?: CSSProperties
  /** 挂载节点 */
  portal?: HTMLElement | null
  /** 变化事件 */
  onChange?: ((value: LocationValue | null) => void) | null
  /** 打开事件 */
  onOpen?: (() => void) | null
  /** 关闭事件 */
  onClose?: (() => void) | null
  /** 定位状态变化 */
  onLocationStatusChange?: ((status: string) => void) | null
  /** 错误事件 */
  onError?: ((error: { status: string; message: string }) => void) | null
}

export interface LocationComboRef {
  /** 根元素 */
  element: unknown
  /** 获取根元素 */
}

export interface LocationMainProps {
  /** 位置值 */
  value?: LocationValue | null
  /** 缓存过期时间 */
  cacheDuration?: number
  /** 显示类型 */
  open?: string
  /** 自动定位 */
  autoLocation?: boolean
  /** 附近地点可见 */
  nearbyVisible?: boolean
  /** 位置选择器 ID */
  id?: string
  /** 地图配置 */
  mapConfig?: MapProviderConfig
  /** 获取位置函数 */
  getLocation?: ((...args: unknown[]) => unknown) | null
  /** 获取地址函数 */
  getAddress?: ((...args: unknown[]) => unknown) | null
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 变化事件 */
  onChange?: (newValue: LocationValue | null) => void
  /** 确认事件 */
  onOk?: ((value: LocationValue | null) => void) | null
  /** 清除事件 */
  onClear?: (() => void) | null
}

export interface LocationModalProps {
  /** 位置值 */
  value?: LocationValue | null
  /** 缓存过期时间 */
  cacheDuration?: number
  /** 显示类型 */
  open?: string
  /** 点击遮罩关闭 */
  maskClosable?: boolean
  /** 是否安全区 */
  safeArea?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 是否多选 */
  multiple?: boolean
  /** 附近地点可见 */
  nearbyVisible?: boolean
  /** 模态框类名 */
  modalClassName?: string
  /** 模态框样式 */
  modalStyle?: CSSProperties
  /** 遮罩样式 */
  maskStyle?: CSSProperties
  /** 遮罩类名 */
  maskClassName?: string
  /** 地图配置 */
  mapConfig?: MapProviderConfig
  /** 获取地址函数 */
  getAddress?: ((...args: unknown[]) => unknown) | null
  /** 获取位置函数 */
  getLocation?: ((...args: unknown[]) => unknown) | null
  /** 挂载节点 */
  portal?: HTMLElement | null
  /** 确认事件 */
  onOk?: (value: LocationValue | null) => unknown
  /** 变化事件 */
  onChange?: (value: LocationValue | null) => void
  /** 关闭事件 */
  onClose?: () => void
}

export interface LocationMainPreviewProps {}

export interface LocationMainRef {
  mainElement: HTMLDivElement | null
  getMainElement: () => HTMLDivElement | null
}

export interface LocationModalRef {}
