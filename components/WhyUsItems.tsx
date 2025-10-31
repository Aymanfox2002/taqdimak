import React from "react";

const WhyUsItems = ({index, feature}) => {
  return (
    <div
      key={index}
      className="flex flex-col items-center text-center p-6 w-full md:w-1/3"
    >
      {/* Circle with Icon */}
      <div className="w-[160px] h-[160px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#003F40] to-[#00A3A6] mb-4">
        {feature.icon}
      </div>

      {/* Title */}
      <h3 className="text-3xl text-[var(--heading-black)] font-semibold mb-5">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-[var(--gray)] text-sm">{feature.description}</p>
    </div>
  );
};

export default WhyUsItems;
