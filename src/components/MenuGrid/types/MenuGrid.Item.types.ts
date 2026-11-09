import type { CSSProperties, MouseEvent, ReactNode } from 'react'

import type { RowColProps } from '../../Row/types'

export interface MenuGridItemProps {
  // Value & Display Value
  title?: ReactNode
  span?: RowColProps['span']
  // Status
  disabled?: boolean
  // Style
  style?: CSSProperties
  className?: string
  // Elements
  icon?: ReactNode
  badge?: ReactNode
  // Events
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

export interface MenuGridItemRef {
  element: HTMLDivElement | null
}
