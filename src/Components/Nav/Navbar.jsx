import React from "react";
import { NavLink } from "react-router-dom";
import m from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={m.NavbarWrapper}>
      <nav className={m.Navbar}>
        <NavLink to="/profile" activeClassName={m.Navbar}>
          Profile
        </NavLink>
        <NavLink to="/messages">Messages</NavLink>
        <NavLink to="/news">News</NavLink>
        <NavLink to="/music">Music</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </nav>
    </div>
  );
};
export default Navbar;
