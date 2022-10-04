import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendDetails = () => {
  const friend = useLoaderData();
  console.log(friend);
  return (
    <div>
      <h2>Name: {friend.name}</h2>
      <p>Phone: {friend.phone} </p>
    </div>
  );
};

export default FriendDetails;
