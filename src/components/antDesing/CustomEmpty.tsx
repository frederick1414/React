import { Empty } from 'antd'
import { EmptyProps } from 'antd/lib/empty'
import React from 'react'

const CustomEmpty: React.FunctionComponent<EmptyProps> = ({
  ...props
}): React.ReactElement => <Empty {...props}>{props.children}</Empty>

export default CustomEmpty
