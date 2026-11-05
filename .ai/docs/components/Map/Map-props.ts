/**
 * Map Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

// --- Common types ---

export interface MapPoint {
  id?: string | number
  latitude?: number
  longitude?: number
  type?: string
  address?: string
  name?: string
  accuracy?: number
  markerIcon?: MapMarkerIcon | null
  [key: string]: unknown
}

export interface MapMarkerIcon {
  // 显示文字
  text?: string
  // 背景图片
  backgroundImage?: string
  // 背景颜色
  backgroundColor?: string
  // 宽度
  width: number
  // 高度
  height: number
  // 边框颜色
  borderColor?: string
  // 边框宽度（px）
  borderWidth?: number
  // 圆角（px）
  borderRadius?: number
  // 阴影颜色
  shadowColor?: string
  // 阴影透明度
  shadowOpacity?: number
  // 阴影偏移
  shadowOffset?: {
    width?: number
    height?: number
  }
  // 阴影模糊半径（px）
  shadowRadius?: number
  // 字体大小
  fontSize?: number
  // 字体颜色，默认黑色
  color?: string
  // 字体粗细
  fontWeight?: number
}

export interface MapContainerAPI {
  element: HTMLDivElement | null
  panTo: (coords: MapPoint | MapPoint[]) => void
  getCenter: () => { latitude: number; longitude: number; type?: string }
  zoomIn: () => Promise<number | null>
  zoomOut: () => Promise<number | null>
  getZoom: () => number | null
  setZoom: (zoom: number) => unknown
}

export type MapChangeAction = 'pan' | 'zoom'

export type MapChangeActionType = 'gesture' | 'programmatic'

export type MapChangeEvent = Readonly<{
  actions: MapChangeAction[]
  actionType: MapChangeActionType
  latitude: number
  longitude: number
  type: 'wgs84'
  zoom: number
}>

export interface MarkerIcons {
  centerMarkerIcon: MapMarkerIcon
  markerIcon: MapMarkerIcon
}

export type MapMarkerCheckHandler = (point: MapPoint) => void

// --- Map.MapLoader ---

export interface MapLoaderProps {
  config?: {
    key?: string
    type?: string
    leaflet?: { css?: string; js?: string }
    [key: string]: unknown
  }
  getAddress?: ((...args: unknown[]) => unknown) | null
  getLocation?: ((...args: unknown[]) => unknown) | null
  openLocation?: ((...args: unknown[]) => unknown) | null
  queryNearby?: ((...args: unknown[]) => unknown) | null
  loadingRender?: (() => ReactNode) | null
  children?: ReactNode
  onError?:
    | ((result: {
        status: string
        message?: string | ReactNode
        data?: unknown
        reload?: () => void
        [key: string]: unknown
      }) =>
        | Promise<
            { status: string; message?: string | ReactNode; [key: string]: unknown } | undefined
          >
        | { status: string; message?: string | ReactNode; [key: string]: unknown }
        | undefined
        | void)
    | null
  onSuccess?: ((result: MapLoaderSuccessResult) => void) | null
}

export interface MapLoaderRef {
  reload: () => void
}

// --- Map.MapContainer ---

export interface MapContainerProps {
  /** 地图中心点 */
  center?: MapPoint | MapPoint[]
  /** 缩放级别 */
  zoom?: number
  /** 最小缩放级别 */
  minZoom?: number
  /** 最大缩放级别 */
  maxZoom?: number
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 地图内容 */
  children?: ReactNode
  /** 加载完成事件 */
  onLoad?: (result: {
    status: string
    code?: string
    message?: string
    data?: { map: MapContainerAPI }
  }) => void
  /** 视图变化结束 */
  onMapChange?: (event: MapChangeEvent) => void
}

// --- Map.MapMarkersPage ---

export interface MapMarkersPageProps {
  /** 标记点列表 */
  markers?: unknown
  /** 最小缩放级别 */
  minZoom?: number
  /** 最大缩放级别 */
  maxZoom?: number
  /** 折线数据 */
  polyline?: unknown
  /** 圆形数据 */
  circles?: unknown
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 折线样式 */
  polylineStyle?: CSSProperties
  /** 折线类名 */
  polylineClassName?: string
  /** 圆形样式 */
  circlesStyle?: CSSProperties
  /** 圆形类名 */
  circlesClassName?: string
  /** 缩放控件样式 */
  zoomControlStyle?: CSSProperties
  /** 缩放控件类名 */
  zoomControlClassName?: string
  /** 页面内容 */
  children?: ReactNode
  /** 加载完成事件 */
  onLoad?: (result: {
    status: string
    code?: string
    message?: string
    data?: { map: MapContainerAPI }
  }) => void
  /** 标记点击事件 */
  onMarkerCheck?: MapMarkerCheckHandler
  /** 视图变化结束 */
  onMapChange?: (event: MapChangeEvent) => void
}

// --- Map refs ---

export interface MapContainerRef extends MapContainerAPI {}

export type MapChoosePageRef = MapContainerAPI

export interface MapCirclesRef {
  redraw: () => void
}

export interface MapCirclesProps {
  points?: unknown
  color?: string
  radius?: number
  map?: MapContainerAPI
}

export interface MapLocationControlProps {
  map?: MapContainerAPI

  style?: CSSProperties
  className?: string

  onChange?: (result: unknown) => void
}

export interface MapLocationControlRef {
  element: HTMLDivElement | null
  update: () => Promise<unknown>
}

export interface MapChoosePageProps {
  value?: MapChooseValue
  center?: MapContainerProps['center']
  zoom?: number
  minZoom?: number
  maxZoom?: number
  autoLocation?: boolean

  readOnly?: boolean
  nearbyVisible?: boolean

  style?: CSSProperties
  className?: string
  searchControlStyle?: CSSProperties
  searchControlClassName?: string
  markersStyle?: CSSProperties
  markersClassName?: string
  zoomControlStyle?: CSSProperties
  zoomControlClassName?: string
  locationControlStyle?: CSSProperties
  locationControlClassName?: string
  nearbyControlStyle?: CSSProperties
  nearbyControlClassName?: string

  children?: ReactNode

  onLoad?: MapContainerProps['onLoad']
  onChange?: (value: WgsMapPoint | (WgsMapPoint | null)[] | null) => void
  onMarkerCheck?: MapMarkerCheckHandler
  onMapChange?: MapContainerProps['onMapChange']
}

export interface MapMarkersProps {
  id?: string
  points?: unknown

  style?: CSSProperties
  className?: string

  onCheck?: MapMarkerCheckHandler
}

export interface MapMarkersRef {}

export interface MapNearbyControlCurrentProps {
  value?: MapValue
  map?: MapContainerAPI

  readOnly?: boolean

  onChange?: (item: unknown) => void
}

export interface MapNearbyControlProps {
  value?: MapValue
  radius?: number
  map?: MapContainerAPI

  readOnly?: boolean
  nearbyVisible?: boolean

  onChange?: (item: unknown) => void
  onSuccess?: (result: unknown) => void
  onError?: (result: unknown) => void
}

export interface MapNearbyControlRef {
  element: HTMLDivElement | null
  reload: () => void
}

export interface MapPolygonRef {
  redraw: () => void
}

export interface MapPolygonProps {
  points?: unknown
  color?: string
  fillColor?: string
  fillOpacity?: number
  weight?: number
  map?: MapContainerAPI
}

export interface MapPolylineRef {
  redraw: () => void
}

export interface MapPolylineProps {
  points?: unknown
  color?: string
  map?: MapContainerAPI
}

export interface MapSearchControlProps {
  map?: MapContainerAPI

  style?: CSSProperties
  className?: string

  onChange?: (item: unknown) => void
}

export type MapSearchBarForwardedProps = {
  readOnly?: boolean
  className?: string
  style?: CSSProperties
  onClick?: () => void
}

export interface MapZoomControlProps {
  id?: string

  style?: CSSProperties
  className?: string

  onZoomIn?: (zoom: number | null) => void
  onZoomOut?: (zoom: number | null) => void
}

export interface MapZoomControlRef {
  element: HTMLDivElement | null
}

export interface MapLoaderSourceConfig {
  key?: string
  type?: string
  leaflet?: { css?: string; js?: string }
  [key: string]: unknown
}

export type MapMarkersPageRef =
  | (MapContainerAPI & {
      markersRef: MutableRefObject<MapMarkersRef | null>
      polylineRef: MutableRefObject<MapPolylineRef | null>
      circlesRef: MutableRefObject<MapCirclesRef | null>
      zoomRef: MutableRefObject<MapZoomControlRef | null>
    })
  | null

export type MapNearbyTabItem = ReturnType<typeof getTabs>[number]

export interface MapContainerLoadResult {
  status: string
  code?: string
  message?: string
  data?: { map: MapContainerAPI }
}

export interface MapLoaderSuccessResult {
  status: 'success'
  code?: string
  message?: string
}

export interface MapLoadSourceResult {
  status: 'success' | 'error'
  code?: string
  message?: string | ReactNode
  data?: unknown
}

export type MapType = 'google' | 'bmap' | 'amap'

export type MapKey = {
  android?: string
  ios?: string
  web?: string
}

export interface MapProviderConfig {
  bmapKeys?: MapKey
  googleKeys?: MapKey
  amapKeys?: MapKey
  type?: MapType
  leaflet?: { css?: string; js?: string }
  markerIcons?: Partial<import('../constants/markerIcons.types').MarkerIcons>
  center?: unknown
  [key: string]: unknown
}

export interface MapProviderSuccessResult {
  status: 'success'
  code?: string
  message?: string
}

export interface MapProviderProps {
  id?: string
  config?: MapProviderConfig
  cacheDuration?: number
  getAddress?: ((...args: unknown[]) => unknown) | null
  getLocation?: ((...args: unknown[]) => unknown) | null
  openLocation?: ((...args: unknown[]) => unknown) | null
  queryNearby?: ((...args: unknown[]) => unknown) | null
  loadingRender?: (() => ReactNode) | null
  children?: ReactNode
  onError?:
    | ((
        result: MapLoadSourceResult & { reload?: () => void }
      ) => Promise<MapLoadSourceResult | undefined> | MapLoadSourceResult | undefined | void)
    | null
  onSuccess?: ((result: MapProviderSuccessResult) => void) | null
}

export interface MapProviderRef {
  reload: () => void
}

export type MapSearchControlRef = InputTextRef

export interface MapSearchControlProps {
  id?: string
  map?: MapContainerAPI

  style?: CSSProperties
  className?: string

  onChange?: (item: unknown) => void
}
