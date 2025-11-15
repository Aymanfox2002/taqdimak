import React, { JSX } from "react";
import type {Bullets} from "@/types"

/**
 * ---
 * 
 * Renders clickable pagination bullets for a Swiper slider.
 *
 * Highlights the active bullet and allows users to switch slides
 * by clicking any bullet.
 * 
 *---
 * @param {Bullets} props - Component props.
 * @returns {JSX.Element} Pagination element used in Swiper sliders.
 */
const BulletsPagination = ({
  slidesData,
  mainSwiper,
  activeIndex,
  classname = "",
}: Bullets): JSX.Element => {
  return (
    <div className={`flex items-center justify-center gap-[9px] ${classname}`}>
      {slidesData.map((_:any, index:number) => (
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
