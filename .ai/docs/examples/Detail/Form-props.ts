/**
 * detail-form — 只读详情（Form 展示 + 审批 Footer）
 * 模板：Detail/demos/Form/
 */
import type { ApiEndpointSpec, DynamicFormField, PageDesignSpec, PageOutputSpec } from '../types/PageTemplate.types'

export interface DetailFormPageProps {
  templateId: 'detail-form'
  output: PageOutputSpec
  design: PageDesignSpec
  api: {
    /** → api/queryData/；loadData 只读数据 */
    queryData: ApiEndpointSpec & {
      idParam?: string
    }
    /** → api/approveData/；Footer 审批/提交 */
    approveData?: ApiEndpointSpec
  }
  /** → index.tsx 只读 Form.Item（无输入控件，Text 展示） */
  displayFields?: DynamicFormField[]
  footer?: {
    approveLabel?: string
  }
}
