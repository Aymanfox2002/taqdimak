"use client";
import React from "react";
import { Faqs, HeroSection, Mission, OurClients, WhyUs } from "../../sections";
import { useTranslation } from "react-i18next";
import contactImage from "../../public/assets/images/hero_section_about.webp";

const Page = () => {
const { t } = useTranslation();
  return (
    <main>
      <HeroSection
        header={t("about.header")}
        image={contactImage}
      />
      <Mission />
      <WhyUs />
      <OurClients />
      <Faqs />
    </main>
  );
};

export default Page;
