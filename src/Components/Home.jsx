import React, { useState, useEffect } from "react";
import Posts from "./Posts"

export default function Home(props) {
  let posts =[]
  let http = "https://the-scroll-back-end.herokuapp.com/post";

  
  fetch(http)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      posts = (res);
    })
    .catch((error) => {
      console.log(error);
    });
  




  return (
    <div>
      <div id="main-container">
        <header>

          <div id = "create-post">
            <h3 className="crud-heading">Create post</h3>
            <form action="https://the-scroll-back-end.herokuapp.com/post" method="post" id="postForm">
                <input type="text" placeholder="username" name="username"></input>
                <input type="text" placeholder="title" name="title"></input>
                <input type="text" placeholder="body" name="body"></input>
                <input type="text" placeholder="category" name="category"></input>
                <input type="submit" className='loginButton' value="Submit"></input>
            </form>
          </div>

          <div id = "update-post">
            <h3 className="crud-heading">Edit post</h3>
            <form action="https://the-scroll-back-end.herokuapp.com/post?_method=PUT" method="post" id="postForm">
                <input type="text" placeholder="id" name="id"></input>
                <input type="text" placeholder="title" name="title"></input>
                <input type="text" placeholder="body" name="body"></input>
                <input type="text" placeholder="category" name="category"></input>
                <input type="submit" className='loginButton' value="Submit"></input>
            </form>
          </div>

          {/* <div id = "delete-post">
            <h3 className="crud-heading">Create post</h3>
            <form action="https://the-scroll-back-end.herokuapp.com/" method="delete" id="postForm">
                <input type="text" placeholder="title" name="title"></input>
                <input type="text" placeholder="category" name="category"></input>
                <input type="submit" className='loginButton' value="Submit"></input>
            </form>
          </div> */}
        </header>

        <div id="content-wrap">
          <h1>
            <u>The Scroll TimeLine</u>
          </h1>
        <div>
          <Posts posts={posts}/>
        </div>
        
        </div>
      </div>
    </div>
  );
}
