"use client"
import React from "react";
import { Faqs, HeroSection, Process, ServicesList, SuccessStories } from "../../sections";
import i18n from "@/lib/i18n";

const Page = () => {
  return (
    <main>
      <HeroSection header={i18n.language === "en" ? "Our Services" : "الخدمات"} />
      <ServicesList />
      <Process />
      <Faqs />
      <SuccessStories />
    </main>
  );
};

export default Page;
