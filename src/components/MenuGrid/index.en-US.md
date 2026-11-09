# MenuGrid

Grid menu for icon + label entry tiles, laid out with `Row` / `Row.Col`.

## MenuGrid

### When to use

- Profile or dashboard style multi-entry grids
- Control columns per row via 24-column `span` (e.g. `span={6}` → 4 per row)

### Demo

<code src="./demos/MenuGrid.tsx"></code>

### API

#### Props

| Prop      | Description                                      | Type                               | Default                 |
| --------- | ------------------------------------------------ | ---------------------------------- | ----------------------- |
| gap       | Row/column gap (px), maps to `row-gap` / `column-gap` | `{ row?: number; column?: number }` | `{ row: 6, column: 6 }` |
| style     | Custom style                                     | `CSSProperties`                    | -                       |
| className | Class name   | `string`        | -       |
| children  | Menu items   | `ReactNode`     | -       |

#### Ref

| Prop    | Description | Type                     |
| ------- | ----------- | ------------------------ |
| element | Root node   | `HTMLDivElement \| null` |

## MenuGrid.Item

Single grid cell.

### Props

| Prop      | Description              | Type                                      | Default |
| --------- | ------------------------ | ----------------------------------------- | ------- |
| icon      | Icon slot                | `ReactNode`                               | -       |
| title     | Label                    | `ReactNode`                               | -       |
| badge     | Badge slot (e.g. Badge)  | `ReactNode`                               | -       |
| span      | Column span (Row.Col)    | `number`                                  | `6`     |
| disabled  | Disabled                 | `boolean`                                 | `false` |
| style     | Custom style             | `CSSProperties`                           | -       |
| className | Class name               | `string`                                  | -       |
| onClick   | Item click               | `(e: MouseEvent<HTMLDivElement>) => void` | -       |

#### Ref

| Prop    | Description   | Type                     |
| ------- | ------------- | ------------------------ |
| element | Clickable node | `HTMLDivElement \| null` |
