import React from 'react'
import { Result } from 'antd'
import { ResultProps } from 'antd/lib/result'

const CustomResult: React.FunctionComponent<ResultProps> = ({
  ...props
}): React.ReactElement => <Result {...props}>{props.children}</Result>

export default CustomResult
