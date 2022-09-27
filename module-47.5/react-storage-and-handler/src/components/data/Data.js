import React from "react";
import { addToDb, removeFromDb } from "../../utilities/manageStore";
import "./Data.css";

const Data = (props) => {
  const { name, price, id } = props.data;

  const addToCart = (id) => {
    addToDb(id);
  };

  return (
    <div className="product">
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>
        Id: <small>{id}</small>
      </p>
      <button onClick={() => addToCart(id)}>Add to cart</button>
      <button onClick={() => removeFromDb(id)}>Remove</button>
    </div>
  );
};

export default Data;
