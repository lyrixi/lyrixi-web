/**
 * DatePicker 共享类型（AI 文档）
 */

import type { ReactElement, ReactNode } from 'react'

export type DatePickerPickerType =
  | 'year'
  | 'quarter'
  | 'month'
  | 'date'
  | 'time'
  | 'datetime'
  | 'week'

/** 快捷区间：键为展示名，值为日期对或 0 表示“自定义”占位 */
export type DatePickerRangesMap = Record<string, [Date, Date] | 0 | unknown>

export interface DatePickerMultipleItem {
  id?: string | number
  name?: string
  description?: ReactNode
  value?: Date | null
  disabled?: boolean
  checked?: boolean
  className?: string
  style?: React.CSSProperties
  [key: string]: unknown
}

export type DatePickerMultipleValue = DatePickerMultipleItem[] | null

/** 区间 onChange 第二参（RangeCombo / RangeMain 等） */
export interface DatePickerRangeChangeMeta {
  rangeId?: string | null
  ranges?: DatePickerRangesMap
  displayValue?: string
}

export interface DatePickerPickerListItem {
  id: number
  name: number | string | ReactNode | ReactElement
}

export type DatePickerPickerValueList = DatePickerPickerListItem[]

export interface DatePickerGetTitleOptions {
  type?: DatePickerPickerType | string
  separator?: string
}
