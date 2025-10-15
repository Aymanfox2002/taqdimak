`use client`;
import React from "react";
import section_bg from "../public/assets/images/section_bg.webp";

const SectionBg = ({ children, refVal }: { children: React.ReactNode, refVal?: any }) => {
  return (
    <section
      ref={refVal}
      style={{
        backgroundImage: `url(${section_bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="[mask-image:linear-gradient(to_bottom,transparent,black_15%,black_75%,transparent)] my-20 pt-30 pb-60"
    >
      {children}
    </section>
  );
};

export default SectionBg;
