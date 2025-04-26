import React, { useContext } from 'react'

import { CustomFormContext } from './CustomForm'
import { Radio } from 'antd'
import { RadioProps } from 'antd/lib/radio'

const CustomRadio: React.FunctionComponent<RadioProps> = ({
  ...props
}): React.ReactElement => {
  const context = useContext(CustomFormContext)
  return (
    <Radio disabled={context?.readOnly} {...props}>
      {props.children}
    </Radio>
  )
}

export default CustomRadio
