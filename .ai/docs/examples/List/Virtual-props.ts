/**
 * list-virtual — 虚拟滚动列表
 * 模板：List/demos/Virtual/（复用 Common Header/Main，Main.virtual=true）
 */
import type { ListCommonPageProps } from './Common-props'

export interface ListVirtualPageProps extends ListCommonPageProps {
  templateId: 'list-virtual'
  main: ListCommonPageProps['main'] & {
    /** → Main virtual；Virtual/index.tsx itemHeight 等 */
    virtual: true
    itemHeight?: number | string
  }
}
