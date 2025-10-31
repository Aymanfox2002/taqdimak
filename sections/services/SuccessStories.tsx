"use client";
import {
  BulletsPagination,
  Container,
  SectionBg,
  StoriesNavigation,
  StoriesSlide,
  TitleSection,
} from "../../components/index";
import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../lib/i18n";
import { Swiper, SwiperSlide } from "swiper/react";
import StoriesData from "@/data/StoriesData";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
import useMounted from "@/hooks/useMounted";

const SuccessStories = () => {
  const { t } = useTranslation();

  // Get data and refs from StoriesData
  const {
    prevRef,
    nextRef,
    mainSwiper,
    setMainSwiper,
    activeIndex,
    setActiveIndex,
    successStoriesArr,
    swiperConfig
  } = StoriesData();


  // use the custom hook to check if mounted
  const mounted = useMounted();
  if (!mounted) return null;

  return (
    <SectionBg>
      <Container>
        <div className="flex">
          <div className="flex-1">
            <TitleSection
              title={t("services.successStorie.title")}
              desc={t("services.successStorie.description")}
              desktopAlignLeft={"md"}
              marginBottom={0}
            />
          </div>
          <div className="flex-1 hidden md:block justify-end items-end lg:flex">
            <StoriesNavigation prevRef={prevRef} nextRef={nextRef} />
          </div>
        </div>
        <div>
          <Swiper
            key={i18n.language}
            onSwiper={setMainSwiper}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            {...swiperConfig}
          >
            {successStoriesArr.map((item, i) => (
              <SwiperSlide key={i}>
                <StoriesSlide item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Pagination */}
          <div className="md:hidden">
            <BulletsPagination
              slidesData={successStoriesArr}
              mainSwiper={mainSwiper}
              activeIndex={activeIndex}
            />
          </div>
        </div>
      </Container>
    </SectionBg>
  );
};

export default SuccessStories;
