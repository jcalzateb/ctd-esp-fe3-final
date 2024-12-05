import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";

const CharStates = createContext();

const Context = ({ children }) => {
  const [chars, setChars] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios(url).then((res) => {
      setChars(res.data.results);
    });
  }, []);
  return (
    <CharStates.Provider value={{ chars }}>{children}</CharStates.Provider>
  );
};

export default Context;
