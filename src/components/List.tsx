import { useState } from "react";

type Props = {
  data: string[];
  onSelect?: (item: string) => void;
};

function List({ data, onSelect }: Props) {
  const [index, setIndex] = useState(1);
  const handleClick = (i: number, item: string) => {
    setIndex(i);
    onSelect?.(item);
  };
  return (
    <ul className="list-group">
      {data.map((item, i) => (
        <li
          key={item}
          className={`list-group-item ${index === i ? "active" : ""}`}
          onClick={() => handleClick(i, item)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default List;
