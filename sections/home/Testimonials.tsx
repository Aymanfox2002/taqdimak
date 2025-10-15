"use client";
import React, { useEffect, useRef, useState } from "react";
import { Container, TitleSection } from "../../components/index";

import avatar1 from "../../public/assets/images/avatar-1.png";
import avatar2 from "../../public/assets/images/avatar-2.png";
import avatar3 from "../../public/assets/images/avatar-3.png";
import avatar4 from "../../public/assets/images/avatar-4.png";
import avatar5 from "../../public/assets/images/avatar-5.png";
import avatar6 from "../../public/assets/images/avatar-6.png";
import avatar7 from "../../public/assets/images/avatar-7.png";
import avatar8 from "../../public/assets/images/avatar-8.png";
import avatar9 from "../../public/assets/images/avatar-9.png";
import explode_shape_1 from "../../public/assets/images/explode_shape_1.webp";
import explode_shape_2 from "../../public/assets/images/explode_shape_2.webp";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";

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

const Testimonials = () => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  const testi = t("home.testimonials.members", { returnObjects: true }) as {
    text: string;
    name: string;
    university: string;
  }[];
  const testiImages = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
  ];
  const testimonials = testi.map((ele, i) => ({
    text: testi[i].text,
    imageSrc: testiImages[i].src,
    name: testi[i].name,
    username: testi[i].university,
  }));

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section className="p-tb relative overflow-x-clip" ref={sectionRef}>
      {mount && (
        <>
          <motion.img
            src={explode_shape_1.src}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden lg:block absolute xl:left-10 -left-10 xl:-top-32 -top-50"
            style={{
              translateY,
            }}
          />

          <motion.img
            src={explode_shape_2.src}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden lg:block absolute xl:right-20 right-0 -bottom-32 "
            style={{
              translateY,
            }}
          />
      <Container>
        <TitleSection
          title={t("home.testimonials.sectionTitle.title")}
          desc={t("home.testimonials.sectionTitle.description")}
          />
        <div className="flex justify-center gap-6 mt-20 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
            />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
            />
        </div>
      </Container>
            </>
          )}
    </section>
  );
};

export default Testimonials;
