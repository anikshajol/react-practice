import React from "react";
import "./Country.css";

const Country = (props) => {
  console.log(props.country);
  const { name, flags, region, population } = props.country;
  return (
    <div className="country">
      <h2>{name.common}</h2>
      <p>
        <small>{region}</small>
      </p>
      <p>{population}</p>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;
