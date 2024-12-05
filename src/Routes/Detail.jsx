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
    try {
      axios(url).then((res) => {
        setChar(res.data);
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }, []);

  return (
    <>
      <h1>Detail Dentist id </h1>
      <h2>{char.name}</h2>
      <p>Email: {char.email}</p>
      <p>Phone: {char.phone}</p>
      <p>Website: {char.website}</p>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;
