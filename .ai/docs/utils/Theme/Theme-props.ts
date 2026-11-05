/**
 * Theme API（AI 文档，生成代码时以此为准）
 */

/** 主题 token 表（与 VariablesUtil / CSS 变量对应） */
export type ThemeVariables = Record<string, string>

/** Theme.config 入参：主题名 → 可部分覆盖的 token */
export type Themes = Record<string, Partial<ThemeVariables>>

export namespace Theme {
  /** 注册 / 覆盖主题，写入 window.lyrixiThemes */
  export function config(themes: Themes): Record<string, ThemeVariables>

  /** 获取主题 token；不传 themeName 时返回当前已应用主题 */
  export function getTheme(themeName?: string): ThemeVariables

  /** 按主题名应用 CSS 变量 */
  export function setTheme(themeName: string): ThemeVariables

}
