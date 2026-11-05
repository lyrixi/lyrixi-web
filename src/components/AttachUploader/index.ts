import _AttachUploader from './AttachUploader'

import type { AttachUploaderComponents } from './types/AttachUploader.modules.types'

// 内库使用-start
import uploadList from './utils/uploadList'
// 内库使用-end

const AttachUploader = _AttachUploader as AttachUploaderComponents

AttachUploader.uploadList = uploadList

export default AttachUploader
