import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body, userId } = post;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/friends/${userId}`);
  };

  return (
    <div>
      <h2>Details post:{id}</h2>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={handleClick}>Author</button>
    </div>
  );
};

export default PostDetails;
