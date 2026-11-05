/**
 * LocaleUtil API（AI 文档，生成代码时以此为准）
 */

import type { ReactNode } from 'react'

/** LocaleUtil.loadLocale 返回值 */
export type LocaleUtilLoadLocaleResult = {
  status: string
  message: string
  data?: Record<string, string>
}

export namespace LocaleUtil {
  /** 添加自定义获取当前语言的函数；返回语言码（如 `zh_CN`），无法识别时返回 null/undefined 则回退默认逻辑 */
  export function addLanguage(getCustomLanguage: () => string | null | undefined): void

  /** 获取当前语言（先走 addLanguage 注册的自定义逻辑，再走默认探测） */
  export function getLanguage(): string

  /** 获取语言映射表；传 language 则返回该语言项，否则返回整表 */
  export function getLanguageMap(language?: string): unknown

  /** 加载国际化：可选同步 dayjs locale，再动态加载 `assets/locale/{language}.ts` 写入 window.lyrixiLocaleData */
  export function loadLocale(language: string, options?: { dayjs?: boolean }): Promise<LocaleUtilLoadLocaleResult>

  /** 取文案：按 key 读 window.lyrixiLocaleData，支持 `{0}` 变量；无翻译时回退 remark */
  export function locale(remark: string | number | ReactNode, key?: string, variables?: unknown): string | ReactNode

  /** 直接写入 window.lyrixiLocaleLanguage / window.lyrixiLocaleData */
  export function setLocale(language: string, data: unknown): Promise<void>

}
