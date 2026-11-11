---
group:
  title: Navigation
  order: 6
order: 3
title: MenuList
toc: content
---

# MenuList

Vertical navigation menu with groups, inline submenus, and primary-colored selection.

## When to use

- Sidebar or multi-level navigation with expand/collapse and selection
- **Do not** use for top tabs; use `TabBar.Tabs` instead

## Demo

<code src="./demos/MenuList.tsx"></code>

## API

### Props

| Property       | Description                 | Type                                                | Default |
| -------------- | --------------------------- | --------------------------------------------------- | ------- |
| items          | Menu tree data              | `MenuListItem[]`                                    | `[]`    |
| defaultOpenIds | Default expanded submenu id | `string[]`                                          | `[]`    |
| style          | Custom style                | `CSSProperties`                                     | -       |
| className      | Custom class                | `string`                                            | -       |
| onChange       | Expand/collapse/select      | `(item: MenuListItem, options: { action }) => void` | -       |

### Ref

| Property | Description | Type                     |
| -------- | ----------- | ------------------------ |
| element  | Root node   | `HTMLDivElement \| null` |
