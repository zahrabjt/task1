import React, { useState, useEffect } from "react";
import { useNavigate, useSubmit } from "react-router-dom";
import axios from "axios";

export default function Car() {
  const navigate = useNavigate();
  const [carList, setCarList] = useState([""]);
  const [loader, setLoader] = useState(false);

  async function getCarList() {
    setLoader(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (response.data) {
        setCarList(response.data);
      }
    } catch (error) {
      console.log({ error });
    } finally {
      setLoader(false);
    }
  }

  useEffect(() => {
    getCarList();

    return () => {};
  }, []);

  return (
    <>
      <div
        style={{
          margin: "auto",
          width: "50%",
          border: "3px solid pink",
          textAlign: "center",
          padding: "50px",
        }}
      >
        <h1>Car</h1>
        {loader ? (
          "loader"
        ) : (
          <ol>
            {carList.map((car) => (
              <li>{car.title}</li>
            ))}
          </ol>
        )}
        <button onClick={(e) => navigate(-1)}>Go Back</button>
      </div>
    </>
  );
}
