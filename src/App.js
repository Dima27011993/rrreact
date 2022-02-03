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
            <Route
              path="/messages"
              render={()=><Dialogs DialogsData={props.DialogData} messageData={props.messageData}/>}
            />
            <Route
              path="/profile"
              render={()=><Profile postData={props.postData} />}
            />
            <Route path="/news" render={()=><News />} />
            <Route path="/music" render={()=><Music />} />
            <Route path="/settings" render={()=><Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
