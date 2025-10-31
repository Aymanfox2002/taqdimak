"use client";
import {
  Container,
  OurClientsSlide,
  TitleSection,
} from "../../components/index";
import { Swiper, SwiperSlide } from "swiper/react";
//@ts-ignore
import "swiper/css";
import { useTranslation } from "react-i18next";
import OurClientsData from "@/data/OurClientsData";
import useMounted from "@/hooks/useMounted";

export default function OurClients() {
  const {
    testimonials,
    mainSwiper,
    thumbSwiper,
    activeIndex,
    setMainSwiper,
    setThumbSwiper,
    setActiveIndex,
    mainSwiperConfig,
    paginationSwiperConfig,
  } = OurClientsData();
  const { t, i18n } = useTranslation();

  // use the custom hook to check if mounted
  const mounted = useMounted();
  if (!mounted) return null;
  return (
    <section className="p-tb">
      <Container>
        <TitleSection title={t("about.testimonialsTitle")} />
        {/* Main Swiper */}
        <Swiper
          controller={{ control: thumbSwiper }}
          key={i18n.language}
          onSwiper={setMainSwiper}
          {...mainSwiperConfig}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} className="mb-12">
              <p className="text-center text-2xl text-[var(--gray)] px-[10vw] leading-9 cursor-grab">
                {t.text}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Swiper */}
        <div className="flex border-t border-[var(--teal-300)]">
          <Swiper
            key={i18n.language}
            onSwiper={setThumbSwiper}
            {...paginationSwiperConfig}
            controller={{ control: mainSwiper }}
          >
            {testimonials.map((testi, i) => (
              <SwiperSlide
                key={i}
                onClick={() => mainSwiper?.slideTo(i)} // 👈 jump to slide index
              >
                <OurClientsSlide
                  activeIndex={activeIndex}
                  i={i}
                  testi={testi}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
