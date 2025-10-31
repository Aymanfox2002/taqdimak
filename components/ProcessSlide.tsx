import React from "react";

const ProcessSlide = ({i, item}) => {
  return (
    <div className="bg-[var(--teal-300)] relative shadow-xl overflow-clip px-5 py-9 md:pb-16 rounded-3xl rounded-tl-none md:rounded-tl-3xl max-w-[316px] md:max-w-[926px] ms-auto me-auto">
      <div className="absolute md:hidden -top-[33px] -left-[35px] w-[143px] h-[143px] rounded-full process-cycle-gradient text-white text-5xl flex justify-center items-center ">
        {i + 1}
      </div>
      <h2 className="text-3xl font-semibold leading-12 text-[var(--heading-black)] mt-[119px] md:mt-0 mb-7 text-center">
        {item.title}
      </h2>
      <p className="text-[var(--gray)] text-justify md:text-lg leading-8">
        {item.description}
      </p>
    </div>
  );
};

export default ProcessSlide;
