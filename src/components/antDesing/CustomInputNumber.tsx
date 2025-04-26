import { InputNumber, InputNumberProps, InputRef } from "antd";
import React, { useContext, useState } from "react";
import { CustomFormContext } from "./CustomForm";
import { numberFormat } from "../../constants/general";

type FormatType =
  | "money"
  | "percent"
  | "decimalCoin"
  | "float"
  | "moneyShow"
  | "planeNumber"
  | "decimal"
  | "";

export type CoinType = "RD" | "EU" | "US" | "";

export type InputFormat = {
  format: FormatType;
  coin?: CoinType;
};

type CustomInputNumberProps = Omit<InputNumberProps, "type"> & {
  ref?: React.RefObject<InputRef>;
  format?: InputFormat;
  unlimited?: boolean;
  decimal?: number;
  digitQuantity?: number;
};

function formato(num: any) {
  return num.toString().replace(/^[+-]?\d+/, function (int: any) {
    return int.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  });
}

const CustomInputNumber: React.FC<CustomInputNumberProps> = ({
  min = 0,
  autoComplete = "off",
  decimal = 2,
  digitQuantity = 14,
  format = { format: "", coin: "" },
  disabled = false,
  unlimited,
  ...props
}): React.ReactElement => {
  const readOnly = useContext(CustomFormContext)?.readOnly;

  const [maxValue, setMaxValue] = useState<number | null>();
  const [value, setValue] = useState<number | null>(null);

  const handleChange = (value: number) => {
    if (value !== undefined && value !== null) {
      const [integerPart] = value.toString().split(".");
      if (integerPart.length <= digitQuantity) {
        setValue(value);
      }
    } else {
      setValue(value);
    }
  };

  const formatter = (value: number | string) => {
    switch (format.format) {
      case "money": {
        return {
          format: `${format.coin}$ ${formato(value)}`,
          parse: `${value}`
            .replace(`${format.coin?.[0]}`, "")
            .replace(`${format.coin?.[1]}`, "")
            .replace(/\$\s?|(,*)/g, ""),
        };
      }

      case "planeNumber": {
        return {
          format: `${formato(value)}`,
          parse: `${value}`.replace(/\$\s?|(,*)/g, ""),
        };
      }

      case "decimalCoin": {
        return {
          format: `${format.coin}$ ${value}`,
          parse: `${value}`
            .replace(`${format.coin?.[0]}`, "")
            .replace(`${format.coin?.[1]}`, ""),
        };
      }
      case "float": {
        return {
          format: `${formato(value)}`,
          parse: `${value}`
            .replace(`${format.coin?.[0]}`, "")
            .replace(`${format.coin?.[1]}`, "")
            .replace(/\$\s?|(,*)/g, ""),
        };
      }
      case "moneyShow": {
        return {
          format: `${format.coin}$ ${numberFormat(Number(value), decimal)}`,
          parse: `${(Number(value) || 0)?.toFixed(decimal)}`
            .replace(`${format.coin?.[0]}`, "")
            .replace(`${format.coin?.[1]}`, "")
            .replace(/\$\s?|(,*)/g, ""),
        };
      }
      case "percent": {
        setMaxValue(unlimited ? null : 100);
        return {
          format: `${value}%`,
          parse: `${value}`.replace("%", ""),
        };
      }
      case "decimal": {
        const format = (value: number | null) => {
          if (value !== undefined && value !== null) {
            const [integerPart, decimalPart] = value?.toString()?.split(".");
            const truncatedIntegerPart = integerPart?.slice(0, digitQuantity);
            return decimalPart !== undefined
              ? `${truncatedIntegerPart}.${decimalPart}`
              : truncatedIntegerPart;
          }
          return value;
        };

        return {
          format: value ? format(value as number | null) : "",
          parse: `${value}`.replace(/\$\s?|(,*)/g, ""),
        };
      }
      default:
        return {
          format: undefined,
          parse: undefined,
        };
    }
  };

  return (
    <InputNumber
      autoComplete={autoComplete}
      //@ts-ignore
      formatter={
        format.format ? (value: any) => formatter(value).format : undefined
      }
      //@ts-ignore
      parser={
        format.format ? (value: any) => formatter(value).parse : undefined
      }
      min={min as number}
      //@ts-ignore
      max={maxValue}
      precision={format.format ? decimal : 0}
      readOnly={readOnly}
      disabled={readOnly ? false : disabled}
      style={{
        width: "100%",
        color: "#000",
      }}
      //@ts-ignore
      value={value}
      //@ts-ignore
      onChange={handleChange}
      {...props}
    />
  );
};

export default CustomInputNumber;
