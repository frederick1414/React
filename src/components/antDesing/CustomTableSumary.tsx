import React, { FunctionComponent } from 'react'

import { SummaryProps } from 'rc-table/lib/Footer/Summary'
import { Table } from 'antd'

const CustomTableSummary: FunctionComponent<SummaryProps> = ({
  ...props
}): React.ReactElement => (
  <Table.Summary {...props}>{props.children}</Table.Summary>
)

export default CustomTableSummary
