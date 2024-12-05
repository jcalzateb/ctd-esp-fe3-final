import React from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "../Context/Context";

const Card = ({ char }) => {
  const { dispatch } = useCharStates();
  const addFav = () => {
    dispatch({ type: "ADD_FAV", payload: char });

    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="card">
      <Link to={`/detail/${char.id}`}>
        <h3>{char.name}</h3>
        <p>{char.username}</p>
      </Link>
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
