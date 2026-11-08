import type { CSSProperties, MouseEvent, ReactNode } from 'react'

export interface RowColProps {
  // Value & Display Value
  id?: string
  span?: number
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  children?: ReactNode
  // Events
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

export interface RowColRef {
  element: HTMLDivElement | null
}
