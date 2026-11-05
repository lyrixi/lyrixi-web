# MathUtil Rules

> 源文档：`src/utils/MathUtil/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `MathUtil`，**禁止**自造同类工具函数。
- 类名拼接等 DOM 场景用 `DOMUtil.classNames`；日期用 `DateUtil`；请求用 `Request`；存储用 `Storage`。

## 何时使用
- 见 `src/utils/MathUtil/index.zh-CN.md` 说明与 demos。

## API 索引（节选）
- `MathUtil.isNumber`
- `MathUtil.extractNumber`
- `MathUtil.antiThousands`

## Demo 索引（本目录 `demos/`）
- `demos/MathUtil.tsx`

## 查阅顺序
- API：`MathUtil-props.ts`
- 示例：`MathUtil-example.md`