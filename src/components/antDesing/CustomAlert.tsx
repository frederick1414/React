import React from 'react';
import { Alert, AlertProps } from 'antd';

interface AlertProp extends AlertProps {
  children: React.ReactNode;
}

const CustomAlert: React.FunctionComponent<AlertProp> = ({
  ...props
}): React.ReactElement => <Alert {...props}>{props.children}</Alert>;

export default CustomAlert;
