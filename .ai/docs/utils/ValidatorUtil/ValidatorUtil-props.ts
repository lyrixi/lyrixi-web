/**
 * ValidatorUtil API（AI 文档，生成代码时以此为准）
 */

export interface IsMobilePhoneOptions {
  strictMode?: boolean
}

export namespace ValidatorUtil {
  /** 判断是否为邮箱格式 */
  export function isEmail(str: string): boolean

  /** 判断值是否为空（null / undefined / 空字符串 / 空数组 / 空对象 / 无效 Date） */
  export function isEmpty(value: unknown): boolean

  /** 深度比较两个值是否相等 */
  export function isEqual(a: unknown, b: unknown): boolean

  /** 见源码与 demos */
  export function isPhoneNumber(...args: unknown[]): unknown

  /** 判断是否为纯对象（{} 或 Object.create(null)），非 Date/Array 等 */
  export function isPlainObject(value: unknown): boolean

}
