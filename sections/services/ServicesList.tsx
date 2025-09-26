"use client";
import React, { useRef, useState } from "react";
import {
  BulletsPagination,
  Container,
  TitleSection,
} from "../../components/index";
import service_image_1 from "../../public/assets/images/service_image_1.jpg";
import service_image_2 from "../../public/assets/images/service_image_2.jpg";
import service_image_3 from "../../public/assets/images/service_image_3.jpg";

import { HiArrowLeft } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";

type SlideItem = {
  image: any;
  title: string;
  description: string;
  link: string;
};

const ServicesList = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  //   setup the custom pagination
  const [mainSwiper, setMainSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  type ServiceTranslation = {
    serviceName: string;
    serviceDescription: string;
  };

  const { t } = useTranslation();
  const servicesData = t("services.servicesList.list", {
    returnObjects: true,
  }) as ServiceTranslation[];

  const slidesData: SlideItem[] = servicesData.map((item, i) => ({
    image: [service_image_1, service_image_2, service_image_3, service_image_1][
      i % 4
    ],
    title: item.serviceName,
    description: item.serviceDescription,
    link: "#",
  }));

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
                <div className="p-[22px] ms-auto me-auto max-w-[360px] rounded-3xl flex flex-col border border-[var(--teal-500)]">
                  <div className="w-full h-[191px] rounded-[10px] overflow-clip relative mb-6">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-5 gradient-text">
                    {slide.title}
                  </h3>
                  <p className="text-[var(--gray)] line-clamp-4 leading-8 text-justify">
                    {slide.description}
                  </p>
                  <a
                    href={slide.link}
                    className="mt-9 inline-flex items-center text-[var(--heading-black)] font-medium hover:underline"
                  >
                    Learn More
                    {i18n.language === "en" ? (
                      <ArrowRight className="ms-2 w-4 h-4 text-[var(--gray)]" />
                    ) : (
                      <ArrowLeft className="ms-2 w-4 h-4 text-[var(--gray)]" />
                    )}
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Navigation Arrows */}
          <>
            <div className="hidden md:block absolute -left-10 top-[50%] text-[var(--gray)] text-[52px]">
              <button
                className="cursor-pointer"
                ref={i18n.language === "en" ? prevRef : nextRef}
              >
                <HiArrowLeft />
              </button>
            </div>
            <div className="hidden md:block absolute -right-10 top-[50%] text-[var(--gray)] text-[52px]">
              <button
                className="cursor-pointer"
                ref={i18n.language === "en" ? nextRef : prevRef}
              >
                <HiArrowRight />
              </button>
            </div>
          </>
          {/* Custom Pagination */}
          <div className="md:hidden">
            <BulletsPagination
              slidesData={slidesData}
              mainSwiper={mainSwiper}
              activeIndex={activeIndex}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesList;
