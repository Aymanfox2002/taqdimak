import type { OurClientsSlide } from "@/types";
import Image from "next/image";
import React from "react";

const OurClientsSlide = ({ activeIndex, i, testi }: OurClientsSlide) => {
  return (
    <div
      className={` ms-auto me-auto flex-1 max-w-[300px] md:max-w-full flex items-center cursor-pointer hover:opacity-100 transition-all duration-200 py-10 text-sm md ${
        activeIndex === i
          ? "border-t-3 border-[var(--heading-black)]"
          : "opacity-50"
      }`}
    >
      <div className="w-[75px] h-[75px] rounded-full overflow-clip me-4.5">
        <Image src={testi.avatar} alt="Avatar" />
      </div>
      <div>
        <p className="gradient-text text-xl">{testi.user}</p>
        <p className="text-[14px] text-[var(--gray)]">{testi.email}</p>
      </div>
    </div>
  );
};

export default OurClientsSlide;
