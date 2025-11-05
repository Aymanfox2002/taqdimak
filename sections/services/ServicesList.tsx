"use client";
import {
  BulletsPagination,
  Container,
  ServicesSlideCard,
  TitleSection,
} from "../../components/index";
import { servicesData } from "@/data/servicesData";
import useServicesSwiperArrows from "@/hooks/useServicesSwiperArrows";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";
import ServicesNavigationArrows from "@/components/ServicesNavigationArrows";
import useMounted from "@/hooks/useMounted";


const ServicesList = () => {
  const { t } = useTranslation();
  const slidesData = servicesData();
  const {
    prevRef,
    nextRef,
    mainSwiper,
    setMainSwiper,
    activeIndex,
    setActiveIndex,
  } = useServicesSwiperArrows();

  // use the custom hook to check if mounted
  const mounted = useMounted();
  if (!mounted) return null;

  return (
    <section>
      <Container className="p-tb relative">
        <TitleSection
          title={t("services.servicesList.title")}
          desc={t("services.servicesList.description")}
        />
        <div>
          <Swiper
            key={i18n.language}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              1024: { slidesPerView: 3, pagination: false }, // Desktop
              768: { slidesPerView: 2 }, // Tablet
              0: { slidesPerView: 1 }, // Mobile
            }}
            onSwiper={setMainSwiper}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className="pb-10 relative mb-10 cursor-grab"
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <ServicesSlideCard slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Navigation Arrows */}
          <ServicesNavigationArrows prevRef={prevRef} nextRef={nextRef} />

          {/* Custom Pagination */}
          <BulletsPagination
            slidesData={slidesData}
            mainSwiper={mainSwiper}
            activeIndex={activeIndex}
            classname={"md:hidden"}
          />
        </div>
      </Container>
    </section>
  );
};

export default ServicesList;
