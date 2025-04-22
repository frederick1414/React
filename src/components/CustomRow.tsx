import React, { ReactNode, CSSProperties } from "react";

interface CustomRowProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const CustomRow: React.FC<CustomRowProps> = ({
  children,
  className = "",
  style = {},
}) => {
  return (
    <div className={`row ${className}`} style={style}>
      {children}
    </div>
  );
};

export default CustomRow;
