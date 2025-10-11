"use client";
import {
  BulletsPagination,
  Container,
  SectionBg,
  StoriesNavigation,
  TitleSection,
} from "../../components/index";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../lib/i18n";
import what_they_say_1 from "../../public/assets/images/what_they_say_1.webp";
import what_they_say_2 from "../../public/assets/images/what_they_say_2.webp";
import what_they_say_3 from "../../public/assets/images/what_they_say_3.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const SuccessStories = () => {
  // setup the custom arrows
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  // setup the custom paginations
  const [mainSwiper, setMainSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { t } = useTranslation();
  const successStoriesData = t("services.successStorie.list", {
    returnObjects: true,
  });
  const successStoriesArr = successStoriesData.map((item, i) => ({
    image: [what_they_say_1, what_they_say_2, what_they_say_3][i % 3],
    title: item.title,
    description: item.description,
    name: item.name,
    position: item.position,
  }));

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
            modules={[Navigation]}
            navigation={{
              nextEl: nextRef.current,
              prevEl: prevRef.current,
            }}
            onSwiper={setMainSwiper}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              1024: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            className="mb-8"
          >
            {successStoriesArr.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="lg:flex cursor-grab ms-auto me-auto m-10  flex-col lg:flex-row shadow-xl overflow-clip rounded-3xl bg-[var(--teal-100)] max-w-[382px] lg:max-w-none">
                  <div className="h-[382px] lg:h-auto overflow-clip mb-12 lg:mb-0 relative lg:basis-3/8 border min-w-5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="px-6 pb-12 text-center lg:text-left lg:basis-5/8 lg:px-20 lg:py-36">
                    <h3 className="text-2xl text-[var(--heading-black)] font-bold mb-3.5">
                      "{item.title}"
                    </h3>
                    <p className="text-[var(--gray)] leading-7  mb-5">
                      {item.description}
                    </p>
                    <h4 className="text-lg font-bold text-[var(--heading-black)] mb-2">
                      {item.name}
                    </h4>
                    <p className="text-[var(--gray)]">
                      <i>'{item.position}'</i>
                    </p>
                  </div>
                </div>
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
