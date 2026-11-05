/**
 * Transfer Props / Ref（AI 文档，生成代码时以此为准）
 */

import type { CSSProperties, ReactNode } from 'react'

export interface TransferItem {
  /** 唯一标识 */
  id: string | number
  /** 名称 */
  name?: ReactNode
  /** 任意透传字段 */
  [key: string]: unknown
}

export interface TransferTitles {
  /** 待选区标题 */
  source?: ReactNode
  /** 已选区标题 */
  target?: ReactNode
}

// ===== Main =====

export interface TransferMainProps {
  /** 选中的值 */
  value: TransferItem[]
  /** 选项列表 */
  list: TransferItem[]
  /** 标题（待选区/已选区） */
  titles?: TransferTitles
  /** 是否展开 */
  open?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 变化事件 */
  onChange?: (value: TransferItem[]) => void
}

// ===== Modal =====

export interface TransferModalProps {
  /** 选中的值 */
  value?: TransferItem[]
  /** 选项列表 */
  list?: TransferItem[]
  /** 标题 */
  titles?: TransferTitles
  /** 是否展开 */
  open?: boolean
  /** 点击遮罩关闭 */
  maskClosable?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 安全区 */
  safeArea?: boolean
  /** 模态框样式 */
  modalStyle?: CSSProperties
  /** 模态框类名 */
  modalClassName?: string
  /** 遮罩样式 */
  maskStyle?: CSSProperties
  /** 遮罩类名 */
  maskClassName?: string
  /** 挂载节点 */
  portal?: HTMLElement | false | null
  /** 标题内容 */
  title?: ReactNode
  /** 确认按钮文本/节点 */
  ok?: ReactNode
  /** 取消按钮文本/节点 */
  cancel?: ReactNode
  /** 确认按钮可见 */
  okVisible?: boolean
  /** 取消按钮可见 */
  cancelVisible?: boolean
  /** 关闭事件 */
  onClose?: () => void
  /** 确认事件 */
  onOk?: (value: TransferItem[]) => boolean | void | Promise<boolean | void>
  /** 变化事件 */
  onChange?: (value: TransferItem[]) => void
}

// ===== Combo =====

export interface TransferComboProps extends TransferModalProps {
  /** Input 展示层属性 */
  /** 元素 ID */
  id?: string
  /** 类型 */
  type?: string
  /** 占位符 */
  placeholder?: string
  /** 名称 */
  name?: string
  /** Input 尺寸 */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl'
  /** 只读 */
  readOnly?: boolean
  /** 禁用 */
  disabled?: boolean
  /** 允许清除 */
  allowClear?: boolean
  /** 光标显示 */
  cursor?: boolean | null
  /** 格式化为展示文本 */
  formatter?: (value: InputSelectValue, options?: { separator?: string }) => string
  /** 自动焦点 */
  autoFocus?: boolean
  /** 自动选择 */
  autoSelect?: boolean
  /** 启用 composition 结束 */
  compositionEndEnabled?: boolean
  /** 自动尺寸 */
  autoSize?: boolean
  /** 分隔符 */
  separator?: string
  /** 模式 */
  mode?: string
  /** 数字精度 */
  precision?: number
  /** 最大数值 */
  max?: number
  /** 最小数值 */
  min?: number
  /** 最大长度 */
  maxLength?: number
  /** 是否去除首尾空格 */
  trim?: boolean
  /** 输入模式 */
  inputMode?: string
  /** 回车键提示 */
  enterKeyHint?: string
  /** 自动补全 */
  autoComplete?: string
  /** 自动纠错 */
  autoCorrect?: string
  /** 拼写检查 */
  spellCheck?: boolean | 'true' | 'false'
  /** 步长 */
  step?: number
  /** 左侧图标渲染 */
  leftIconRender?: () => ReactNode
  /** 左侧 SVG 图标 */
  leftIconSvg?: any
  /** 右侧图标渲染 */
  rightIconRender?: () => ReactNode
  /** 右侧 SVG 图标 */
  rightIconSvg?: any
  /** 清除按钮渲染 */
  clearRender?: (params: {
    clearable: boolean
    allowClear?: boolean
    onClear: (e?: any) => void
    onTouchStart?: (e?: any) => void
  }) => ReactNode | undefined
  /** Input 渲染 */
  inputRender?: (params: Record<string, unknown>) => ReactNode
  /** 图标渲染 */
  iconRender?: (params: { className: string; style?: CSSProperties }) => ReactNode
  /** 自定义样式 */
  style?: CSSProperties
  /** 自定义类名 */
  className?: string
  /** 预览事件 */
  onPreview?: (value: string) => Promise<boolean | undefined> | boolean | undefined
  /** 搜索事件 */
  onSearch?: (value: string) => void
  /** 添加事件 */
  onAdd?: (e: any) => void
  /** 编辑事件 */
  onEdit?: (item: ListItem) => void
  /** 中间点击事件 */
  onClick?: (e: any) => void
  /** 失去焦点 */
  onBlur?: (e: any) => void
  /** 获得焦点 */
  onFocus?: (e: any) => void
  /** 按键事件 */
  onKeyDown?: (e: any) => void
  /** 回车事件 */
  onPressEnter?: (e: any) => void
  /** Combo 专属：变化事件 */
  onChange?: (value: TransferItem[]) => void
  /** Combo 专属：打开前事件 */
  onBeforeOpen?: () => boolean | void | Promise<boolean | void>
}

// ===== 辅助类型 =====

export type InputSelectValue =
  | number
  | string
  | null
  | Date
  | (Date | null | string | number)[]
  | ListItem
  | ListItem[]

/** 全库列表/选择类组件共用的列表项结构（源：List 的 ListItem） */
export type ListItem = {
  id?: string | number
  name?: string
  checked?: boolean
  className?: string
  style?: CSSProperties
  readOnly?: boolean
  disabled?: boolean
  allowClear?: boolean
  type?: 'group' | string
  virtualData?: { type?: string; top?: number; height?: number; index?: number }
  [key: string]: unknown
}

export interface TransferRef {
  /** 主元素 */
  mainElement?: HTMLDivElement
  /** 获取主元素 */
  getMainElement?: () => HTMLDivElement
}

export interface TransferItemProps {
  sortable?: boolean

  children?: ReactNode

  onAdd?: () => void
  onDelete?: () => void
}

export interface TransferMainProps {
  value: TransferItem[]
  list: TransferItem[]
  titles?: TransferTitles

  open?: boolean
  allowClear?: boolean

  className?: string
  style?: CSSProperties

  onChange?: (value: TransferItem[]) => void
}

export type TransferComboRef = InputSelectRef &
  TransferModalRef & {
    close: () => void
    open: () => void
  }

export interface TransferMainRef {
  mainElement: HTMLDivElement | null
  getMainElement: () => HTMLDivElement | null
}

export interface TransferModalRef {}
