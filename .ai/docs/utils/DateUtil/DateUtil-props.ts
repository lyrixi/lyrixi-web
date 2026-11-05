/**
 * DateUtil API（AI 文档，生成代码时以此为准）
 */

export namespace DateUtil {
  /** 通用方法: 增加日期, 'year', 'quarter', 'month', 'week', 'date' */
  export function add(...args: unknown[]): unknown

  /** 通用方法: 比较年月日,大于返回1,等于返回0,小于返回-1 */
  export function compare(...args: unknown[]): unknown

  /** 通用方法: 比较两个时间范围，1包含，0相等，-1不包含 */
  export function compareRange(...args: unknown[]): unknown

  /** 通用方法: 日期相差'year|quarter|month|week|day|hour|minute|second' */
  export function diff(...args: unknown[]): unknown

  /** 通用方法: 格式化日期 */
  export function format(...args: unknown[]): unknown

  /** 定制方法: 获取月天数 */
  export function getDaysInMonth(...args: unknown[]): unknown

  /** 定制方法: 获取指定月42天的日期, 当前月isCurrent为true */
  export function getMonthDates(...args: unknown[]): unknown

  /** 定制方法: 获取指定周7天的日期 */
  export function getWeekDates(...args: unknown[]): unknown

  /** 见源码与 demos */
  export function if(...args: unknown[]): unknown

  /** 见源码与 demos */
  export function nextMonth(...args: unknown[]): unknown

  /** 见源码与 demos */
  export function nextWeek(...args: unknown[]): unknown

  /** 时区方法: 解析UTC偏移量, 入参:"UTC+08:00", 返回: 总分钟数 */
  export function parseUtcOffset(...args: unknown[]): unknown

  /** 见源码与 demos */
  export function previousMonth(...args: unknown[]): unknown

  /** 见源码与 demos */
  export function previousWeek(...args: unknown[]): unknown

  /** 通用方法: 获取季度 */
  export function quarter(...args: unknown[]): unknown

  /** 通用方法: 边界时间, 支持: 'year', 'quarter', 'month', 'week', 'date' */
  export function startOrEnd(...args: unknown[]): unknown

  /** 时区方法: 时区字符串化，入参: 总分钟数, 返回: "UTC+08:00" */
  export function stringifyUtcOffset(...args: unknown[]): unknown

  /** 时区方法: 获取当前时区地址名称 */
  export function timeZonePlaceName(...args: unknown[]): unknown

  /** 时区方法: 在两个时区间转换, 入参: "日期, 原时区偏移总分钟数, 目标时区偏移总分钟数", 返回: "日期" */
  export function timeZoneToTimeZone(...args: unknown[]): unknown

  /** 时区方法: 将指定时区时间转为 UTC, 入参: "日期, 时区偏移总分钟数", 返回: "UTC日期" */
  export function timeZoneToUtc(...args: unknown[]): unknown

  /** 通用方法: 转为日期格式 */
  export function toDate(...args: unknown[]): unknown

  /** 时区方法: 获取当前UTC偏移量, 分钟数是国际时区标准, 返回: 总分钟数 */
  export function utcOffset(...args: unknown[]): unknown

  /** 时区方法: 将 UTC 转为指定时区, 入参: "UTC日期, 时区偏移总分钟数", 返回: "日期" */
  export function utcToTimeZone(...args: unknown[]): unknown

}
