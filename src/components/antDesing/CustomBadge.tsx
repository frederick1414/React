import React from 'react'
import { Badge, BadgeProps } from 'antd'

const CustomBadge: React.FunctionComponent<BadgeProps> = ({
  ...props
}): React.ReactElement => <Badge {...props}>{props.children}</Badge>

export default CustomBadge
