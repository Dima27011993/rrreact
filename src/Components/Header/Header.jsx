import React from "react";
import m from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={m.Header}>
      <img
        className={m.Logo}
        src="https://img.freepik.com/free-vector/flat-code-logo-collection_23-2148829940.jpg?size=338ext=jpg"
      ></img>
    </header>
  );
};
export default Header;
