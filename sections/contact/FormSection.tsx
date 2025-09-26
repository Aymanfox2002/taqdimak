"use client";
import React from "react";
import { ContactForm, Container } from "../../components/index";
import i18n from "@/lib/i18n";
const FormSection = () => {
  return (
    <>
      <section className="relative contact-bg py-9 md:py-70">
        <div className="absolute left-0 top-0 w-full h-full bg-black opacity-60" />
        <div
          className={`bg-[var(--teal-200)] w-[100%] md:w-[30%] h-[30%] md:h-[100%] absolute ${
            i18n.language === "en" ? "left-0" : "right-0"
          } top-0`}
        />
        <Container>
          <ContactForm />
        </Container>
      </section>
    </>
  );
};

export default FormSection;
