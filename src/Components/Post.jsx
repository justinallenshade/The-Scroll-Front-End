import React from "react";
import TimeStamp from "./Timestamp";

function Post({ post }) {
  return (
    <div className="card-body">
      <div className="timeStamp">
        <p>Created on:</p>
        <TimeStamp />
      </div>
      <div>
        <p className="card-text">username: {post.username}</p>
      </div>
      <div>
        <p className="card-text">post id: {post._id}</p>
      </div>
      <div>
        <p className="card-title">{post.title}</p>
      </div>
      <div>
        <p className="card-text">{post.body}</p>
      </div>
    </div>
  );
}

export default Post;
