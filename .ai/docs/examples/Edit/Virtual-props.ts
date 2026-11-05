/**
 * edit-virtual — 虚拟滚动长表单编辑
 * 模板：Edit/demos/Virtual/（Form virtual + 复用 Cache api）
 */
import type { EditCommonPageProps } from './Common-props'

export interface EditVirtualPageProps extends EditCommonPageProps {
  templateId: 'edit-virtual'
  form?: {
    /** → index.tsx Form virtual */
    virtual: true
    scrollerElement?: string
  }
}
