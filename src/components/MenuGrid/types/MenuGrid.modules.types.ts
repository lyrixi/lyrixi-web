import MenuGrid from '../MenuGrid'
import MenuGridItem from '../MenuGridItem'

export type MenuGridComponents = typeof MenuGrid & {
  Item: typeof MenuGridItem
}
