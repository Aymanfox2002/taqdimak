`use client`;
import React from "react";

type titleTypes = {
  title: string;
  desc?: string;
  desktopAlignLeft?: string;
  marginBottom?: number;
};

const TitleSection = ({ title, desc, desktopAlignLeft, marginBottom = 20 }: titleTypes) => {
  return (
    <div
      className={`mb-${marginBottom} font-black
       flex justify-center text-center
       ${
         desktopAlignLeft &&
         `${desktopAlignLeft}:flex ${desktopAlignLeft}:justify-start ${desktopAlignLeft}:text-start`
       }`}
    >
      <div className=" max-w-[900px]">
        <h2 className={`text-4xl gradient-heading ${desc && "mb-4"}`}>
          {title}
        </h2>
        {desc && (
          <p className="text-lg font-light text-[var(--gray)]">{desc}</p>
        )}
      </div>
    </div>
  );
};

export default TitleSection;
