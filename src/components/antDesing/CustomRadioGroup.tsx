import React, { useContext } from 'react'

import { CustomFormContext } from './CustomForm'
import { Radio } from 'antd'
import { RadioGroupProps } from 'antd/lib/radio'

const CustomRadioGroup: React.FunctionComponent<RadioGroupProps> = ({
  ...props
}): React.ReactElement => {
  const context = useContext(CustomFormContext)
  return (
    <Radio.Group
      disabled={context?.readOnly}
      style={{ width: '100%' }}
      {...props}
    >
      {props.children}
    </Radio.Group>
  )
}

export default CustomRadioGroup
