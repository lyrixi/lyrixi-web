import type { CSSProperties, ReactNode } from 'react'

import type { RowProps } from '../../Row/types'

export interface MenuGridProps {
  // Value & Display Value
  gap?: RowProps['gap']

  // Style
  style?: CSSProperties
  className?: string
  // Elements
  children?: ReactNode
}

export interface MenuGridRef {
  element: HTMLDivElement | null
}
