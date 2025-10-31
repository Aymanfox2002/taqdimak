import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FaqItem = ({ i, ele }) => {
  return (
    <AccordionItem
      key={i}
      value={`item-${i + 1}`}
      className="bg-[var(--default)] max-w-[1129px] mx-auto mb-6 rounded-2xl lg:px-16 px-5 accordion-border"
    >
      <AccordionTrigger className="lg:text-2xl text-lg cursor-pointer text-[var(--heading-black)] [&>svg]:h-6 [&>svg]:w-6 [&>svg]:text-[var(--gray)]">
        {ele.question}
      </AccordionTrigger>
      <AccordionContent className="lg:text-lg text-sm leading-8 text-[var(--gray)]">
        {ele.answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FaqItem;
