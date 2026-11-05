# Skeleton Rules

> 源文档：`src/components/Skeleton/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `Skeleton`，**禁止**自造同类 UI。
- 子组件写法：`Skeleton.Sub`（与库导出一致）。

## 何时使用
- 需要显示加载占位效果时
- 需要在内容加载时显示骨架屏时
- 需要提升列表、详情、编辑等页面的加载体验时

## Demo 索引（本目录 `demos/`）
- `demos/SkeletonList.tsx`
- `demos/SkeletonDetail.tsx`
- `demos/SkeletonEdit.tsx`
- `demos/SkeletonAvatar.tsx`
- `demos/SkeletonTitle.tsx`
- `demos/SkeletonItem.tsx`
- `demos/SkeletonParagraph.tsx`
- `demos/SkeletonTabs.tsx`

## 查阅顺序
- Props：`Skeleton-props.ts`
- 示例：`Skeleton-example.md`