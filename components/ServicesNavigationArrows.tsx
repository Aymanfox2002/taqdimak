import i18n from "@/lib/i18n";
import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const ServicesNavigationArrows = ({ prevRef, nextRef }: {prevRef:any ,nextRef:any }) => {
  return (
    <>
      <div className="hidden md:block absolute -left-10 top-[50%] text-[var(--gray)] text-[52px]">
        <button
          className="cursor-pointer"
          ref={i18n.language === "en" ? prevRef : nextRef}
        >
          <HiArrowLeft />
        </button>
      </div>
      <div className="hidden md:block absolute -right-10 top-[50%] text-[var(--gray)] text-[52px]">
        <button
          className="cursor-pointer"
          ref={i18n.language === "en" ? nextRef : prevRef}
        >
          <HiArrowRight />
        </button>
      </div>
    </>
  );
};

export default ServicesNavigationArrows;
