/**
 * list-common — 普通列表（ListPagination 自动分页）
 * 模板：List/demos/Common/
 * create-page 问答 → page-spec.json → 按此替换模板动态内容
 */
import type {
  ApiEndpointSpec,
  DynamicFormField,
  ListItemViewMapping,
  PageDesignSpec,
  PageOutputSpec
} from '../types/PageTemplate.types'

export interface ListCommonPageProps {
  templateId: 'list-common'
  output: PageOutputSpec
  design: PageDesignSpec
  api: {
    /** → Main/index.tsx 的 url、formatPayload、formatResponse */
    queryData: ApiEndpointSpec & {
      payloadMapping?: string
      resultMapping?: string
    }
  }
  /** → index.tsx / Main cacheName */
  cacheName?: string
  /** → index.tsx useState 初始 queryParams */
  initialQueryParams?: Record<string, unknown>
  header?: {
    /** → Header/、Header/Filter/ 筛选项 */
    filters?: DynamicFormField[]
  }
  main?: {
    /** → Main/formatViewItem.tsx 字段映射 */
    listItem?: ListItemViewMapping
    /** → Main/index.tsx virtual */
    virtual?: boolean
  }
}
