import React from 'react'
import Select, { SelectProps } from "antd/lib/select";
import { useContext } from "react";
import { CustomFormContext } from "./CustomForm";
import { DefaultOptionType, FilterFunc } from "rc-select/lib/Select";

const CustomSelect: React.FunctionComponent<SelectProps> = ({
  style = { width: "100%", color: "#000" },
  placeholder = "Seleccione",
  disabled = false,
  ...props
}): React.ReactElement => {
  const readOnly = useContext(CustomFormContext)?.readOnly

  const filterOption: FilterFunc<DefaultOptionType> = (
    input,
    option
  ): boolean => {
    if (option?.children && typeof option.children === "string") {
      return `${option.children}`?.toLowerCase().includes(input.toLowerCase());
    }
    return false;
  };

  return (
    <Select
      style={style}
      placeholder={placeholder}
      disabled={readOnly || disabled}
      showSearch
      allowClear
      filterOption={filterOption}
      {...props}
    >
      {props.children}
    </Select>
  )
}

export default CustomSelect
