import Image from "next/image";
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import i18n from "@/lib/i18n";
import { useTranslation } from "react-i18next";

const ServicesSlideCard = ({ slide }) => {
  const { t } = useTranslation();
  const arrowDir =
    i18n.language === "en" ? (
      <ArrowRight className="ms-2 w-4 h-4 text-[var(--gray)]" />
    ) : (
      <ArrowLeft className="ms-2 w-4 h-4 text-[var(--gray)]" />
    );
  return (
    <div className="p-[22px] ms-auto me-auto max-w-[360px] rounded-3xl flex flex-col border border-[var(--teal-500)]">
      <div className="w-full h-[191px] rounded-[10px] overflow-clip relative mb-6">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
      </div>
      <h3 className="text-2xl font-semibold mb-5 gradient-text">
        {slide.title}
      </h3>
      <p className="text-[var(--gray)] line-clamp-4 leading-8 text-justify">
        {slide.description}
      </p>
      <a
        href={slide.link}
        className="mt-9 inline-flex items-center text-[var(--heading-black)] font-medium hover:underline"
      >
        {t("services.showMore")}
        {arrowDir}
      </a>
    </div>
  );
};

export default ServicesSlideCard;
