import type { MenuListItem } from '../types'

function hasSelectedDescendant(item: MenuListItem, selectedIds: string[]): boolean {
  if (!item.children?.length || !selectedIds.length) {
    return false
  }
  for (const child of item.children) {
    if (child.id !== undefined && selectedIds.includes(child.id)) {
      return true
    }
    if (hasSelectedDescendant(child, selectedIds)) {
      return true
    }
  }
  return false
}

function isSelected(item: MenuListItem, selectedIds: string[]): boolean {
  if (item.id !== undefined && selectedIds.includes(item.id)) {
    return true
  }
  return hasSelectedDescendant(item, selectedIds)
}

export default isSelected
