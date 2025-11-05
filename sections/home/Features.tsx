"use client";
import React from "react";
import {
  Container,
  FeatLargeBox,
  FeatSmallBox,
  SectionBg,
  TitleSection,
} from "../../components/index";
import { useTranslation } from "react-i18next";
import useMounted from "@/hooks/useMounted";
import FeatureData from "@/data/FeatureData";
import type { FeaturesContent } from "@/types";

const Features = () => {
  const { t } = useTranslation();
  const mounted = useMounted();
  const featuresContent = FeatureData();
  const largeBox: FeaturesContent = featuresContent[0];
  const smallBoxes = [featuresContent[1], featuresContent[2]];

  if (!mounted) return null;
  return (
    <SectionBg>
      <Container>
        <TitleSection
          title={t("services.features.sectionTitle.title")}
          desc={t("services.features.sectionTitle.description")}
        />
        <div className="block lg:flex">
          <FeatLargeBox
            desc={largeBox.desc}
            href={largeBox.href}
            title={largeBox.title}
          />
          <div className="flex-1 flex flex-col m-3 gap-y-6">
            {smallBoxes.map((ele, i) => (
              <FeatSmallBox  desc={ele.desc} title={ele.title} href={ele.href} i={i} key={i} />
            ))}
          </div>
        </div>
      </Container>
    </SectionBg>
  );
};

export default Features;
