import type { ComponentType, ReactNode, SVGProps } from 'react'

export type MenuListItemType = 'group'

export type MenuListChangeAction = 'collapse' | 'expand' | 'select'

export interface MenuListItem {
  id?: string
  name?: ReactNode
  type?: MenuListItemType
  iconSvg?: ComponentType<SVGProps<SVGSVGElement>>
  children?: MenuListItem[]
  disabled?: boolean
}
