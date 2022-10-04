import React from "react";
import { useLoaderData } from "react-router-dom";
import SinglePost from "../SinglePost/SinglePost";

const Post = () => {
  const post = useLoaderData();

  return (
    <div>
      <h2>Post are here</h2>
      {post.map((singlePost) => (
        <SinglePost key={singlePost.id} singlePost={singlePost}></SinglePost>
      ))}
      console.log(singlePost)
    </div>
  );
};

export default Post;
