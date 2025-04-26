import React from 'react'
import Breadcrumb, { BreadcrumbItemProps } from 'antd/lib/breadcrumb'

const { Item } = Breadcrumb

const CustomBreadcrumbItem: React.FunctionComponent<BreadcrumbItemProps> = ({
  ...props
}): React.ReactElement => <Item {...props}>{props.children}</Item>

export default CustomBreadcrumbItem
