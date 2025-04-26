import React from 'react'
import { Steps } from 'antd'
import { StepsProps } from 'antd/lib/steps'

const CustomSteps: React.FunctionComponent<StepsProps> = ({
  size = 'small',
  ...props
}): React.ReactElement => (
  <Steps size={size} {...props}>
    {props.children}
  </Steps>
)

export default CustomSteps
