# List Rules

> 源文档：`src/components/List/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `List`，**禁止**自造同类 UI。
- 子组件写法：`List.Sub`（与库导出一致）。

## 何时使用
- 需要展示数据列表时
- 需要支持单选或多选时
- 需要分组显示数据时

## formatViewItem 与分组
- 只用 `formatViewItem` 格式化展示字段（已移除 `formatViewList`）
- 带非空 `children` 的项视为分组：List 自动补充 `type: 'group'`，渲染分组头 + 子项
- 子项**不要**设置 `type`
- 分组结构在 `list` / `formatResponse` 中给出；`formatViewItem` 映射分组头与子项字段

## Demo 索引（本目录 `demos/`）
- `demos/List.tsx`
- `demos/ListItem.tsx`
- `demos/ListInfiniteScroll.tsx`
- `demos/ListHeaderItem.tsx`

## 查阅顺序
- Props：`List-props.ts`
- 示例：`List-example.md`