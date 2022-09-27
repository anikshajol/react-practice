import React from "react";
import { add } from "../../utilities/Calculator";

const Cosmetics = () => {
  const first = 55;
  const second = 66;
  const total = add(first, second);
  return (
    <div>
      <h2>Welcome to my cosmetics store</h2>p<p>Total: {total}</p>
    </div>
  );
};

export default Cosmetics;
