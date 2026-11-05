/**
 * edit-common — 全量控件表单编辑（无缓存，Form 全字段 demo）
 * 模板：Edit/demos/Common/
 */
import type { ApiEndpointSpec, DynamicFormField, PageDesignSpec, PageOutputSpec } from '../types/PageTemplate.types'

export interface EditCommonPageProps {
  templateId: 'edit-common'
  output: PageOutputSpec
  design: PageDesignSpec
  api: {
    /** → api/queryData/；loadData 初始化 formData */
    queryData: ApiEndpointSpec & {
      /** URL 参数 id / copyId 来源说明 */
      idParam?: string
    }
    /** → api/saveData/；Footer onSave */
    saveData: ApiEndpointSpec
    /** → api/validateData/；提交前校验 */
    validateData?: ApiEndpointSpec
  }
  /** → index.tsx Form.Item 列表（增删字段时改此配置对应的视图） */
  formFields?: DynamicFormField[]
  footer?: {
    saveLabel?: string
  }
}
