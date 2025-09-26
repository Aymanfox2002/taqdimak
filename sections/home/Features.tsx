"use client";
import React from "react";
import { Container, SectionBg, TitleSection } from "../../components/index";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import i18n from "../../lib/i18n";

const Features = () => {
  const { t } = useTranslation();
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
  return (
    <SectionBg>
      <Container>
        <TitleSection
          title={t("services.features.sectionTitle.title")}
          desc={t("services.features.sectionTitle.description")}
        />
        <div className="block lg:flex">
          {/* primary box */}
          <div className="flex-1 m-3 relative overflow-clip h-[358px] md:h-[400px] lg:h-[568px] feat_0_Bg feat_bg rounded-[var(--radius-primary)] shadow-xl">
            {/* Overlay */}
            <div className="bg-black/50 absolute left-0 top-0 w-full h-full flex" />

            <div className="text-white text-center h-full flex flex-col justify-end p-10 relative">
              <h1 className="text-xl mb-2.5 md:text-4xl md:font-bold">
                {featuresContent[0].title}
              </h1>
              <p className="text-sm md:text-lg font-light text-white/80 mb-1.5 lg:mb-5 w-[80%] ms-auto me-auto">
                {featuresContent[0].desc}
              </p>
              <div>
                <Link
                  href={featuresContent[0].href}
                  className="text-sm md:text-lg flex items-center justify-center gap-2"
                >
                  {i18n.language === "en" ? "Learn more" : "اطلع على المزيد"}
                  <span>
                    <FaLongArrowAltRight
                      className={`${i18n.language === "ar" && "rotate-180"} `}
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* secondary boxes container */}
          <div className="flex-1 flex flex-col m-3 gap-y-6">
            {/* first box */}
            {[featuresContent[1], featuresContent[2]].map((ele, i) => (
              <div
                className={`relative flex-1 overflow-clip feat_${
                  i + 1
                }_Bg  feat_bg rounded-[var(--radius-primary)] shadow-xl p-8`}
                key={i}
              >
                <div className="bg-black/50 absolute left-0 top-0 w-full h-full" />
                <div className="text-white relative text-center md:text-start">
                  <h1 className="text-lg mb-2.5 md:text-3xl">{ele.title}</h1>
                  <p className="text-sm lg:text-lg font-light text-white/80 mb-1.5 w-[70%] ms-auto me-auto md:ms-0 md:mb-10">
                    {ele.desc}
                  </p>
                  <div className="">
                    <Link
                      href={ele.href}
                      className="text-sm  md:text-lg flex items-center justify-center md:justify-start gap-2"
                    >
                      {i18n.language === "en"
                        ? "Learn more"
                        : "اطلع على المزيد"}
                      <span>
                        <FaLongArrowAltRight
                          className={`${
                            i18n.language === "ar" && "rotate-180"
                          } `}
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </SectionBg>
  );
};

export default Features;
