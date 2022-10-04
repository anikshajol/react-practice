import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Features = ({ feature }) => {
  return (
    <div>
      <section className="flex items-center">
        <CheckCircleIcon className="h-6 w-6 text-green-600" />
        <p className="ml-3 text-lg p-3">{feature}</p>
      </section>
    </div>
  );
};

export default Features;
