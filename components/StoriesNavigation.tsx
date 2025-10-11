"use client";
import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import i18n from "@/lib/i18n";

const StoriesNavigation = ({
  prevRef,
  nextRef,
  className,
}: {
  prevRef: any;
  nextRef: any;
  className?: string;
}) => {
  return (
    <div className={`flex justify-center gap-5 ${className}`}>
      <button
        ref={prevRef}
        className="storiesArrows cursor-pointer bg-[var(--teal-900)] text-[var(--default)]"
      >
        {i18n.language === "en" ? <IoIosArrowBack /> : <IoIosArrowForward />}
      </button>
      <button
        ref={nextRef}
        className="storiesArrows cursor-pointer bg-[var(--default)] border-4 border-[var(--teal-400)] text-[var(--teal-900)]"
      >
        {i18n.language === "en" ? <IoIosArrowForward /> : <IoIosArrowBack />}
      </button>
    </div>
  );
};

export default StoriesNavigation;
