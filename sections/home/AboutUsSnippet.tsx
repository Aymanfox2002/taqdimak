"use client";
import Image from "next/image";
import {
  Buttons,
  Container,
  SectionBg,
  TitleSection,
} from "../../components/index";
import vase from "../../public/assets/images/vase.webp";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const AboutUsSnippet = () => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);

  const { t } = useTranslation(); 
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -350]);


  return (
    <SectionBg refVal={sectionRef}>
      <Container className="flex flex-col-reverse lg:flex-row">
        <div className="flex-1 flex justify-center items-center p-2">
          <div className="w-[80vw] max-w-[450px] h-[80vw] max-h-[450px] rounded-full bg-linear-to-l from-[#D9D9D9] to-[#737373] relative overflow-clip ">
            <motion.div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                translateX: "-50%",
                translateY,
                width: "85%",
              }}
            >
              <Image
                src={vase}
                alt="Decorative image of a vase"
                style={{ width: "100%", height: "auto" }}
              />
            </motion.div>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <TitleSection
            title={t("home.aboutSnippet.title")}
            desc={t("home.aboutSnippet.description")}
            desktopAlignLeft="lg"
          />
          <div className="flex flex-col gap-4 lg:flex-row lg:mb-0 mb-12">
            <Buttons children={t("home.aboutSnippet.aboutUs")} size="lg" />
            <Buttons
              children={t("home.aboutSnippet.viewServices")}
              variant="outline"
              size="lg"
            />
          </div>
        </div>
      </Container>
    </SectionBg>
  );
};

export default AboutUsSnippet;
