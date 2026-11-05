import type { ToolBarFilterProps } from 'lyrixi-web'

export type { ToolBarFilterProps }

export type FilterHeaderProps = {
  queryParams?: Record<string, unknown>
  onSearch?: (p: Record<string, unknown>) => void
}

export type ToolBarFilterOkParams = {
  close: () => void
}
