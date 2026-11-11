import type { CSSProperties } from 'react'

import type { MenuListItem } from './MenuList.common.types'
import type { MenuListChangeOptions } from './MenuList.types'

export interface MenuListItemProps {
  // Value & Display Value
  item: MenuListItem
  expanded?: boolean
  selected?: boolean

  // Style
  style?: CSSProperties
  className?: string

  // Events
  onChange?: (item: MenuListItem, options: MenuListChangeOptions) => void
}
