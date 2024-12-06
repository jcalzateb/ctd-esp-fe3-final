import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "../Context/Context";
import "../Styles/Navbar.css";
//import DH.icon from "../public/DH.ico";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useCharStates();
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav className={`navbar ${state.theme}`}>
      <div className="navbar-logo">
        <img src="/DH.ico" alt="DH Logo" />
        <span>Odonto</span>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/contacto">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button onClick={toggleTheme}>
          {state.theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    </nav>
  );
};

export default Navbar;
