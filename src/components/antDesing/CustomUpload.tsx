import React from 'react'
import { Upload } from 'antd'
import { UploadProps } from 'antd/lib/upload'

const CustomUpload: React.FunctionComponent<UploadProps> = ({
  ...props
}): React.ReactElement => <Upload {...props}>{props.children}</Upload>

export default CustomUpload
