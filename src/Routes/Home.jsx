import React, { useEffect, useState, useContext } from "react";
import Card from "../Components/Card";
import { useDentistStates } from "../Context/Context";
import "../Styles/App.css";

const Home = () => {
  const { state } = useDentistStates();
  return (
    <main className={`container ${state.theme}`}>
      <h1>Home</h1>
      <div className="card-grid">
        {state.data.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;
