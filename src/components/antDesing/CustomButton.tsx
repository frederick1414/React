import React, { Dispatch, SetStateAction, useEffect } from 'react'

import { Button } from 'antd'
import { ButtonProps } from 'antd/lib/button'

type CustomButtonProps = ButtonProps & {
  onClickLoading?: React.MouseEventHandler<HTMLButtonElement>
  setLoading?: Dispatch<SetStateAction<boolean | undefined>>
}

const CustomButton: React.FunctionComponent<CustomButtonProps> = ({
  block = false,
  danger = false,
  disabled = false,
  ghost = false,
  loading = false,
  type = 'default',
  shape = 'round',
  setLoading,
  onClickLoading,
  onClick,
  ...props
}): React.ReactElement => {
  const enterLoading = (data: any) => {
    setLoading && setLoading(!loading)
    onClickLoading && onClickLoading(data)
  }

  useEffect(() => {
    setLoading && setLoading(loading as boolean)
  }, [loading])

  return (
    <Button
      shape={shape}
      block={block}
      danger={danger}
      disabled={disabled}
      ghost={ghost}
      loading={loading}
      type={type}
      onClick={onClickLoading ? enterLoading : onClick}
      {...props}
    >
      {props.children}
    </Button>
  )
}

export default CustomButton
