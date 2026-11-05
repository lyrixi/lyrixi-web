# Storage Rules

> 源文档：`src/utils/Storage/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `Storage`，**禁止**自造同类工具函数。
- **禁止**直接使用 `window.localStorage` / `sessionStorage`（统一走 Storage，便于迁移 RN）。
- 类名拼接等 DOM 场景用 `DOMUtil.classNames`；日期用 `DateUtil`；请求用 `Request`；存储用 `Storage`。

## 核心 API
- `setItem` / `getItem` / `getItems(keyNameList?)` / `keys` / `removeItem` / `clear`（均为异步）
- `getItems`：传入 key 列表则按列表取；无参取全部
- `Storage.useStorage(initial, { name })`：state 与 Storage 同步，每次 set 都会更新 Storage

## Demo 索引（本目录 `demos/`）
- `demos/Storage.tsx` — setItem / getItem / getItems / keys / removeItem / clear
- `demos/useStorage.tsx` — useStorage 与 Storage 同步
- `demos/Storage.demos.types.ts` — demo 类型

## 查阅顺序
- API：`Storage-props.ts`
- 示例：`Storage-example.md`
