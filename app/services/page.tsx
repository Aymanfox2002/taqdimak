import React from "react";
import { Faqs, HeroSection, Process, ServicesList, SuccessStories } from "../../sections";

const Page = () => {
  return (
    <main>
      <HeroSection />
      <ServicesList />
      <Process />
      <Faqs />
      <SuccessStories />
    </main>
  );
};

export default Page;
