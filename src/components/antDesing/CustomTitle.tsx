import React, { ReactNode } from 'react'
import { Typography } from 'antd'

const { Title } = Typography

export type CustomTitleProps = {
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
  ellipsis?:
    | boolean
    | {
        rows?: number
        expandable?: boolean
        suffix?: string
        onExpand?: React.MouseEventHandler<HTMLElement>
        onEllipsis?: Function
      }
  level?: 1 | 2 | 3 | 4 | 5
  mark?: boolean
  type?: 'secondary' | 'warning' | 'danger' | 'success' | 'primary'
  underline?: boolean
  children?: ReactNode
}

const CustomTitle: React.FunctionComponent<CustomTitleProps> = ({
  code = false,
  copyable = false,
  deleted = false,
  disabled = false,
  // editable = false,
  // ellipsis = false,
  level = 1,
  mark = false,
  underline = false,
  type,
  ...props
}): React.ReactElement => {
  const color = type === 'primary' ? '#1677ff' : undefined
  const style = { color }

  return (
     //@ts-ignore
    <Title
      code={code}
      copyable={copyable}
      delete={deleted}
      disabled={disabled}
      // editable={editable}
      // ellipsis={ellipsis}
      level={level}
      mark={mark}
      underline={underline}
      style={style}
      {...props}
    >
      {props.children}
    </Title>
  )
}

export default CustomTitle
