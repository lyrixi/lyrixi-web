/**
 * Storage API（AI 文档，生成代码时以此为准）
 *
 * 统一异步离线存储（LocalForage），便于后续迁移 RN。
 * 业务引入：`import { Storage } from 'lyrixi-web'`
 */

/** 读取单个 key，不存在返回 null */
export type StorageGetItem = (key: string) => Promise<unknown>

/** 写入单个 key */
export type StorageSetItem = (key: string, value: unknown) => Promise<unknown>

/**
 * 按 key 列表批量读取；无参或空数组则读取全部
 * @example await Storage.getItems(['a', 'b'])
 * @example await Storage.getItems()
 */
export type StorageGetItems = (
  keyNameList?: string[]
) => Promise<Record<string, unknown>>

/** 获取全部 key */
export type StorageKeys = () => Promise<string[]>

/** 删除单个 key */
export type StorageRemoveItem = (key: string) => Promise<void>

/** 清空全部 */
export type StorageClear = () => Promise<void>

/**
 * 与 Storage 同步的 state
 * @example
 * const [data, setData] = Storage.useStorage(null, { name: 'cache-key' })
 * // 每次 setData 都会写入 / 删除 Storage
 */
export type StorageUseStorage = <T>(
  value: T,
  options: { name: string }
) => readonly [T, (newValue: T) => void]
