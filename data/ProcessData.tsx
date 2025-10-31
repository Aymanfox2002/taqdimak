"use client"
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const ProcessData = () => {
  const [mainSwiper, setMainSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  type processType = {
    title: string;
    description: string;
  };
  const { t } = useTranslation();
  const processData = t("services.howItWorks.process", {
    returnObjects: true,
  }) as processType[];

  const cyclesTitles = t("services.howItWorks.processOrder", {
    returnObjects: true,
  }) as string[];

  const processArr: processType[] = processData.map((item, i) => ({
    title: item.title,
    description: item.description,
  }));

 
  return {
    mainSwiper,
    setMainSwiper,
    activeIndex,
    setActiveIndex,
    cyclesTitles,
    processArr,
  };
};

