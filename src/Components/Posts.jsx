import React from "react";
import Post from "./Post";

function Posts({ posts }) {
  return (
    <div>
      {posts.map((item) => (
        <Post key={item._id} post={item} />
      ))}
    </div>
  );
}

export default Posts;