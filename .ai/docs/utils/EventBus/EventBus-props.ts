/**
 * EventBus API（AI 文档，生成代码时以此为准）
 */

export type EventBusEventHandler = (...args: unknown[]) => unknown

export namespace EventBus {
  /** 订阅事件 */
  export function on(eventName: string, fn: EventBusEventHandler): void

  /** 触发事件，无监听者时返回 false */
  export function emit(eventName: string, ...args: unknown[]): boolean

  /** 取消指定回调 */
  export function off(eventName: string, fn: EventBusEventHandler): boolean

  /** 销毁指定事件；不传则清空全部 */
  export function destroy(eventName?: string): void

  /** 组件内订阅，卸载或 eventName 变更时自动 off */
  export function useOn(eventName: string, fn: EventBusEventHandler): void

  /** 返回稳定的 emit(eventName, ...args) */
  export function useEmit(): (eventName: string, ...args: unknown[]) => boolean
}
