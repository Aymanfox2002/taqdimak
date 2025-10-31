"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

type testimonialsTypes = {
  text: string;
  imageSrc: string;
  name: string;
  username: string;
}[];

type testiTypes = {
  className?: string;
  testimonials: testimonialsTypes;
  duration?: number;
};

const TestimonialsColumn = (props: testiTypes) => (
  <div className={props.className}>
    <motion.div
      animate={{
        y: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }, i) => (
            <div
              className="p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full"
              key={i}
            >
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight text-[var(--gray)]">
                    {username}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export default TestimonialsColumn