import Image from "next/image";
import React from "react";

const StoriesSlide = ({ item }) => {
  return (
    <div className="lg:flex cursor-grab ms-auto me-auto m-10  flex-col lg:flex-row shadow-xl overflow-clip rounded-3xl bg-[var(--teal-100)] max-w-[382px] lg:max-w-none">
      <div className="h-[382px] lg:h-auto overflow-clip mb-12 lg:mb-0 relative lg:basis-3/8 border min-w-5">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="px-6 pb-12 text-center lg:text-left lg:basis-5/8 lg:px-20 lg:py-36">
        <h3 className="text-2xl text-[var(--heading-black)] font-bold mb-3.5">
          "{item.title}"
        </h3>
        <p className="text-[var(--gray)] leading-7  mb-5">{item.description}</p>
        <h4 className="text-lg font-bold text-[var(--heading-black)] mb-2">
          {item.name}
        </h4>
        <p className="text-[var(--gray)]">
          <i>'{item.position}'</i>
        </p>
      </div>
    </div>
  );
};

export default StoriesSlide;
