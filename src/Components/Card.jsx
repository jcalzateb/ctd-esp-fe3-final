import React from "react";
import { Link } from "react-router-dom";
import { useDentistStates } from "../Context/Context";
import { card } from "../Styles/Card.module.css";

const Card = ({ dentist }) => {
  const { state, dispatch } = useDentistStates();
  const findFav = state.favs.some((fav) => fav.id === dentist.id);
  console.log(findFav);
  const toggleFav = () => {
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: dentist });
  };

  return (
    <div className={`${card} ${state.theme}`}>
      <Link to={`/detail/${dentist.id}`}>
        <img src="/images/doctor.jpg" alt="Doctor" />
        <h3>{dentist.name}</h3>
        <p>{dentist.username}</p>
      </Link>
      <button onClick={toggleFav} className="favButton">
        {findFav ? "🌟" : "⭐"}
      </button>
    </div>
  );
};

export default Card;
