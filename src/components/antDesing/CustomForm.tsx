import { Form } from 'antd'
import { FormProps } from 'antd/lib/form'
import React from 'react'
import { validateMessages } from '../../constants/general'

type CustomFormProps = FormProps & {
  readOnly?: boolean
  children?: React.ReactNode
  disabled?: boolean
}

export const CustomFormContext = React.createContext<CustomFormProps | null>(
  null
)

const CustomForm: React.FunctionComponent<CustomFormProps> = ({
  readOnly = false,
  disabled,
  ...props
}): React.ReactElement => {
  return (
    <CustomFormContext.Provider value={{ ...props, readOnly, disabled }}>
      <Form validateMessages={validateMessages} {...props}>
        {props.children}
      </Form>
    </CustomFormContext.Provider>
  )
}

export default CustomForm
