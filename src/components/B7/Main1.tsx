import React from "react";
import "./Active.css";
import { NavLink, Outlet } from "react-router-dom";

export default function Main1() {
  return (
    <div>
      <nav style={{ padding: "10px", display: "flex", gap: 10 }}>
        <NavLink to="/home2">Home</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/detail">Detail</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
