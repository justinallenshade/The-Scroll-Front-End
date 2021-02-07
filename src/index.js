import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

<<<<<<< HEAD
=======
import { BrowserRouter as Router } from 'react-router-dom';
import InfiniScroll from './Components/InfiniScroll';
>>>>>>> added bootsrap cdn with scrolling timeline


ReactDOM.render(
  <Router>
    <App />
    <InfiniScroll />
  </Router>,
  document.getElementById("root")
);
