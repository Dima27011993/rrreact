import React from "react";
import { NavLink } from "react-router-dom";
import m from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={m.NavbarWrapper}>
      <nav className={m.Navbar}>
        <NavLink to="Profile">Profile</NavLink>
        <a href="Messages">Messages</a>
        <a href="News">News</a>
        <a href="Music">Music</a>
        <a href="Settings">Settings</a>
      </nav>
    </div>
  );
};
export default Navbar;
