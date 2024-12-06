import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useDentistStates } from "../Context/Context";
import "../Styles/Navbar.css";

const Navbar = () => {
  const { state, dispatch } = useDentistStates();
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
    </nav>
  );
};

export default Navbar;
