import React from "react";
import "./Profile.css";

function Profile(props) {
  const image1 =
    "https://images.unsplash.com/photo-1541534401786-2077eed87a74?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYW5rJTIwcHJvZmlsZSUyMHBpY3R1cmV8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  return (
    <div className="page">
      <div className="container">
        <p className="app-name">The Scroll</p>
        <div className="header">
          <div className="profile-pic">
            <img src={image1} alt="Profile pic" />
          </div>
          <div className="username">
            <p>Username</p>
          </div>
        </div>
      </div>
      <div className="new-post">
        <a href="#">create new post</a>
      </div>
      <div className="all-posts">
        Blog Posts
        <div className="my-post">Post 1</div>
        <div className="my-post">Post 1</div>
        <div className="my-post">Post 1</div>
        <div className="my-post">Post 1</div>
      </div>
    </div>
  );
}

export default Profile;
