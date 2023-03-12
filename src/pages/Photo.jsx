import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Photo() {
  const navigate = useNavigate();
  const [photoList, setPhotoList] = useState([]);
  const [loader, setLoader] = useState(false);

  function getPhotoList() {
    setLoader(true);

    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setPhotoList(response.data);
      })
      .catch((error) => {
        console.log({ error });
      })
      .finally(() => setLoader(false));
  }

  useEffect(() => {
    getPhotoList();

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
        <h1>Photo</h1>
        {loader ? (
          "loader"
        ) : (
          <ol>
            {photoList.map((photo) => (
              <li>{photo.url}</li>
            ))}
          </ol>
        )}
      </div>
    </>
  );
}
