import React, { useContext } from "react";
import Form from "../Components/Form";
import { useCharStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useCharStates();
  return (
    <div className={`container ${state.theme}`}>
      <h1>Want to know more?</h1>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
