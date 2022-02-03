import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  { message: "post 1", likesCount: "23" },
  { message: "post 2", likesCount: "0" },
  { message: "post 3" },
  { message: "post 4" },
  { message: "post 5" },
  { message: "post 6" },
];
let DialogData = [
  { id: 1, name: "sasha" },
  { id: 2, name: "masha" },
  { id: 3, name: "ilya" },
  { id: 4, name: "margo" },
  { id: 5, name: "anna" },
  { id: 6, name: "elena" }
];

let messageData = [
  { message: "hello, how are you?" },
  { message: "i'm fine" }
];

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} DialogData={DialogData} messageData={messageData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
