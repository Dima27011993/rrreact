import React from "react";
import "./App.css";
import Profile from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Nav/Navbar";
import dialogs from "./Components/dialogs/dialogs";
import { BrowserRouter, Routes } from "react-router-dom";
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes path="Messages" component={dialogs} />
          <Routes path="Profile" component={Profile} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
