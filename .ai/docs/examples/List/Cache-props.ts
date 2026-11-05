/**
 * list-cache — 带缓存的列表（Storage + Footer 存/清缓存）
 * 模板：List/demos/Cache/（复用 Common 的 Header/Main/Footer）
 */
import type { ApiEndpointSpec, PageDesignSpec, PageOutputSpec } from '../types/PageTemplate.types'
import type { ListCommonPageProps } from './Common-props'

export interface ListCachePageProps extends Pick<ListCommonPageProps, 'output' | 'design' | 'api' | 'header' | 'main'> {
  templateId: 'list-cache'
  /** → index.tsx cacheName，Storage 键前缀 */
  cacheName: string
  /** → Footer 按钮文案（LocaleUtil.locale） */
  footer?: {
    okLabel?: string
    cancelLabel?: string
  }
}

export type { ApiEndpointSpec, PageDesignSpec, PageOutputSpec }
