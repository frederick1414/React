import React from 'react'
import { Tooltip } from 'antd'
import { TooltipProps } from 'antd/lib/tooltip'

const CustomTooltip: React.FunctionComponent<TooltipProps> = (
  props
): React.ReactElement => <Tooltip {...props}>{props.children}</Tooltip>

export default CustomTooltip
