"use client";
import { Container, FaqItem, TitleSection } from "../../components/index";
import React from "react";
import { Accordion } from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

type faqType = {
  question: string;
  answer: string;
};

const Faqs = () => {
  const { t } = useTranslation();
  const faqData = t("about.faqs.questions", {
    returnObjects: true,
  }) as faqType[];
  return (
    <section className="p-tb">
      <Container>
        <TitleSection
          title={t("about.faqs.title")}
          desc={t("about.faqs.description")}
        />
        <div>
          <Accordion type="single" collapsible defaultValue={`item-1`}>
            {faqData.map((ele: any, i) => (
              <FaqItem key={i} i={i} ele={ele} />
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};
export default Faqs;
