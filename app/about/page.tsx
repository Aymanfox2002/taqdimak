"use client"
import React from "react";
import { Faqs, HeroSection, Mission, OurClients, WhyUs } from "../../sections";
import i18n from "@/lib/i18n";


const Page = () => {

  return (
    <main>
      <HeroSection header={i18n.language === "en" ? "About Us" : "من نحن"} />
      <Mission />
      <WhyUs />
      <OurClients />
      <Faqs />
    </main>
  );
};

export default Page;
