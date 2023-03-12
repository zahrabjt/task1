import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        margin: "auto",
        width: "50%",
        border: "3px solid pink",
        textAlign: "center",
        padding: "50px",
      }}
    >
      <h1>Home</h1>
      <button onClick={(e) => navigate("/car")}>Go To Car</button>
      <button onClick={(e) => navigate("/user")}> Go To User</button>
      <button onClick={(e) => navigate("/photo")}> Go To photo</button>
      <button onClick={(e) => navigate("/test")}>Go to test</button>
    </div>
  );
}
