import React, { useContext } from "react";
import Form from "../Components/Form";
import { useDentistStates } from "../Context/Context";

const Contact = () => {
  const { state } = useDentistStates();
  return (
    <div className={`container ${state.theme}`}>
      <h1>Want to know more?</h1>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
