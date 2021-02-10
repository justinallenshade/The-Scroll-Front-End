import React from "react";

import { Container } from "react";
import { Container } from "react";

function Post({ post }) {
 return (
    <div className="card-body">
      <div>
        <p className="card-text">{post.username}</p>
      </div>
      <div>
        <h5 className="card-title">{post.title}</h5>
      </div>
      <div>
        <p className="card-text">{post.body}</p>
      </div>
    </div>

  );
 }
import TimeStamp from "./Timestamp";

function Post({ post }) {
  const pic =
    "https://images.unsplash.com/photo-1612366630921-ec3bdea36f48?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fDZzTVZqVExTa2VRfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  return (
    <div>
      <div id="container">
        <div>
          <img id="user-image" src={pic} alt="user pic" />
        </div>
        <section>
          <h3 className="card-title">Title:{post.title}</h3>
          <h5 className="card-body">Body:{post.body}</h5>
          <h6 className="card.category">Category:{post.category}</h6>
          <div className="created-on">
            <h6>Created on:</h6>
            <section>
              <TimeStamp />
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Post;
