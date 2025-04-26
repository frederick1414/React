import React, { useContext } from 'react'
import { Input, InputRef } from 'antd'
import { InputProps } from 'antd/lib/input'
import { CustomFormContext } from './CustomForm'

export type CustomInputProps = InputProps & {
  autoComplete?: string
  tooltip?: string
  ref?: React.RefObject<InputRef>
}

const CustomInput: React.FunctionComponent<CustomInputProps> = ({
  disabled = false,
  type = 'text',
  autoComplete = 'off',
  readOnly = false,
  ...props
}): React.ReactElement => {
  const context = useContext(CustomFormContext)

  return (
    <Input
      type={type}
      autoComplete={autoComplete}
      disabled={context?.disabled || disabled}
      readOnly={context?.readOnly || readOnly}
      style={{ borderRadius: '5px' }}
      {...props}
    >
      {props.children}
    </Input>
  )
}

export default CustomInput
