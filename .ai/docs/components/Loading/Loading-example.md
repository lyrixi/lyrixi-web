# Loading Example

示例源码在 `demos/`（由 `src/components/Loading/demos` 同步）。需要具体写法时 **Read 下表对应 demo 文件**，不要依赖本文件中的旧代码块。

业务代码引入：`import { Loading } from 'lyrixi-web'`

## Demo 索引

| Demo | 说明 |
|------|------|
| [demos/Loading.tsx](./demos/Loading.tsx) | 主示例 |
| [demos/LoadingApi.tsx](./demos/LoadingApi.tsx) | Loading.open / close / exists 命令式 API |
| [demos/LoadingBallWave.tsx](./demos/LoadingBallWave.tsx) | Loading.BallWave 子组件示例 |
| [demos/LoadingOuroboros.tsx](./demos/LoadingOuroboros.tsx) | Loading.Ouroboros 子组件示例 |
| [demos/LoadingSpinFade.tsx](./demos/LoadingSpinFade.tsx) | Loading.SpinFade 子组件示例 |

## 查阅顺序

1. `Loading-props.ts` — API
2. `Loading-rules.md` — 何时使用、子组件
3. 上表 `demos/` — 需要片段时再读
