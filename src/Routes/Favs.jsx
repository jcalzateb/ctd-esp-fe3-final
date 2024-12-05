import React from "react";
import Card from "../Components/Card";
import { useCharStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useCharStates();
  return (
    <>
      <div className={`container ${state.theme}`}>
        <h1>Dentists Favs</h1>
        <div className="card-grid">
          {state.favs.map((char) => (
            <Card key={char.id} char={char} />
          ))}
          {/* este componente debe consumir los destacados del localStorage */}
          {/* Deberan renderizar una Card por cada uno de ellos */}
        </div>
      </div>
    </>
  );
};

export default Favs;
