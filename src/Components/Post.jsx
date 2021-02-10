import React from "react";
import TimeStamp from "./Timestamp";

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
      <div>
        <p>Created on:</p>
        <TimeStamp />
      </div>
    </div>
  );
}

export default Post;
