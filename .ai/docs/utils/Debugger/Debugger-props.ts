/**
 * Debugger API（AI 文档，生成代码时以此为准）
 */

export namespace Debugger {
  /** 显示 vconsole */
  export function open(): Promise<boolean>
  /** 隐藏 vconsole */
  export function close(): void
  /** 判断是否处于 debug 模式 */
  export function exists(): boolean
}
