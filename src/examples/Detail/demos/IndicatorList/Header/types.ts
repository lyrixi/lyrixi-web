import type { DatePickerTypeSwitcherValue } from 'lyrixi-web'

export type HeaderProps = {
  dateType: DatePickerTypeSwitcherValue | null
  onDateTypeChange: (dateType: DatePickerTypeSwitcherValue) => void
}
