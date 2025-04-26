import React from 'react'
import { Select, SelectProps } from 'antd'

const CustomOption: React.FunctionComponent<SelectProps> = ({
  ...props
}): React.ReactElement => (
  <Select.Option {...props}>{props.children}</Select.Option>
)

export default CustomOption
