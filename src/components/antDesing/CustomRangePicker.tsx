import DatePicker, { RangePickerProps } from "antd/lib/date-picker";
import React from "react";
import localeProp from "antd/es/date-picker/locale/es_ES";

type CustomRangePickerProps = RangePickerProps & {
  locale?: Record<string, unknown>;
  children?:React.ReactNode
};

const { RangePicker } = DatePicker;

const CustomRangePicker: React.FunctionComponent<CustomRangePickerProps> = ({
  locale = localeProp,
  format = "DD/MM/YYYY",
  ...props
}): React.ReactElement => (
  <RangePicker format={format} locale={locale} {...props} />
);

export default CustomRangePicker;
