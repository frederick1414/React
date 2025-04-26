import React, { useContext } from 'react'
import { AutoComplete, AutoCompleteProps } from 'antd'
import { CustomFormContext } from './CustomForm'

export type CusstomAutoCompleteProps = AutoCompleteProps & {
  options: unknown
}

const CustomAutoComplete: React.FunctionComponent<CusstomAutoCompleteProps> = ({
  value = '',
  disabled = false,
  options,
  ...props
}): React.ReactElement => {
  const readOnly = useContext(CustomFormContext)?.readOnly
  return (
    <AutoComplete
      disabled={readOnly ? false : disabled}
      options={options}
      value={value}
      {...props}
    />
  )
}

export default CustomAutoComplete
