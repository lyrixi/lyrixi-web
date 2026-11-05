/**
 * 典型页面示例公共类型（create-page 问答 → page-spec.json → 生成代码时替换示例动态内容）
 */

/** Q5：输出路径（必填；在接口与展示内容之后收集） */
export interface PageOutputSpec {
  /** 相对仓库根，如 `src/pages/OrderList` */
  outputPath: string
  /** PascalCase 入口组件名，与目录一致 */
  pageName: string
}

/** Q4：展示内容（图片设计稿 / MCP 设计稿 / 文字描述 + 字段映射） */
export interface PageDesignSpec {
  /** image=上传图；mcp=Figma 等链接；text=文字说明 */
  source?: 'image' | 'mcp' | 'text'
  hasHiFi?: boolean
  /** 布局、Header/Main/Footer、交互；可由图 / MCP / 文字整理 */
  designNotes?: string
  /**
   * 展示字段 ↔ 后台字段，如「标题 → data.name」
   * 有 mock 时后台 path 须与 sample 对齐
   */
  fieldMapping?: string
}

/** Q3：用 mock 描述接口出参（并推导 response 映射） */
export interface PageMockDataSpec {
  /** user=用户提供 sample；inferred=无 mock 时推测字段 */
  source: 'user' | 'inferred'
  /** 用户粘贴的成功响应示例（通常含 code/data/message 的完整 response） */
  sample?: unknown
}

/** 接口出参映射（缺省用 DEFAULT；mock 结构异常时在 Q3 追问） */
export interface ApiResponseMapping {
  /** 成功判定表达式，默认 `result.code === '1'` */
  success?: string
  /** 失败判定表达式，默认 `result.code !== '1'` */
  error?: string
  /** 业务数据取值表达式，默认 `result.data` */
  data?: string
  /** 错误文案取值表达式，默认 `result.message` */
  message?: string
}

export const DEFAULT_API_RESPONSE_MAPPING: ApiResponseMapping = {
  success: "result.code === '1'",
  error: "result.code !== '1'",
  data: 'result.data',
  message: 'result.message'
}

/** Q2：单个接口端点（地址与入参同轮；method / contentType 未说明时用默认） */
export interface ApiEndpointSpec {
  url: string
  /** 未说明时默认 POST */
  method: 'GET' | 'POST'
  /** 未说明时默认 application/json；写入 Request headers */
  contentType?: string
  /** 入参：字段名、类型、来源（URL 参数 / queryParams / Device.getUrlParameter） */
  request?: string
  /** 出参映射（Q3 由 mock 推导；缺省字段用 DEFAULT_API_RESPONSE_MAPPING） */
  response?: ApiResponseMapping
}

/** 表单/筛选项（Edit Form.Item、List Header/Filter） */
export interface DynamicFormField {
  /** Form.Item name / 查询参数字段名 */
  name: string
  /** 标签文案，生成时用 LocaleUtil.locale */
  label: string
  /** 控件：Input.Text | Select.Combo | DatePicker.Combo 等 */
  component?: string
  /** 校验 rules、initialValue 等补充说明 */
  extra?: string
}

/** 列表项展示映射 → Main/formatViewItem.tsx */
export interface ListItemViewMapping {
  idField?: string
  titleField?: string
  descriptionField?: string
  imageField?: string
  avatarField?: string
  noteField?: string
  contentField?: string
  actionNotes?: string
}
