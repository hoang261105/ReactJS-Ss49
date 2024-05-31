import { NavLink, Outlet } from "react-router-dom";

export default function Main() {
  return (
    <div>
      <nav>
        1111111
        <NavLink to="/home1">HOME</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
