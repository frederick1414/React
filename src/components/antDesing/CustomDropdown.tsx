import React from 'react'
import { Dropdown } from 'antd'
import { DropDownProps } from 'antd/lib/dropdown'

const CustomDropdown: React.FunctionComponent<DropDownProps> = ({
  ...props
}): React.ReactElement => <Dropdown {...props}>{props.children}</Dropdown>

export default CustomDropdown
