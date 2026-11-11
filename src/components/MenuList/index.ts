import _MenuList from './MenuList'
import Item from './Item'

import type { MenuListComponents } from './types/MenuList.modules.types'

const MenuList = _MenuList as MenuListComponents

MenuList.Item = Item

export default MenuList
