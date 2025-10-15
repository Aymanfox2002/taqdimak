"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../lib/i18n";
import { Joti_One, Marhey } from "next/font/google";
import { Buttons, Container } from "../../components/index";
import heroImageHomePage from "../../public/assets/images/heroImageHomePage.png";
import blob_1 from "../../public/assets/images/blob_1.svg";
import blob_2 from "../../public/assets/images/blob_2.svg";

const joti_one = Joti_One({ subsets: ["latin"], weight: "400" });
const marhey = Marhey({ subsets: ["arabic"], weight: "700" });

const fonts = {
  en: joti_one,
  ar: marhey,
};

const Hero = () => {
  // to avoid hydration mismatch
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);

  const { t } = useTranslation();
  const currentLng = mount && i18n.language === "en" ? fonts.en : fonts.ar;

  if (!mount) return null;
  return (
    <div className="relative pt-[76px] overflow-x-clip py-20 z-0">
      <div
        className={`${
          mount && i18n.language === "en"
            ? "lg:-top-[650px] lg:-right-[400px] lg:w-[1100px]"
            : "lg:-top-[650px] lg:right-[550px] xl:right-[950px] lg:w-[1100px]"
        } -right-[100px] w-[900px] md:w-[1200px] absolute -z-1 -top-[208px] md:-top-[300px]`}
      >
        <Image src={blob_1} alt={"Decoration image"} className="w-full" />
      </div>
      <div
        className={`hidden lg:block absolute -z-1  ${
          mount && i18n.language === "en"
            ? "-left-[170px]"
            : "rotate-180 -right-[170px]"
        }`}
      >
        <Image src={blob_2} alt={"Decoration image"} className="w-full " />
      </div>
      <Container className="lg:flex">
        <div className="text-center lg:w-[478px] lg:text-start  items-center">
          <h1
            className={`${
              currentLng?.className || ""
            } text-[36px] text-base/13 tracking-tight gradient-heading`}
          >
            {t("home.hero.mainTitle")}
          </h1>
          <p className="text-[var(--gray)] mt-8">{t("home.hero.paragraph")}</p>
          <div className="mt-10 flex gap-5 justify-center lg:justify-start">
            <Buttons href="/" size="lg">
              {t("home.hero.applyNow")}
            </Buttons>
            <Buttons href="/" size="lg" variant={"outline"}>
              {t("home.hero.viewServices")}
            </Buttons>
          </div>
        </div>
        <div className="md:flex-1 ms-5 flex justify-end mt-20 lg:mt-0 lg:ps-10">
          <Image
            src={heroImageHomePage}
            className=""
            width={625}
            alt={"Hero Image"}
          />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
