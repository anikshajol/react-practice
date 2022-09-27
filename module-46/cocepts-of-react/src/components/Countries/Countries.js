import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  // console.log(countries);

  const loadData = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    setCountries(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <h2>Total Countries: {countries.length}</h2>
      <section className="container">
        {countries.map((country) => (
          <Country country={country} key={country.cca3}></Country>
        ))}
      </section>
    </div>
  );
};

export default Countries;
