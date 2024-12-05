import React, { useEffect, useState, useContext } from "react";
import Card from "../Components/Card";
import { useCharStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state } = useCharStates();
  return (
    <main className={`container ${state.theme}`}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.data.map((char) => (
          <Card key={char.id} char={char} />
        ))}
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
  );
};

export default Home;
