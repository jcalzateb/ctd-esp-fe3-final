import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { reducer } from "../Reducer/Reducer";

const CharStates = createContext();

export const initialState = {
  theme: "light",
  data: [],
  favs: JSON.parse(localStorage.getItem("favs")) || [],
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    axios(url).then((res) => {
      dispatch({ type: "SET_DATA", payload: res.data });
    });
  }, []);

  return (
    <CharStates.Provider value={{ state, dispatch }}>
      {children}
    </CharStates.Provider>
  );
};

export default Context;

export const useCharStates = () => useContext(CharStates);
