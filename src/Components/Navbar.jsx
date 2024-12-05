import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useCharStates();
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };
  return (
    <nav className={state.theme}>
      <Link to="/">Home</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/favs">Destacados</Link>

      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
        {state.theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
