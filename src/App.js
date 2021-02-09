import "./App.css";
import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Home from "./Components/Home";
import AccCreate from "./Components/AccountCreate";
import Login from "./Components/Login";
import Header from "./components/Header";
import Posts from "./components/Posts";
import CreatePost from "./components/CreatPost";

function App() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  let http = "https://the-scroll-back-end.herokuapp.com/post";

  const getPosts = () => {
    fetch(http)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPosts(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getPosts();
  });

  return (
    <div className="App">
      <div>
        <Route path="/" exact render={() => <Home />} /> 
        <Route path="/creatacc" exact render={() => <AccCreate />} />
        <Route path="/Login" exact render={() => <Login />} />
        
        <Header showModal={showModal} setShowModal={setShowModal} />
        <CreatePost showModal={showModal} />
        <Route path="/posts" exact render={() => <Posts posts={posts} />} />
      </div>
    </div>
  );
}

export default App;
