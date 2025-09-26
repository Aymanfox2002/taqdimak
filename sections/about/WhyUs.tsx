"use client";
import React from "react";
import { Container, SectionBg, TitleSection } from "../../components/index";
import {
  FaBolt,
  FaPaintRoller,
  FaThumbsUp,
} from "react-icons/fa6";
import { useTranslation } from "react-i18next";
const WhyUs = () => {
    const { t } = useTranslation();
  const reasons = [
    {
      icon: <FaBolt size={80} className="text-white" />,
      title: t("about.whyUs.performance.title"),
      description:
        t("about.whyUs.performance.desc"),
    },
    {
      icon: <FaPaintRoller size={80} className="text-white" />,
      title: t("about.whyUs.Design.title"),
      description: t("about.whyUs.Design.desc"),
    },
    {
      icon: <FaThumbsUp size={80} className="text-white" />,
      title: t("about.whyUs.ux.title"),
      description: t("about.whyUs.ux.desc"),
    },
  ];
  return (
    <section>
      <SectionBg>
        <Container>
          <TitleSection
            title={t("about.whyUs.title")}
            desc={t("about.whyUs.desc")}
          />

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch p-6">
            {reasons.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 w-full md:w-1/3"
              >
                {/* Circle with Icon */}
                <div className="w-[160px] h-[160px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#003F40] to-[#00A3A6] mb-4">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-3xl text-[var(--heading-black)] font-semibold mb-5">{feature.title}</h3>

                {/* Description */}
                <p className="text-[var(--gray)] text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </SectionBg>
    </section>
  );
};

export default WhyUs;
