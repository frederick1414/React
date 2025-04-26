import React from 'react'
import { Tree } from 'antd'
import { TreeProps } from 'antd/lib/tree'

const CustomTree: React.FunctionComponent<TreeProps> = ({ ...props }) => (
  <Tree {...props} />
)

export default CustomTree
