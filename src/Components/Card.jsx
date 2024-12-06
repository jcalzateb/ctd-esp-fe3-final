import React from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "../Context/Context";
import { card } from "../Styles/Card.module.css";

const Card = ({ char }) => {
  const { state, dispatch } = useCharStates();
  const findFav = state.favs.some((fav) => fav.id === char.id);
  console.log(findFav);
  const toggleFav = () => {
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: char });
  };

  return (
    <div className={`${card} ${state.theme}`}>
      <Link to={`/detail/${char.id}`}>
        <img src="/images/doctor.jpg" alt="Doctor" />
        <h3>{char.name}</h3>
        <p>{char.username}</p>
      </Link>
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={toggleFav} className="favButton">
        {findFav ? "🌟" : "⭐"}
      </button>
    </div>
  );
};

export default Card;
