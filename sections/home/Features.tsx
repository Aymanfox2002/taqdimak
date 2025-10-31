"use client";
import React, { useEffect, useState } from "react";
import {
  Container,
  FeatLargeBox,
  FeatSmallBox,
  SectionBg,
  TitleSection,
} from "../../components/index";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const list = t("services.features.list", { returnObjects: true });
  const featuresContent = [
    {
      title: list[0].serviceName,
      desc: list[0].serviceDescription,
      href: "/",
    },
    {
      title: list[1].serviceName,
      desc: list[1].serviceDescription,
      href: "/",
    },
    {
      title: list[2].serviceName,
      desc: list[2].serviceDescription,
      href: "/",
    },
  ];
  if (!mounted) return null;
  return (
    <SectionBg>
      <Container>
        <TitleSection
          title={t("services.features.sectionTitle.title")}
          desc={t("services.features.sectionTitle.description")}
        />
        <div className="block lg:flex">
          <FeatLargeBox featuresContent={featuresContent[0]} />
          <div className="flex-1 flex flex-col m-3 gap-y-6">
            {[featuresContent[1], featuresContent[2]].map((ele, i) => (
              <FeatSmallBox ele={ele} i={i} key={i} />
            ))}
          </div>
        </div>
      </Container>
    </SectionBg>
  );
};

export default Features;
