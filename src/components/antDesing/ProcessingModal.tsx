import React from 'react'
import { CustomModal, CustomRow, CustomSpin, CustomText } from '.'
import { LoadingOutlined } from '@ant-design/icons'
interface IProcessingModal {
  open: boolean
  title?: string
}

const ProcessingModal: React.FunctionComponent<IProcessingModal> = ({
  open,
  title = 'Comprimiendo imagen',
}): React.ReactElement => {
  return (
    <CustomModal open={open} footer={null} closable={false} centered>
      <CustomRow justify="center">
        <CustomSpin indicator={<LoadingOutlined />} spinning />
      </CustomRow>
      <CustomRow justify="center">
        <CustomText>{title}...</CustomText>
      </CustomRow>
    </CustomModal>
  )
}

export default ProcessingModal
