import { Modal } from 'antd'
import { ModalProps } from 'antd/lib/modal'
import React from 'react'

type CustomModalProps = ModalProps & {
  visible?: boolean
}

const CustomModal: React.FunctionComponent<CustomModalProps> = ({
  bodyStyle = {},
  cancelText = 'Cancel',
  centered = false,
  closable = true,
  confirmLoading = false,
  destroyOnClose = false,
  forceRender = false,
  mask = true,
  maskClosable = true,
  maskStyle = {},
  okText = 'OK',
  okType = 'primary',
  visible = false,
  open = visible,
  width = 520,
  zIndex = 1000,
  ...props
}): React.ReactElement => (
  <Modal
    bodyStyle={bodyStyle}
    cancelText={cancelText}
    centered={centered}
    closable={closable}
    confirmLoading={confirmLoading}
    destroyOnClose={destroyOnClose}
    forceRender={forceRender}
    mask={mask}
    maskClosable={maskClosable}
    maskStyle={maskStyle}
    okText={okText}
    okType={okType}
    open={open}
    width={width}
    zIndex={zIndex}
    {...props}
  >
    {props.children}
  </Modal>
)

export default CustomModal
