import { LocaleUtil, Toast } from 'lyrixi-web'

import scrollToErrorElement from './scrollToErrorElement'

const locale = LocaleUtil.locale

// 聚集错误文本框
function validateData(opts: { form?: unknown }) {
  const { form } = opts
  const f = form as {
    validateFields: () => Promise<unknown>
    getFieldsValue: () => unknown
    scrollToField?: (name: unknown) => void
  }
  return new Promise((resolve) => {
    if (f) {
      f.validateFields()
        .then(() => {
          resolve(f.getFieldsValue())
        })
        .catch((err: unknown) => {
          const e = err as {
            errorFields?: Array<{ name?: unknown; errors?: string[] }>
          }
          // 定位到错误的位置
          let fieldName = e?.errorFields?.[0]?.name
          if (fieldName && f?.scrollToField) {
            f.scrollToField(fieldName)
          } else {
            setTimeout(() => {
              scrollToErrorElement()
            }, 100)
          }

          // 错误消息
          const errMsg = e.errorFields?.[0]?.errors?.[0] ?? String(locale('此项错误'))
          Toast.open({ content: String(errMsg) })
          resolve(false)
        })
      return
    }
    setTimeout(() => {
      let errMsg = scrollToErrorElement()
      Toast.open({ content: String(errMsg) })
      resolve(false)
    }, 100)
  })
}

export default validateData
