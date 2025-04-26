import React from 'react'
import { Layout } from 'antd'
import { LayoutProps } from 'antd/lib/layout'
import { CustomTitle } from '.'

export type CustomLayoutWithTitleProps = LayoutProps & {
  style?: React.CSSProperties
  styleTitle?: React.CSSProperties
  level?: 1 | 2 | 3 | 4
}

const CustomLayoutWithTitle: React.FunctionComponent<CustomLayoutWithTitleProps> = ({
  style = {
    margin: '5px',
    background: 'white',
    border: '1px solid blue',
    borderRadius: '25px',
    padding: '10px 0px',
  },
  styleTitle = {
    marginLeft: 70,
    marginTop: -25,
    backgroundColor: 'white',
    wordBreak: 'break-word',
    position: 'absolute',
    padding: '0px 10px 0px 10px',
  },
  title = '',
  level = 4,
  ...props
}): React.ReactElement => (
  <Layout style={style} {...props}>
    {title && (
      <span style={styleTitle}>
        <CustomTitle level={level}>{title}</CustomTitle>
      </span>
    )}
    <br />
    {props.children}
  </Layout>
)

export default CustomLayoutWithTitle
