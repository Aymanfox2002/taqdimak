"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  BulletsPagination,
  Container,
  ProcessPagination,
  ProcessSlide,
  SectionBg,
  TitleSection,
} from "../../components/index";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";
import { ProcessData } from "@/data/ProcessData";
import { useEffect, useState } from "react";
import useMounted from "@/hooks/useMounted";

const Process = () => {
  const {
    mainSwiper,
    setMainSwiper,
    activeIndex,
    setActiveIndex,
    cyclesTitles,
    processArr,
  } = ProcessData();

  const { t } = useTranslation();

  // Swiper config
  const swiperConfig = {
    spaceBetween: 20,
    slidesPerView: 1,
    modules: [Autoplay],
    autoplay: { delay: 5000 },
    className: "pb-10 relative mb-10 cursor-grab",
  };

  // use the custom hook to check if mounted
  const mounted = useMounted();
  if (!mounted) return null;

  return (
    <SectionBg>
      <Container>
        <TitleSection
          title={t("services.howItWorks.title")}
          desc={t("services.howItWorks.description")}
        />
        <div>
          {/* Desktop pagination */}
          <ProcessPagination
            slidesData={cyclesTitles}
            mainSwiper={mainSwiper}
            activeIndex={activeIndex}
          />
          <Swiper
            key={i18n.language}
            {...swiperConfig}
            onSwiper={setMainSwiper}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {processArr.map((item, i) => (
              <SwiperSlide key={i} className=" py-12">
                <ProcessSlide i={i} item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* mobile pagination */}
          <div className="md:hidden">
            <BulletsPagination
              slidesData={processArr}
              mainSwiper={mainSwiper}
              activeIndex={activeIndex}
            />
          </div>
        </div>
      </Container>
    </SectionBg>
  );
};

export default Process;
