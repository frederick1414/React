import React from 'react'
import { Avatar } from 'antd'
import { AvatarProps } from 'antd/lib/avatar'

interface IProps extends AvatarProps {
  children?: React.ReactNode
  title?: string
}

const CustomAvatar: React.FunctionComponent<IProps> = ({
  alt = '',
  onError = () => false,
  shape = 'circle',
  size = 'default',
  ...props
}): React.ReactElement => (
  <Avatar alt={alt} onError={onError} shape={shape} size={size} {...props}>
    {props.children}
  </Avatar>
)

export default CustomAvatar
