import { useState } from "react";

import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const handleSelect = (item: string) => {
  console.log("handles", item);
};

function App() {
  const defaulList = ["GOKU", "VEGETA", "GOHAN", "PICCOLO", "KRILIN"];
  const [list, setList] = useState<string[]>(defaulList);

  const handleAdd = () => {
    setList([...list, "NUEVO"]);
  };

  const handleEraser = () => {
    setList(list.slice(0, list.length - 1));
  };

  return (
    <Card>
      <CardBody text="el texto" title=" titulo de prueba" />
      {list.length ? (
        <List data={list} onSelect={handleSelect} />
      ) : (
        "nada que mostrar"
      )}

      <Button onClick={handleAdd}>AGREGAR</Button>

      <Button onClick={handleEraser} className="btn btn-danger">
        ELIMINAR
      </Button>
    </Card>
  );
}

export default App;
