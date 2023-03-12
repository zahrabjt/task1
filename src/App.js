import logo from "./logo.svg";
import "./App.css";
import Router from "./Router/Router";
import User from "./pages/User";
import Car from "./pages/Car";
import HomePage from "./pages/HomePage";
import Photo from "./pages/Photo";
import { Routes, Route, Link } from "react-router-dom";
import ProductList from "./pages/productList";

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/car" element={<Car />} />
        <Route path="/user" element={<User />} />
        <Route path="/photo" element={<Photo />} />
      </Routes> */}

      <ProductList />
    </div>
  );
}

export default App;
