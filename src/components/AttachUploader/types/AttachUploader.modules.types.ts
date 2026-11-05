import _AttachUploader from '../AttachUploader'

// 内库使用-start
import uploadList from '../utils/uploadList'
// 内库使用-end

export type AttachUploaderComponents = typeof _AttachUploader & {
  uploadList: typeof uploadList
}
