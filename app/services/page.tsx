"use client"
import React from "react";
import { Faqs, HeroSection, Process, ServicesList, SuccessStories } from "../../sections";
import i18n from "@/lib/i18n";
import servicesImage from "../../public/assets/images/hero_section_services.webp"


const Page = () => {
  return (
    <main>
      <HeroSection  header={i18n.language === "en" ? "Our Services" : "الخدمات"} image={servicesImage} />
      <ServicesList />
      <Process />
      <Faqs />
      <SuccessStories />
    </main>
  );
};

export default Page;
