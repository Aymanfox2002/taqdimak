"use client";
import { Container, TitleSection } from "../../components/index";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const Faqs = () => {
  const { t } = useTranslation();
  const faqData = t("about.faqs.questions", { returnObjects: true }) as Array<{ question: string; answer: string }>;
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
              <AccordionItem
                key={i}
                value={`item-${i + 1}`}
                className="bg-[var(--default)] max-w-[1129px] ms-auto me-auto mb-6 rounded-2xl lg:px-16 px-5 accordion-border"
              >
                <AccordionTrigger className="lg:text-2xl text-lg cursor-pointer text-[var(--heading-black)] [&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-[var(--gray)]">
                  {ele.question}
                </AccordionTrigger>
                <AccordionContent className="lg:text-lg text-sm leading-8 text-[var(--gray)]">
                  {ele.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};

export default Faqs;
