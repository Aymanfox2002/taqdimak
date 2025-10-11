"use client";
import React from "react";
import { AboutUsSnippet, FormSection, HeroSection } from "../../sections";
import i18n from "@/lib/i18n";

const page = () => {
  return (
    <main>
      <HeroSection
        header={i18n.language === "en" ? "Contact Us" : "تواصل معنا"}
      />
      <FormSection />
      <AboutUsSnippet />
    </main>
  );
};

export default page;
