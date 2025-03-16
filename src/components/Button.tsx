import { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({
  type = "button",
  children,
  className = "btn btn-primary",
  ...props
}: IProps) {
  return (
    <button type={type} className={className} {...props}>
      {children}
    </button>
  );
}

export default Button;
