"use client";
import React from "react";
import {
  Container,
  SectionBg,
  TitleSection,
  WhyUsItems,
} from "@/components/index";
import { useTranslation } from "react-i18next";
import whyUsData from "@/data/whyUsData";
const WhyUs = () => {
  const { t } = useTranslation();
  const reasons = whyUsData(t);
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
              <WhyUsItems key={index} index={index} feature={feature} />
            ))}
          </div>
        </Container>
      </SectionBg>
    </section>
  );
};

export default WhyUs;
