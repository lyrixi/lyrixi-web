/**
 * list-common-manual — 手动加载列表（ListAsync + loadData）
 * 模板：List/demos/CommonManual/
 */
import type {
  ApiEndpointSpec,
  DynamicFormField,
  ListItemViewMapping,
  PageDesignSpec,
  PageOutputSpec
} from '../types/PageTemplate.types'

export interface ListCommonManualPageProps {
  templateId: 'list-common-manual'
  output: PageOutputSpec
  design: PageDesignSpec
  api: {
    /** → api/queryData/；Main loadData 回调内调用 */
    queryData: ApiEndpointSpec & {
      /** topRefresh / bottomRefresh 分页参数说明 */
      paginationMapping?: string
    }
  }
  header?: {
    filters?: DynamicFormField[]
  }
  main?: {
    /** → Main/ 列表项渲染、loadData 返回 ListLoadResult 映射 */
    listItem?: ListItemViewMapping
    mainLoadingRender?: string
  }
}
