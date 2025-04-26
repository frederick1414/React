import React from 'react'
import { Tag } from 'antd'
import { TagProps } from 'antd/lib/tag'

const CustomTag: React.FunctionComponent<TagProps> = ({
  ...props
}): React.ReactElement => <Tag {...props}>{props.children}</Tag>

export default CustomTag
