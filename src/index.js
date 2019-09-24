 import "bootstrap/dist/css/bootstrap.min.css";
 import React from "react";
 import ReactDOM from 'react-dom';
 import App from './components/App';
 import { BrowserRouter as Router } from "react-router-dom";
//the above import make BowserRouter ad Router, so instead of using BrowserRouter we can use Router

 ReactDOM.render(<Router><App/></Router>, document.getElementById('root'));