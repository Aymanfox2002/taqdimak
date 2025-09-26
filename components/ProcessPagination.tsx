import React from "react";

const ProcessPagination = ({ slidesData, mainSwiper, activeIndex }) => {
  return (
    <div className="hidden md:flex items-start justify-center gap-[80px]">
      {slidesData.map((slide, index) => (
        <div
          onClick={() => mainSwiper?.slideTo(index)}
          key={index}
          className="text-center cursor-pointer select-none flex flex-col items-center"
        >
          <div
            className={`w-[78px] h-[78px]  mb-3 text-3xl text-[var(--heading-black)] border-3 border-[var(--teal-900)] duration-600 transition-all rounded-full bg-[var(--teal-500)] flex justify-center items-center ${
              activeIndex === index &&
              "text-white process-cycle-gradient border-none shadow-2xl scale-120"
            }`}
          >
            {index + 1}
          </div>
          <p className="text-lg lg:text-2xl text-[var(--heading-black)] text-shadow-lg">
            {slide.toUpperCase()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProcessPagination;
