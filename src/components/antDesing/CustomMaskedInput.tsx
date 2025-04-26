import MaskedInput, { MaskedInputProps } from 'react-text-mask'
import React, { useContext } from 'react'

import { CustomFormContext } from './CustomForm'
import { InputProps } from 'antd/lib/input'

export type CustomProps = InputProps &
  MaskedInputProps &
  Readonly<MaskedInputProps> & {
    prefix?: string & React.ReactNode
    props?: never
  }

const CustomMaskedInput: React.FC<CustomProps> = ({
  mask = [],
  guide = false,
  className = 'ant-input ant-input-sm',
  autoComplete = 'off',
  readOnly = false,
  ...props
}): React.ReactElement => {
  const context = useContext(CustomFormContext)
  return (
    <MaskedInput
      autoComplete={autoComplete}
      className={className}
      mask={mask}
      guide={guide}
      readOnly={context?.readOnly || readOnly}
      style={{ marginBottom: '0px', width: '100%', padding: '5px 0px 5px 0px' }}
      {...props}
    >
      {props.children}
    </MaskedInput>
  )
}
export default CustomMaskedInput
