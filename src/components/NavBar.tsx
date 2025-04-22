interface Props extends React.HTMLAttributes<HTMLElement> {
  className?:
    | "navbar navbar-light"
    | "navbar navbar-dark bg-primary"
    | "navbar navbar-dark bg-dark";

  children?: React.ReactNode;
}

function NavBar({
  className = "navbar navbar-light",
  children,
  ...props
}: Props) {
  return (
    <>
      <nav className={className} {...props}>
        {children}
      </nav>
    </>
  );
}

export default NavBar;
