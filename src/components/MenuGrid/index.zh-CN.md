---
group:
  title: 布局
  order: 3
order: 2
title: MenuGrid
toc: content
---

# MenuGrid

宫格菜单，用于在页面中展示图标 + 文案的网格入口，基于 `Row` / `Row.Col` 栅格换行。

## MenuGrid

### 何时使用

- 个人中心、工作台等需要多入口宫格展示时
- 需要按 24 栅格控制每行个数（如 `span={6}` 一行 4 个）时

### 代码演示

<code src="./demos/MenuGrid.tsx"></code>

### API

#### 属性

| 属性      | 说明                                         | 类型                                      | 默认值              |
| --------- | -------------------------------------------- | ----------------------------------------- | ------------------- |
| gap       | 网格行列间距（px），对应 `row-gap` / `column-gap` | `{ row?: number; column?: number }`        | `{ row: 6, column: 6 }` |
| style     | 自定义样式                                   | `CSSProperties`                           | -                   |
| className | 自定义类名 | `string`        | -      |
| children  | 菜单项     | `ReactNode`     | -      |

#### Ref

| 属性    | 说明   | 类型                     |
| ------- | ------ | ------------------------ |
| element | 根元素 | `HTMLDivElement \| null` |

## MenuGrid.Item

宫格单项。

### 何时使用

- 作为 `MenuGrid` 的子节点，配置图标、标题与角标

### API

#### 属性

| 属性      | 说明                         | 类型                                      | 默认值 |
| --------- | ---------------------------- | ----------------------------------------- | ------ |
| icon      | 图标区域                     | `ReactNode`                               | -      |
| title     | 标题                         | `ReactNode`                               | -      |
| badge     | 角标（通常配合 `Badge`）     | `ReactNode`                               | -      |
| span      | 占据栅格数，同 `Row.Col`     | `number`                                  | `6`    |
| disabled  | 是否禁用                     | `boolean`                                 | `false` |
| style     | 自定义样式                   | `CSSProperties`                           | -      |
| className | 自定义类名                   | `string`                                  | -      |
| onClick   | 点击项                       | `(e: MouseEvent<HTMLDivElement>) => void` | -      |

#### Ref

| 属性    | 说明         | 类型                     |
| ------- | ------------ | ------------------------ |
| element | 可点击根元素 | `HTMLDivElement \| null` |
