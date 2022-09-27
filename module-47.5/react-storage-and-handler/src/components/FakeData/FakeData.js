import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Data from "../data/Data";

const FakeData = () => {
  const [fakeData, setfakeData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setfakeData(data));
  }, []);

  return (
    <div>
      <h2>Welcome to my Fake data</h2>
      {fakeData.map((data) => (
        <Data key={data.id} data={data}></Data>
      ))}
    </div>
  );
};

export default FakeData;
