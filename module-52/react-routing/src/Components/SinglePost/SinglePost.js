import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SinglePost.css";

const SinglePost = ({ singlePost }) => {
  const { title, body, id } = singlePost;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="sl-post">
      <h2>{title}</h2>
      <p>{body}</p>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link>

      <button onClick={handleClick}>Open Details</button>
    </div>
  );
};

export default SinglePost;
