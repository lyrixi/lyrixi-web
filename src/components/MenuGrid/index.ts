import _MenuGrid from './MenuGrid'
import MenuGridItem from './MenuGridItem'

import type { MenuGridComponents } from './types/MenuGrid.modules.types'

const MenuGrid = _MenuGrid as MenuGridComponents

MenuGrid.Item = MenuGridItem

export default MenuGrid
