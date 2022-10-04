import React from "react";
import { Link } from "react-router-dom";
import "./friend.css";

const Friend = ({ friend }) => {
  const { name, email, username, id } = friend;

  return (
    <div className="friend">
      <h2>{name}</h2>
      <p> {email} </p>
      <small>
        <Link to={`/friends/${id}`}>{username}</Link>
      </small>
    </div>
  );
};

export default Friend;
