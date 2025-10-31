import React from "react";

const BulletsPagination = ({
  slidesData,
  mainSwiper,
  activeIndex,
  classname = "",
}) => {
  return (
    <div className={`flex items-center justify-center gap-[9px] ${classname}`}>
      {slidesData.map((slide, index) => (
        <div
          onClick={() => mainSwiper?.slideTo(index)}
          key={index}
          className={`w-[21px] h-[10px] border border-[var(--teal-500)] duration-600 transition-all rounded-[2px] ${
            activeIndex === index ? "bg-[var(--teal-900)] border-none" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default BulletsPagination;
