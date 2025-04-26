import Collapse, { CollapseProps } from 'antd/lib/collapse'

import React from 'react'

type CustomCollapseProps = CollapseProps & {
  disabled?: boolean
}

const CustomCollapse: React.FunctionComponent<CustomCollapseProps> = ({
  disabled,
  collapsible = disabled ? 'disabled' : undefined,
  ...props
}): React.ReactElement => {
  return (
    <Collapse collapsible={collapsible} {...props}>
      {props.children}
    </Collapse>
  )
}

export default CustomCollapse
