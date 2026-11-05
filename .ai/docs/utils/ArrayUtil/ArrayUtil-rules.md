# ArrayUtil Rules

> 源文档：`src/utils/ArrayUtil/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `ArrayUtil`，**禁止**自造同类工具函数。
- 类名拼接等 DOM 场景用 `DOMUtil.classNames`；日期用 `DateUtil`；请求用 `Request`；存储用 `Storage`。

## 何时使用
- 见 `src/utils/ArrayUtil/index.zh-CN.md` 说明与 demos。

## API 索引（节选）
- `ArrayUtil.deepTree`
- `ArrayUtil.getDeepTreeNode`
- `ArrayUtil.getDeepTreeNodes`
- `ArrayUtil.getDeepTreePredecessorNodes`
- `ArrayUtil.getDeepTreeLeafNodes`
- `ArrayUtil.setDeepTreeLeafNode`
- `ArrayUtil.setDeepTreeNode`
- `ArrayUtil.setDeepTreeNodes`
- `ArrayUtil.updateDeepTreeParentId`
- `ArrayUtil.flattenTree`
- `ArrayUtil.getFlatTreeNode`
- `ArrayUtil.getFlatTreeNodes`
- `ArrayUtil.getFlatTreePredecessorNodes`
- `ArrayUtil.getFlatTreeDescendantNodes`

## Demo 索引（本目录 `demos/`）
- `demos/ArrayUtil.tsx`

## 查阅顺序
- API：`ArrayUtil-props.ts`
- 示例：`ArrayUtil-example.md`