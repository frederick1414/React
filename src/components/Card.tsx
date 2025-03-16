import { ReactNode } from "react";

interface Iprops {
  children: ReactNode;
}
function Card(props: Iprops) {
  const { children } = props;
  const cardStyle = {
    width: "350px",
  };
  return (
    <div className="card" style={cardStyle}>
      <div className="card-body"> {children}</div>
    </div>
  );
}

interface IpropsCardBody {
  title: string;
  text: string;
}
export function CardBody(props: IpropsCardBody) {
  const { text, title } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">S{text}</p>
    </>
  );
}

export default Card;
