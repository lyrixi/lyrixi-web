/**
 * Cascader 共享类型（AI 文档）
 */

/** Main / Modal / Combo 共用的级联项数据 */
export interface CascaderItem {
  id: string | number
  name?: string
  anchor?: string
  isLeaf?: boolean
  isChoose?: boolean
  parentid?: string | number | null
  children?: CascaderItem[]
  checked?: boolean
  className?: string
  style?: React.CSSProperties
  [key: string]: unknown
}

export type LoadDataResult = {
  status: string
  code?: string
  message?: string
  data?: {
    list?: CascaderItem[]
    async?: boolean
  }
}

export type LoadDataFn = (
  tabs: CascaderItem[],
  ctx: { list: CascaderItem[] }
) => Promise<LoadDataResult>
