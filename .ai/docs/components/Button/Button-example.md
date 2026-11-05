# Button Example

示例源码在 `demos/`（由 `src/components/Button/demos` 同步）。需要具体写法时 **Read 下表对应 demo 文件**，不要依赖本文件中的旧代码块。

业务代码引入：`import { Button, ButtonColor, ButtonVariant } from 'lyrixi-web'`

## Demo 索引

| Demo | 说明 |
|------|------|
| [demos/Button.tsx](./demos/Button.tsx) | variant × color 矩阵、size、block |
| [demos/ButtonGroup.tsx](./demos/ButtonGroup.tsx) | Button.Group 子组件示例 |
| [demos/ButtonIcon.tsx](./demos/ButtonIcon.tsx) | Button.Icon 尺寸与圆形按钮 |
| [demos/ButtonText.tsx](./demos/ButtonText.tsx) | Button.Text、与 Icon 组合 |

## 典型写法

```tsx
import { Button, ButtonColor, ButtonVariant } from 'lyrixi-web'

<Button variant={ButtonVariant.solid} color={ButtonColor.primary} radius="m">
  提交
</Button>
```

## 查阅顺序

1. `Button-props.ts` — API
2. `Button-rules.md` — 何时使用、子组件
3. 上表 `demos/` — 需要片段时再读
