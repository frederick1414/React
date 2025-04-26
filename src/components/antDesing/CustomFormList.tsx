import React from 'react'
import { Form } from 'antd'
import { FormListProps } from 'antd/lib/form/FormList'
const { List } = Form

const CustomFormList: React.FunctionComponent<FormListProps> = ({
  ...props
}): React.ReactElement => {
  return <List {...props}>{props.children}</List>
}

export default CustomFormList
