import React from 'react'
import { Breadcrumb } from 'antd'
import { BreadcrumbProps } from 'antd/lib/breadcrumb'

const CustomBreadcrumb: React.FunctionComponent<BreadcrumbProps> = ({
  ...props
}): React.ReactElement => <Breadcrumb {...props}>{props.children}</Breadcrumb>

export default CustomBreadcrumb
