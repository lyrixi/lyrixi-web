/**
 * Form Props / Ref（AI 文档，生成代码时以此为准）
 * @see src/components/Form/types/
 */

import type { CSSProperties, ReactNode } from 'react'

// ---------- Common ----------

export interface FieldData {
  name: string
  value: any
  errors: string[]
}

export interface FormInstance {
  getFieldValue(name: string): any
  getFieldsValue(): Record<string, any>
  /** 设置字段值；不会触发 `onFieldsChange` */
  setFieldsValue(values: Record<string, any>): void
  /** 不传 nameList 时校验全部已注册字段；失败时 Toast 展示第一条错误 */
  validateFields(nameList?: string[]): Promise<Record<string, any>>
  /** 滚动到指定字段 */
  scrollToField(name: string): void
}

/** 校验函数；失败时 Promise.reject(Error | string) */
export type FieldValidator = (value: any) => Promise<void>

export interface FormSpanConfig {
  span?: number | 'auto'
}

// ---------- Form ----------

export interface FormProps {
  /** 表单实例 */
  form?: FormInstance
  /** Label 列宽，默认 `{ span: 8 }` */
  label?: FormSpanConfig
  /** Field 列宽，默认 `{ span: 16 }` */
  content?: FormSpanConfig
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 表单内容 */
  children?: ReactNode
  /**
   * 字段变化事件。仅用户修改表单控件时触发；
   * `setFieldsValue` 不会触发。
   */
  onFieldsChange?: (changedFields: FieldData[], allFields: FieldData[]) => void
}

// ---------- Form.Item ----------

export interface FormItemProps {
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 内容（通常为 Form.Label + Form.Field） */
  children?: ReactNode
}

// ---------- Form.Label ----------

export interface FormLabelProps {
  /** 列宽，覆盖 Form 的 label.span；传 `'auto'` 时为 flex: 1 */
  span?: number | 'auto'
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 标签内容 */
  children?: ReactNode
}

// ---------- Form.Field ----------

export interface FormFieldProps {
  /** 字段名（仅 string，不支持路径数组） */
  name: string
  /** 表单控件或只读文本（元素时通过 cloneElement 注入受控属性） */
  children?: ReactNode
  /** 校验函数；仅在调用 validateFields 时执行 */
  validator?: FieldValidator
  /** 值属性名，默认 `'value'`；Switch/Checkbox 用 `'checked'` */
  valueName?: string
  /** 变更回调名，默认 `'onChange'` */
  changeName?: string
  /** 列宽，覆盖 Form 的 content.span；传 `'auto'` 时为 flex: 1 */
  span?: number | 'auto'
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
}

export interface FormRef {
  element: HTMLDivElement | null
  getFieldValue(name: string): unknown
  getFieldsValue(nameList?: string[]): Record<string, unknown>
  setFieldsValue(values: Record<string, unknown>): void
  validateFields(nameList?: string[]): Promise<Record<string, unknown>>
  /** 滚动到指定字段 */
  scrollToField(name: string): void
}
