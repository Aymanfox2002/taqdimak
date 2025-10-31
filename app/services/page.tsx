"use client";
import React from "react";
import {
  Faqs,
  HeroSection,
  Process,
  ServicesList,
  SuccessStories,
} from "../../sections";
import servicesImage from "../../public/assets/images/hero_section_services.webp";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();
  return (
    <main>
      <HeroSection header={t("services.header")} image={servicesImage} />
      <ServicesList />
      <Process />
      <Faqs />
      <SuccessStories />
    </main>
  );
};

export default Page;
