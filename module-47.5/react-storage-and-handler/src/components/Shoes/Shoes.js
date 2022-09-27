import React from "react";
import { multiply } from "../../utilities/Calculator";

const Shoes = () => {
  const first = 44;
  const second = 2;
  const total = multiply(first, second);
  return (
    <div>
      <h2>This is shoes Compo</h2>
      <p>Multiply: {total}</p>
    </div>
  );
};

export default Shoes;
