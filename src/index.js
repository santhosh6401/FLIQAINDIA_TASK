import React from 'react';
import ReactDOM from 'react-dom';
import 'react-router-dom';
import './index.css';
import App from './Components/App';
import Nav from './Components/Nav';
import Header from './Components/Header';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Nav />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



