import "./App.css";
import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import AccCreate from "./Components/AccountCreate";
import Login from "./Components/Login";
import Posts from "./Components/Posts";


function App() {
  const [posts, setPosts] = useState([]);
  const http = "https://the-scroll-back-end.herokuapp.com/post";

  const getPosts = async () => {
    await fetch(http)
    .then(res => res.json())
    .then(res => {
      setPosts(res)
    })
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Welcome to the scroll</h1>

        <Route path="/" exact render={() => <Home />} />
        <Route path="/creatacc" exact render={() => <AccCreate />} />
        <Route path="/Login" exact render={() => <Login />} />
        <Route path="/posts" exact render={() => <Posts posts={posts} />} />
      </div>
    </div>
  );
}

export default App;
