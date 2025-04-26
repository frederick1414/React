import Collapse, { CollapsePanelProps } from 'antd/lib/collapse'

import React from 'react'

type CustomPanelProps = CollapsePanelProps & {
  disabled?: boolean
}

const { Panel } = Collapse
const CustomPanel: React.FunctionComponent<CustomPanelProps> = ({
  disabled = false,
  collapsible = disabled ? 'disabled' : undefined,
  ...props
}): React.ReactElement => (
  <Panel collapsible={collapsible} {...props}>
    {props.children}
  </Panel>
)

export default CustomPanel
