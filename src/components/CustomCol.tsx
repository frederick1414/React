import React, { ReactNode, CSSProperties } from "react";

interface CustomColumnProps {
  children: ReactNode;
  size?: number;
  className?: string;
  style?: CSSProperties;
}

const CustomColumn: React.FC<CustomColumnProps> = ({
  children,
  size = 12,
  className = "",
  style = {},
}) => {
  return (
    <div className={`col-${size} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default CustomColumn;
