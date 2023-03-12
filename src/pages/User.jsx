import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function User() {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([""]);
  const [Loader, setLoader] = useState(false);

  async function getUserList() {
    setLoader(true);
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response.data) {
        setUserList(response.data);
      }
      console.log({ response });
    } catch (error) {
      console.log({ error });
    } finally {
      setLoader(false);
    }
  }

  useEffect(() => {
    getUserList();

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
        <h1>User</h1>
        <ol>
          {userList.map((user) => (
            <li style={{ padding: "4px" }}>
              {user.email} "&&&" {user.name}
            </li>
          ))}
        </ol>
        <button onClick={(e) => navigate("/")}>Go Back</button>
      </div>
    </>
  );
}
