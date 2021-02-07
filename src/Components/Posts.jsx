import React from "react";
import Post from "./Post";

function Posts({ posts }) {
  console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <Post key={post} post={post} />
      ))}
    </div>
  );
}

export default Posts;
