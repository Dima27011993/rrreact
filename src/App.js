import React from 'react';
import './App.css';
import Profile from './Components/Content/Content';
import Header from './Components/Header/Header';
import Navbar from './Components/Nav/Navbar';
const App = ()=> {
  return (
    <div className='wrapper'>
<Header/>
<Navbar/>
<Profile/>
    </div>
  );
}

export default App;
