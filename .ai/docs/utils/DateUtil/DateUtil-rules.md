# DateUtil Rules

> 源文档：`src/utils/DateUtil/index.zh-CN.md`。更新后请执行 `npm run build:ai-docs`。

## 必须使用
- 从 `lyrixi-web` 引入 `DateUtil`，**禁止**自造同类工具函数。
- 类名拼接等 DOM 场景用 `DOMUtil.classNames`；日期用 `DateUtil`；请求用 `Request`；存储用 `Storage`。

## 何时使用
- 见 `src/utils/DateUtil/index.zh-CN.md` 说明与 demos。

## API 索引（节选）
- `DateUtil.toDate`
- `DateUtil.startOrEnd`
- `DateUtil.compareRange`
- `DateUtil.getWeekDates`
- `DateUtil.previousWeek`
- `DateUtil.nextWeek`
- `DateUtil.getMonthDates`
- `DateUtil.previousMonth`
- `DateUtil.nextMonth`
- `DateUtil.getDaysInMonth`
- `DateUtil.timeZonePlaceName`
- `DateUtil.utcOffset`
- `DateUtil.utcToTimeZone`
- `DateUtil.timeZoneToUtc`
- `DateUtil.timeZoneToTimeZone`
- `DateUtil.parseUtcOffset`
- `DateUtil.stringifyUtcOffset`

## Demo 索引（本目录 `demos/`）
- `demos/DateUtil.tsx`

## 查阅顺序
- API：`DateUtil-props.ts`
- 示例：`DateUtil-example.md`