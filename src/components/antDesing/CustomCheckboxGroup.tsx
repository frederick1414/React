import React from 'react'
import { Checkbox } from 'antd'
import { CheckboxGroupProps } from 'antd/lib/checkbox'

const CustomCheckboxGroup: React.FunctionComponent<CheckboxGroupProps> = (
  props
): React.ReactElement => (
  <Checkbox.Group style={{ width: '100%' }} {...props}>
    {props.children}
  </Checkbox.Group>
)

export default CustomCheckboxGroup
