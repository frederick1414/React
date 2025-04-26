import React from "react";
import { TreeSelect } from "antd";
import { TreeSelectProps } from "antd/lib/tree-select";
interface IProps extends TreeSelectProps {
  children: React.ReactNode;
}

const CustomTreeSelect: React.FunctionComponent<IProps> = ({
  ...props
}): React.ReactElement => <TreeSelect {...props}>{props.children}</TreeSelect>;

export default CustomTreeSelect;
