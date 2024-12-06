import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDentistStates } from "../Context/Context";

const Detail = () => {
  const [dentist, setdentist] = useState({});
  const params = useParams();
  const { state } = useDentistStates();
  const url = "https://jsonplaceholder.typicode.com/users/" + params.id;
  useEffect(() => {
    try {
      axios(url).then((res) => {
        setdentist(res.data);
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }, [params.id]);

  return (
    <>
      <div className={`container ${state.theme}`}>
        <h1>Detail Dentist</h1>
        <h2>{dentist.name}</h2>
        <p>Email: {dentist.email}</p>
        <p>Phone: {dentist.phone}</p>
        <p>Website: {dentist.website}</p>
      </div>
    </>
  );
};

export default Detail;
