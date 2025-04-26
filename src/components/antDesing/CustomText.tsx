import React from 'react'
import { Typography } from 'antd'

const { Text } = Typography

type CustomTextProps = {
  code?: boolean
  copyable?: boolean | { text: string; onCopy: () => void }
  deleted?: boolean
  disabled?: boolean
  editable?:
    | boolean
    | {
        editing: boolean
        onStart: () => void
        onChange: Function
      }
  ellipsis?: boolean
  mark?: boolean
  underline?: boolean
  strong?: boolean
  type?: 'secondary' | 'warning' | 'danger' | 'success'
  children: React.ReactNode
  style?: React.CSSProperties
}

const CustomText: React.FunctionComponent<CustomTextProps> = ({
  code = false,
  copyable = false,
  deleted = false,
  disabled = false,
  editable = false,
  ellipsis = false,
  mark = false,
  underline = false,
  strong = false,
  ...props
}): React.ReactElement => (
  <Text
    code={code}
    copyable={copyable}
    delete={deleted}
    disabled={disabled}
    editable={editable as never}
    ellipsis={ellipsis}
    mark={mark}
    underline={underline}
    strong={strong}
    {...props}
  >
    {props.children}
  </Text>
)

export default CustomText
