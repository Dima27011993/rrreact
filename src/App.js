import React from "react";
import "./App.css";
import Profile from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Nav/Navbar";
import Dialogs from "./Components/dialogs/dialogs";
import News from "./Components/news/news";
import Music from "./Components/music/music";
import Settings from "./Components/setings/settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = (props) => {
 
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/messages" element={<Dialogs DialogsData={props.DialogData} messageData={props.messageData}/>} />
            <Route path="/profile" element={<Profile postData={props.postData}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
