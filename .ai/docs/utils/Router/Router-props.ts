/**
 * Router API（AI 文档，生成代码时以此为准）
 */

/** 路由动作：前进 / 替换 / 返回 */
export type RouterAction = 'push' | 'replace' | 'back'

/** 路由参数 */
export type RouterParams = Record<string, unknown>

export type RouterPushHandler = (name: string, params?: RouterParams) => unknown

export type RouterReplaceHandler = (name: string, params?: RouterParams) => unknown

export type RouterBackHandler = () => unknown

export type RouterGetActionHandler = () => RouterAction | null | undefined

/** Router.config 注入的导航实现 */
export interface RouterConfigParams {
  push?: RouterPushHandler
  replace?: RouterReplaceHandler
  back?: RouterBackHandler
  getAction?: RouterGetActionHandler
}

export namespace Router {
  /** 返回上一页 */
  export function back(): unknown

  /** 注入底层导航实现（如 react-router / 业务路由） */
  export function config(params?: RouterConfigParams): void

  /** 获取最近一次路由动作 优先使用 config 注入的 getAction；否则返回 Router 自身记录的动作 */
  export function getAction(): RouterAction | undefined

  /** 前进到指定路由 */
  export function push(name: string, params?: RouterParams): unknown

  /** 替换当前路由 */
  export function replace(name: string, params?: RouterParams): unknown

}
