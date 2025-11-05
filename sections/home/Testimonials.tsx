"use client";
import React, { useRef } from "react";
import {
  Container,
  TitleSection,
  TestimonialsColumn,
} from "../../components/index";
import explode_shape_1 from "../../public/assets/images/explode_shape_1.webp";
import explode_shape_2 from "../../public/assets/images/explode_shape_2.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { testimonialsData } from "@/data/testimonials";
import useMounted from "@/hooks/useMounted";

const Testimonials = () => {
  const mounted = useMounted();
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  // columns data
  const { firstColumn, secondColumn, thirdColumn } = testimonialsData();

  // framer-motion animation
  const { scrollYProgress } = useScroll({
    target: mounted ? sectionRef : undefined,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section className="p-tb relative overflow-x-clip" ref={sectionRef}>
      {mounted && (
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
        </>
      )}
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
    </section>
  );
};

export default Testimonials;
