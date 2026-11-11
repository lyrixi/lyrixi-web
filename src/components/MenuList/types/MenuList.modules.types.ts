import Item from '../Item'
import MenuList from '../MenuList'

export type MenuListComponents = typeof MenuList & {
  Item: typeof Item
}
