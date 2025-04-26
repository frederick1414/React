import React from 'react'
import { Image } from 'antd'
import { GroupConsumerProps } from 'rc-image/lib/PreviewGroup'
const { PreviewGroup } = Image

const CustomImagePreviewGroup: React.FunctionComponent<GroupConsumerProps> = ({
  ...props
}): React.ReactElement => (
  <PreviewGroup {...props}>{props.children}</PreviewGroup>
)

export default CustomImagePreviewGroup
