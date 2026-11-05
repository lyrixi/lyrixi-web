# Loading Rules

> 源文档：`src/components/Loading/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `Loading`，**禁止**自造同类 UI。
- 子组件写法：`Loading.Sub`（与库导出一致）。

## 何时使用
- 见 `src/components/Loading/index.zh-CN.md` 中「何时使用」。

## 子组件
- `Loading.BallWave`
- `Loading.Ouroboros`
- `Loading.SpinFade`
- `Loading.close`
- `Loading.exists`
- `Loading.open`

## Demo 索引（本目录 `demos/`）
- `demos/Loading.tsx`
- `demos/LoadingApi.tsx` — Loading.open / close / exists 命令式 API
- `demos/LoadingBallWave.tsx`
- `demos/LoadingOuroboros.tsx`
- `demos/LoadingSpinFade.tsx`

## 查阅顺序
- Props：`Loading-props.ts`
- 示例：`Loading-example.md`