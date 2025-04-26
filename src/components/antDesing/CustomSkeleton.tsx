import { Skeleton, SkeletonProps } from 'antd'

import React from 'react'

const CustomSkeleton: React.FunctionComponent<SkeletonProps> = ({
  ...props
}): React.ReactElement => <Skeleton {...props}>{props.children}</Skeleton>

export default CustomSkeleton
