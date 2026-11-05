# Logger Rules

> 源文档：`src/utils/Logger/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `Logger`，**禁止**自造同类工具函数。
- 类名拼接等 DOM 场景用 `DOMUtil.classNames`；日期用 `DateUtil`；请求用 `Request`；存储用 `Storage`。

## 何时使用
- 见 `src/utils/Logger/index.zh-CN.md` 说明与 demos。

## API 索引（节选）
- `Logger.setLogs`
- `Logger.getLogs`
- `Logger.clearLogs`

## Demo 索引（本目录 `demos/`）
- `demos/Logger.tsx`
- `demos/Logger.demos.types.ts`
- `demos/upload.ts`

## 查阅顺序
- API：`Logger-props.ts`
- 示例：`Logger-example.md`