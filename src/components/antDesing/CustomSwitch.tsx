import React, { FunctionComponent, ReactElement } from 'react'

import { Switch } from 'antd'
import { SwitchProps } from 'antd/lib/switch'

interface IProps extends SwitchProps {
  children?: React.ReactNode;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomSwitch: FunctionComponent<IProps> = ({
  ...props
}): ReactElement => <Switch {...props}>{props?.children}</Switch>

export default CustomSwitch
