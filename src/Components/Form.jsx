import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [form, setForm] = useState({ name: "", email: "" });
  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (form.name.length > 5 && regexEmail.test(form.email)) {
      setMostrar(true);
      setError(false);
      console.log("Submitted:", form);
    } else {
      setError(true);
      setMostrar(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Full Name</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <label>Email</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button type="submit">Send</button>
      </form>
      {error && (
        <p style={{ color: "red" }}>Coloque la información correctamente</p>
      )}
      {mostrar && (
        <p style={{ color: "green" }}>
          Gracias, {form.name}! Nos comunicaremos en el siguiente correo{" "}
          {form.email}.
        </p>
      )}
    </div>
  );
};

export default Form;
