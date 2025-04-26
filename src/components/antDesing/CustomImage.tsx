import React from 'react'
import { Image, ImageProps } from 'antd'


const CustomImage: React.FunctionComponent<ImageProps> = (
  props
): React.ReactElement => <Image {...props}>{props.children}</Image>

export default CustomImage
