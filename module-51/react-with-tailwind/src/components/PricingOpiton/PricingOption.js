import React from "react";
import Features from "../Features/Features";

const PricingOption = ({ option }) => {
  const { features } = option;
  return (
    <div className="bg-blue-400 mt-11 m-3 rounded-md">
      <h2 className="text-3xl font-bold">{option.name}</h2>
      <h2 className="text-xl text-white font-semibold">{option.Price}</h2>
      <div className="ml-5">
        {features.map((feature, idx) => (
          <Features key={idx} feature={feature}></Features>
        ))}
      </div>
      <button className="px-4 py-2 bg-green-700 text-white font-bold text-2xl w-full shadow-2xl">
        Buy Now
      </button>
    </div>
  );
};

export default PricingOption;
