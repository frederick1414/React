import React, { useContext } from 'react'
import { Input } from 'antd'
import { TextAreaProps } from 'antd/lib/input'
import { CustomFormContext } from './CustomForm'

export type CustomTextAreaProps = TextAreaProps
const { TextArea } = Input

const CustomTextArea: React.FunctionComponent<TextAreaProps> = ({
  rows = 4,
  ...props
}): React.ReactElement => {
  const readOnly = useContext(CustomFormContext)?.readOnly
  return (
    <TextArea
      rows={rows}
      readOnly={readOnly}
      {...props}
      style={{ color: '#000' }}
    >
      <strong>{props.children}</strong>
    </TextArea>
  )
}

export default CustomTextArea
