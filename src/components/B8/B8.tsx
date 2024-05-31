import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function B8() {
  return (
    <div>
      <nav style={{ display: "flex", gap: 10 }}>
        <NavLink to="/admin">Admin</NavLink>
        <NavLink to="/account">Account</NavLink>
        <NavLink to="/product">Product</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
