"use client";
import React from "react";
import { Container } from "../../components/index";
import { Joti_One, Marhey } from "next/font/google";
import hero_about from "../../public/assets/images/hero_about.webp";
import hero_main_shape from "../../public/assets/images/hero_main_shape.png";
import half_donut from "../../public/assets/images/half-donut-shape.png";
import twisted_torus from "../../public/assets/images/twisted-torus.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import i18n from "@/lib/i18n";

const jotiOne = Joti_One({
  subsets: ["latin"],
  weight: "400",
});

const marhey = Marhey({
  subsets: ["arabic"],
  weight: "700",
});

const HeroSection = ({ header }: { header: string }) => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      aria-labelledby="hero-heading"
      className="bg-cover bg-center overflow-x-clip"
      style={{
        backgroundImage: `url(${hero_about.src})`,
        fontFamily: "cursive",
      }}
    >
      <div
        className={
          "bg-gradient-to-b md:bg-gradient-to-r from-[#003738]/85 via-[#3C0011]/55 via-[#002D2D]/80 to-[#000406]/85 p-tb"
        }
      >
        <Container className="flex flex-col md:flex-row">
          <div className="flex-1 flex md:items-center justify-center md:justify-start">
            <h1
              className={`
                          pt-5 mb-30 text-[var(--default)] text-[44px] md:text-7xl text-center relative w-fit hero-line
                          ${
                            i18n.language === "en"
                              ? jotiOne.className
                              : marhey.className
                          }
                        `}
            >
              {header}
            </h1>
          </div>
          <div className="flex-1 -4 p-2">
            <div className="relative md:h-[434px] max-w-[598px] ms-auto">
              <motion.img
                src={hero_main_shape.src}
                alt="decoration image"
                className="m-auto md:absolute md:left-20 lg:left-30"
                animate={{
                  translateY: [-30, 30],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                ref={heroRef}
                src={half_donut.src}
                width={170}
                alt="decoration image"
                className={`hidden md:absolute lg:block  ${
                  i18n.language === "en" ? "md:-left-20" : "md:-right-20"
                } md:top-0`}
                style={{
                  translateY: translateY,
                }}
              />
              <motion.img
                ref={heroRef}
                src={twisted_torus.src}
                width={170}
                alt="decoration image"
                className={`hidden md:absolute lg:block z-3 ${
                  i18n.language === "en" ? "md:right-0" : "md:left-0"
                } md:-bottom-30`}
                style={{
                  translateY: translateY,
                }}
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;
