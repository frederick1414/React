import React from 'react'
import { Checkbox } from 'antd'
import { CheckboxProps } from 'antd/lib/checkbox'

const CustomCheckbox: React.FunctionComponent<CheckboxProps> = ({
  ...props
}): React.ReactElement => <Checkbox {...props}>{props.children}</Checkbox>

export default CustomCheckbox
