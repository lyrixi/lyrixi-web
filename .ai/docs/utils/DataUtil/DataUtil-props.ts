/**
 * DataUtil API（AI 文档，生成代码时以此为准）
 */

export interface DataUtilDesensitizeParams {
  /** 脱敏起始下标（含） */
  start: number
  /** 脱敏结束下标（不含） */
  end: number
}

export namespace DataUtil {
  /** 深拷贝对象或数组 */
  export function cloneDeep(value: unknown): unknown

  /** 按 [start, end) 区间将字符串替换为 `*`，区间语义与 `String.slice` 一致。 例：DataUtil.desensitize('13812345678', { start: 3, end: 7 }) → '138****5678' */
  export function desensitize(value: string, params: DataUtilDesensitizeParams): string

  /** 按谓词从对象中挑选属性，返回新对象 */
  export function pickBy(object: object | null | undefined, predicate?: (value: unknown, key: string) => boolean): object

}
