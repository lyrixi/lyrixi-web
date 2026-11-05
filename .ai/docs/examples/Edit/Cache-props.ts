/**
 * edit-cache — 带 Storage 缓存的表单编辑
 * 模板：Edit/demos/Cache/
 */
import type { EditCommonPageProps } from './Common-props'

export interface EditCachePageProps extends EditCommonPageProps {
  templateId: 'edit-cache'
  /** → api/cacheConfig.ts name；Storage 键前缀 */
  cacheConfig: {
    name: string
  }
  /** 新增无 id 时从 Storage 恢复 formData */
  cacheRestore?: boolean
}
