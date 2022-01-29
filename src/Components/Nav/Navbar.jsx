import React from "react";
import m from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={m.NavbarWrapper}>
    <nav className={m.Navbar}>
      <div>Profile</div>
      <div>Messages</div>
      <div>News</div>
      <div>Music</div>
      <div>Settings</div>
    </nav>
    </div>
  );
};
export default Navbar;
