import './App.css';
import React from 'react'
import { Route } from 'react-router-dom'

import Home from './Components/Home'
import AccCreate from './Components/AccountCreate'

function App() {
  return (
    <div className="App">
      <div>
        <h1>Welcome to the scroll</h1>
        <Route path="/post" exact render = {() => <Home />} />
        <Route path="/login" exact render = {() => <AccCreate />} />
      </div>
    </div>
  );
}

export default App;
