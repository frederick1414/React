import React from 'react'
import { Popconfirm } from 'antd'
import { PopconfirmProps } from 'antd/lib/popconfirm'

const CustomPopConfirm: React.FunctionComponent<PopconfirmProps> = ({
  ...props
}): React.ReactElement => <Popconfirm {...props}>{props.children}</Popconfirm>

export default CustomPopConfirm
