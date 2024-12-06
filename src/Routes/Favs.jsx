import React from "react";
import Card from "../Components/Card";
import { useDentistStates } from "../Context/Context";

const Favs = () => {
  const { state } = useDentistStates();
  return (
    <>
      <div className={`container ${state.theme}`}>
        <h1>Dentists Favs</h1>
        <div className="card-grid">
          {state.favs.map((dentist) => (
            <Card key={dentist.id} dentist={dentist} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favs;
