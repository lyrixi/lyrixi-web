import type { CSSProperties } from 'react'

import type { MenuListChangeAction, MenuListItem } from './MenuList.common.types'

export interface MenuListChangeOptions {
  action: MenuListChangeAction
}

export interface MenuListProps {
  // Value & Display Value
  id?: string
  items?: MenuListItem[]
  defaultOpenIds?: string[]

  // Status
  animated?: boolean

  // Style
  style?: CSSProperties
  className?: string

  // Events
  onChange?: (item: MenuListItem, options: MenuListChangeOptions) => void
}

export interface MenuListRef {
  element: HTMLDivElement | null
}
