import React from "react";
import PricingOption from "../PricingOpiton/PricingOption";

const Pricing = () => {
  const pricingOption = [
    {
      id: 1,
      name: "Free",
      Price: 0,
      features: [
        "Awesome feature",
        "Extra feature",
        "Unnecessary feature",
        "Will never feature",
      ],
    },
    {
      id: 2,
      name: "Medium",
      Price: 9.99,
      features: [
        "Awesome feature",
        "Extra feature",
        "Unnecessary feature",
        "Will never feature",
      ],
    },
    {
      id: 4,
      name: "Premium",
      Price: 29.99,
      features: [
        "Awesome feature",
        "Extra feature",
        "Unnecessary feature",
        "Will never feature",
      ],
    },
  ];
  return (
    <div>
      <h2 className="text-5xl font-bold p-5 text-white bg-blue-400">
        Best Deal For You
      </h2>

      <section className="grid grid-cols-1 md:grid-cols-3 ">
        {pricingOption.map((option) => (
          <PricingOption key={PricingOption.id} option={option}></PricingOption>
        ))}
      </section>
    </div>
  );
};

export default Pricing;
