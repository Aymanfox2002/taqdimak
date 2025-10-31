"use client";
import React from "react";
import { AboutUsSnippet, FormSection, HeroSection } from "../../sections";
import contactImage from "../../public/assets/images/hero_section_contact.webp"
import { useTranslation } from "react-i18next";

const page = () => {
  const { t } = useTranslation();
  return (
    <main>
      <HeroSection
        header={t("contact.header")} image={contactImage}
      />
      <FormSection />
      <AboutUsSnippet />
    </main>
  );
};

export default page;
