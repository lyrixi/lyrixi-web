import type { ListAsyncVirtualProp } from 'lyrixi-web'

export type ListDemoFormatPayloadParams = {
  page?: number
} & Record<string, unknown>

export type ListDemoMainProps = {
  cacheName: string
  virtual?: ListAsyncVirtualProp
  queryParams: Record<string, unknown>
}
