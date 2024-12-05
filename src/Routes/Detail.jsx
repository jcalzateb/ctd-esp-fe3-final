import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [char, setChar] = useState({});
  const params = useParams();
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;
  useEffect(() => {
    axios(url).then((res) => {
      setChar(res.data);
    });
  }, []);

  return (
    <>
      <h1>Detail Dentist id </h1>
      <p>
        <strong>Nombre:</strong> {char.name}
      </p>
      <p>
        <strong>Email:</strong> {char.email}
      </p>
      <p>
        <strong>Teléfono:</strong> {char.phone}
      </p>
      <p>
        <strong>Sitio web:</strong> {char.website}
      </p>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;
