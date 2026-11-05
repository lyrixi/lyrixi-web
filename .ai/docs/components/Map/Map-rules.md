# Map Rules

> 源文档：`src/components/Map/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用

- 从 `lyrixi-web` 引入 `Map`，**禁止**自造同类 UI。
- 子组件写法：`Map.Sub`（与库导出一致）。

## 何时使用

- 见 `src/components/Map/index.zh-CN.md` 中「何时使用」。

## Map.Provider 配置

`config` 按地图厂商分别配置 key，通过 `type` 选择当前使用的地图：

```tsx
<Map.Provider
  config={{
    bmapKeys: { android: '', ios: '', web: 'YOUR_BMAP_WEB_KEY' },
    googleKeys: { android: '', ios: '', web: '' },
    amapKeys: { android: '', ios: '', web: '' },
    type: 'bmap'
  }}
>
  {children}
</Map.Provider>
```

- `type`：`'bmap' | 'google' | 'amap'`
- 各 `*Keys` 支持 `android` / `ios` / `web`，运行时按平台优先取对应 key，否则回退 `web`

## 子组件
- `Map.Circles`
- `Map.LocationControl`
- `Map.MapChoosePage`
- `Map.MapContainer`
- `Map.MapMarkersPage`
- `Map.Markers`
- `Map.NearbyControl`
- `Map.Polygon`
- `Map.Polyline`
- `Map.Provider`
- `Map.SearchControl`
- `Map.ZoomControl`
- `Map.getAddress`
- `Map.getLocation`
- `Map.pointsToWgs84`
- `Map.queryNearby`

## Demo 索引（本目录 `demos/`）

- `demos/MapMapContainer.tsx`
- `demos/MapZoomControl.tsx`
- `demos/MapSearchControl.tsx`
- `demos/MapMarkers.tsx`
- `demos/MapCircles.tsx`
- `demos/MapPolyline.tsx`
- `demos/MapPolygon.tsx`
- `demos/MapLocationControl.tsx`
- `demos/MapNearbyControl.tsx`
- `demos/MapMapChoosePage.tsx`
- `demos/MapMapMarkersPage.tsx`
- `demos/MapMapLoader.tsx`

## 查阅顺序

- Props：`Map-props.ts`
- 示例：`Map-example.md`
