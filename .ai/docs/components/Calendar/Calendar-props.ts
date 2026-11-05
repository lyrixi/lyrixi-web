/**
 * Calendar Props / Ref（AI 文档，生成代码时以此为准）
 */

export interface CalendarProps {
  /** 是否显示 */
  open?: boolean
  /** 选中的值 */
  value?: Date | Date[]
  /** 选择模式 */
  selectionMode?: 'single' | 'multiple' | 'range'
  /** 日历类型，默认 `'month'` */
  type?: 'week' | 'month'
  /** 周起始日，默认 `'Monday'` */
  weekStart?: 'Monday' | 'Sunday'
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 最小日期 */
  min?: Date
  /** 最大日期 */
  max?: Date
  /** 允许清除，默认 `true` */
  allowClear?: boolean
  /** 是否可拖动，默认 `['horizontal', 'vertical']` */
  draggable?: boolean | Array<'horizontal' | 'vertical'>
  /** 标题渲染 */
  titleRender?: () => ReactNode
  /** 头部渲染 */
  headerRender?: () => ReactNode
  /** 日期渲染 */
  dateRender?: (date: Date, props: object) => ReactNode
  /** 变化事件 */
  onChange?: (value: Date | Date[]) => void
  /** 页面变化事件 */
  onPageChange?: (date: Date) => void
  /** 错误事件 */
  onError?: (error: Error) => void
}

export interface CalendarHeaderProps {
  /** 自定义样式 */
  style?: object
  /** 自定义类名 */
  className?: string
  /** 头部内容 */
  children?: ReactNode
  /** 上一月 */
  onPreviousMonth?: (e?: MouseEvent) => void
  /** 下一月 */
  onNextMonth?: (e?: MouseEvent) => void
  /** 上一年 */
  onPreviousYear?: (e?: MouseEvent) => void
  /** 下一年 */
  onNextYear?: (e?: MouseEvent) => void
}

export interface CalendarRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
  /** 收起 */
  slideCollapse?: () => Promise<void>
  /** 展开 */
  slideExpand?: () => Promise<void>
  /** 上一页 */
  slidePrevious?: () => Promise<void>
  /** 下一页 */
  slideNext?: () => Promise<void>
}

export interface CalendarHeaderRef {
  /** 根元素 */
  element?: HTMLDivElement
  /** 获取根元素 */
}

export interface CalendarBodyProps {
  /** 是否显示 */
  open?: boolean
  /** 选中的值 */
  value?: Date | Date[] | null
  /** 选择模式 */
  selectionMode?: 'single' | 'multiple' | 'range'
  /** 日历页数据 */
  pages?: unknown[] | null
  /** 单元格高度 */
  cellHeight: number
  /** 最小日期 */
  min?: Date
  /** 最大日期 */
  max?: Date
  /** 是否可拖动 */
  draggable?: Array<'horizontal' | 'vertical'>
  /** 允许清除 */
  allowClear?: boolean
  /** 日期渲染 */
  dateRender?: CalendarProps['dateRender']
  /** 变化事件 */
  onChange?: (date: Date, ctx: { action: 'select' | 'clear' }) => void
  /** 横向滑动 */
  onSlideX?: (action: 'previous' | 'next' | '') => void | Promise<void>
  /** 纵向滑动 */
  onSlideY?: (action: 'expand' | 'collapse' | '') => void | Promise<void>
  /** 展开/收起切换 */
  onToggle?: (e: MouseEvent) => void
}

export interface CalendarBodyRef {
  /** 根元素 */
  element: HTMLDivElement | null
  /** 获取根元素 */
}

/** Calendar.isDisabledDate 静态方法 */
export type CalendarIsDisabledDate = (date: Date, options?: { min?: Date; max?: Date }) => boolean

export interface CalendarHeaderRenderParams {
  drawDate: Date | null
  onPreviousMonth: (e?: React.MouseEvent) => void | Promise<void>
  onNextMonth: (e?: React.MouseEvent) => void | Promise<void>
  onPreviousYear: (e?: React.MouseEvent) => void
  onNextYear: (e?: React.MouseEvent) => void
  /** Formatted title for convenience (same as default header). */
  title?: string
}
