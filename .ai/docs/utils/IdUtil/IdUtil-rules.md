# IdUtil Rules

> 源文档：`src/utils/IdUtil/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用

- 从 `lyrixi-web` 引入 `IdUtil`，**禁止**自造同类 UUID 生成函数。
- 需要客户端生成唯一 id 时用 `IdUtil.randomUUID`，不要再用已移除的 `ObjectUtil.randomUUID`。

## 何时使用

- 见 `src/utils/IdUtil/index.zh-CN.md` 说明与 demos。

## API 索引（节选）

- `IdUtil.randomUUID`

## Demo 索引（本目录 `demos/`）

- `demos/IdUtil.tsx`

## 查阅顺序

- API：`IdUtil-props.ts`
- 示例：`IdUtil-example.md`
