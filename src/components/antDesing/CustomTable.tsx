import React, { FunctionComponent } from 'react'
import { Table } from 'antd'
import { TableProps } from 'antd/lib/table'
import { filterShowTable } from '../../constants/general'
import { ColumnsTableType } from '../CustomExcelTableExport'

const CustomTable: FunctionComponent<TableProps<any>> = ({
  size = 'small',
  bordered = true,
  columns,
  ...props
}): React.ReactElement => {
  const filterColumns = filterShowTable(columns as ColumnsTableType[])
  return (
    <Table size={size} bordered={bordered} {...props} columns={filterColumns}>
      {props.children}
    </Table>
  )
}
export default CustomTable
