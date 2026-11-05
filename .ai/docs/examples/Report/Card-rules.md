# Report Card Rules

> 模板 ID：`report-card` · 源码：`demos/Card/`

## 何时使用

- 报表/看板：顶部 Tabs + Slides，Content 展示指标卡片
- 多接口：queryTabs → querySlides → queryData
- 无 Tabs/Slides、仅周期切换 + **卡片指标列表**时用 `detail-indicator-list`

## 目录结构

| 路径           | 职责                     |
| -------------- | ------------------------ | ----------- | -------- |
| `index.tsx`    | initData、tab/slide 切换 |
| `Header/`      | 标题、Tabs、Slides       |
| `Content/`     | 指标卡片                 |
| `api/queryTabs | querySlides              | queryData/` | 三个查询 |

## 替换点

| 字段                                  | 位置                     |
| ------------------------------------- | ------------------------ |
| `pageTitle`                           | URL title 参数或默认文案 |
| `api.queryTabs/querySlides/queryData` | 对应 api 文件 url        |
| `content.drillDownUrl`                | Bridge.openWindow        |

## 说明

- 本模板入口无 `Page` 包裹，按设计稿决定是否外层加 Page
