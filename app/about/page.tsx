"use client";
import React from "react";
import { Faqs, HeroSection, Mission, OurClients, WhyUs } from "../../sections";
import i18n from "@/lib/i18n";
import contactImage from "../../public/assets/images/hero_section_about.webp";

const Page = () => {
  return (
    <main>
      <HeroSection
        header={i18n.language === "en" ? "About Us" : "من نحن"}
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
