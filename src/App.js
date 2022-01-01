import "./index.css";
// import { AppBar, Button, Toolbar } from "@mui/material";
import { useState } from "react";
import UserTable from "./UserTable";
import ProductTable from "./ProductTable";

export default function App() {
  const [users, setUsers] = useState([
    {
      name: "user1",
      password: "user1",
      age: 21,

      email: "user1@gmail.com",
    },
    {
      name: "user2",
      password: "user2",
      age: 24,

      email: "user2@gmail.com",
    },
    {
      name: "user3",
      password: "user3",
      age: 23,

      email: "user3@gmail.com",
    },
    {
      name: "user4",
      password: "user4",
      age: 24,
      email: "user4@gmail.com",
    },
  ]);
  const [products, setProducts] = useState([
    {
      name: "product1",
      color: "red",
      material: "plastic",
      type: "toy",
    },
    {
      name: "product2",
      color: "yellow",
      material: "metal",
      type: "part",
    },
    {
      name: "product3",
      color: "green",
      material: "Nylon",
      type: "cloth",
    },
    {
      name: "product4",
      color: "red",
      material: "plastic",
      type: "Bag",
    },
  ]);
  const [flag, setFlag] = useState("all");
  return (
    <div className="app">
      <div className="navbar">
        <ul className="navbar-nav" style={{ listStyle: "none" }}>
          <li className="logo">Admin😁</li>
          <li onClick={() => setFlag("all")}>Home</li>
          <li onClick={() => setFlag("users")}>Users</li>
          <li onClick={() => setFlag("products")}>Products</li>
        </ul>
      </div>
      <div className="upbar">
        <span>Admin Panel</span>
        <img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_profile.svg" />
      </div>
      <div className="data">
        {flag === "all" ? (
          <div className="dis">
            <UserTable users={users} />
            <ProductTable products={products} />
          </div>
        ) : flag === "users" ? (
          <UserTable users={users} add={true} setUsers={setUsers} />
        ) : (
          <ProductTable
            products={products}
            add={true}
            setProducts={setProducts}
          />
        )}
      </div>
    </div>
  );
}
