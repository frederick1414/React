interface Ipros extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  label?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}
const CustomTitle = ({ children, label = "h1", ...props }: Ipros) => {
  return (
    <p className={label} {...props}>
      {children}
    </p>
  );
};

export default CustomTitle;
