---
group:
  title: 导航
  order: 6
order: 3
title: MenuList
toc: content
---

# MenuList

垂直导航菜单，支持分组、内联子菜单与选中态，选中色使用主题 `primary`。

## MenuList

### 何时使用

- 侧栏或多级导航，需要展开/收起与选项选中时
- **不要**用于顶部 Tab 切换；此类场景用 `TabBar.Tabs`

### 代码演示

<code src="./demos/MenuList.tsx"></code>

### API

#### 属性

| 属性           | 说明                | 类型                                                | 默认值 |
| -------------- | ------------------- | --------------------------------------------------- | ------ |
| items          | 菜单数据            | `MenuListItem[]`                                    | `[]`   |
| defaultOpenIds | 默认展开的子菜单 id | `string[]`                                          | `[]`   |
| style          | 自定义样式          | `CSSProperties`                                     | -      |
| className      | 自定义类名          | `string`                                            | -      |
| onChange       | 展开/收起/选中回调  | `(item: MenuListItem, options: { action }) => void` | -      |

`MenuListItem`：`id`、`name`、`type?: 'group'`、`iconSvg`、`children`、`disabled`。

`onChange` 中 `action` 为 `'collapse' \| 'expand' \| 'select'`。

#### Ref

| 属性    | 说明   | 类型                     |
| ------- | ------ | ------------------------ |
| element | 根元素 | `HTMLDivElement \| null` |

## MenuList.Item

基于 `List.Item` 的菜单行，由 `MenuList` 内部用于子菜单标题与可选项；一般无需单独使用。

### API

#### 属性

| 属性     | 说明                             | 类型                         | 默认值 |
| -------- | -------------------------------- | ---------------------------- | ------ |
| item     | 菜单项数据                       | `MenuListItem`               | -      |
| expanded | 子菜单是否展开                   | `boolean`                    | -      |
| selected | 是否选中（本项选中或子级有选中） | `boolean`                    | -      |
| onChange | 点击回调                         | 同 `List.Item` 的 `onChange` | -      |
