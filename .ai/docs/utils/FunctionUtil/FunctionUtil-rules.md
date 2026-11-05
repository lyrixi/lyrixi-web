# FunctionUtil Rules

> 源文档：`src/utils/FunctionUtil/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用

- 从 `lyrixi-web` 引入 `FunctionUtil`，**禁止**自造同类防抖 / 节流函数。
- 搜索输入等需要延迟执行的回调用 `FunctionUtil.debounce`，不要再用已移除的 `ObjectUtil.debounce`。
- 滚动、拖拽、窗口 resize 等高频事件用 `FunctionUtil.throttle` 限制触发频率。

## 何时使用

- 见 `src/utils/FunctionUtil/index.zh-CN.md` 说明与 demos。

## API 索引（节选）

- `FunctionUtil.debounce`
- `FunctionUtil.throttle`

## Demo 索引（本目录 `demos/`）

- `demos/FunctionUtil.tsx`

## 查阅顺序

- API：`FunctionUtil-props.ts`
- 示例：`FunctionUtil-example.md`
