import type { CSSProperties, ReactNode } from 'react'

export interface RowGap {
  /** 换行后行与行之间的间距（px） */
  row?: number
  /** 同一行相邻列之间的间距（px） */
  column?: number
}

export interface RowProps {
  // Value & Display Value
  id?: string
  gap?: RowGap

  // Style
  style?: CSSProperties
  className?: string
  // Elements
  children?: ReactNode
}

export interface RowRef {
  element: HTMLDivElement | null
}
