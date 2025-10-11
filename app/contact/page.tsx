"use client";
import React from "react";
import { AboutUsSnippet, FormSection, HeroSection } from "../../sections";
import i18n from "@/lib/i18n";
import contactImage from "../../public/assets/images/hero_section_contact.webp"


const page = () => {
  return (
    <main>
      <HeroSection
        header={i18n.language === "en" ? "Contact Us" : "تواصل معنا"} image={contactImage}
      />
      <FormSection />
      <AboutUsSnippet />
    </main>
  );
};

export default page;
