import React from "react";
import type { DatePickerProps } from "antd";
import localeRU from "antd/es/date-picker/locale/ru_RU";
import { DatePicker as AntdDatePicker } from "antd/lib";

export const DatePicker = React.memo(function RuDatePicket({ locale = localeRU, ...props }: DatePickerProps) {
  return <AntdDatePicker format="DD.MM.YYYY" locale={locale} {...props} />;
});
