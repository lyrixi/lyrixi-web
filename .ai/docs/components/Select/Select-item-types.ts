/**
 * Select 共享类型（AI 文档）
 */

/** Main / Modal / Combo 共用的列表项数据 */
export interface SelectItem {
  id?: string | number
  name?: string
  checked?: boolean
  className?: string
  style?: React.CSSProperties
  children?: SelectItem[]
  [key: string]: unknown
}
