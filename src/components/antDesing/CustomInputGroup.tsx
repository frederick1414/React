import React from 'react'
import Input, { GroupProps } from 'antd/lib/input'

const CustomInputGroup: React.FunctionComponent<GroupProps> = ({
  size = 'default',
  className = 'custom-input-group',
  ...props
}): React.ReactElement => (
  <Input.Group className={className} size={size} {...props}>
    {props.children}
  </Input.Group>
)

export default CustomInputGroup
