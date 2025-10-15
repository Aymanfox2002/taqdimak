"use client";

import { Container, TitleSection } from "../../components/index";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Autoplay } from "swiper/modules";
import av_7 from "../../public/assets/images/avatar-7.png";
import av_8 from "../../public/assets/images/avatar-8.png";
import av_9 from "../../public/assets/images/avatar-9.png";
//@ts-ignore
import "swiper/css";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function OurClients() {
  const { t, i18n } = useTranslation();
  const testimonialsData = t("about.testimonials", { returnObjects: true });
  const testimonials = [
    {
      text: testimonialsData[0].text,
      user: testimonialsData[0].user,
      email: testimonialsData[0].email,
      avatar: av_7,
    },
    {
      text: testimonialsData[1].text,
      user: testimonialsData[1].user,
      email: testimonialsData[1].email,
      avatar: av_8,
    },
    {
      text: testimonialsData[2].text,
      user: testimonialsData[2].user,
      email: testimonialsData[2].email,
      avatar: av_9,
    },
  ];
  const [mainSwiper, setMainSwiper] = useState<any>(null);
  const [thumbSwiper, setThumbSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="p-tb">
      <Container>
        <TitleSection title={t("about.testimonialsTitle")} />
        {/* Main Swiper */}
        <Swiper
          key={i18n.language}
          onSwiper={setMainSwiper}
          modules={[Controller, Autoplay]}
          autoplay={{ delay: 70000 }}
          controller={{ control: thumbSwiper }}
          className="mb-6"
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
            modules={[Controller]}
            controller={{ control: mainSwiper }}
            slidesPerView={1}
            className="w-full"
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide
                key={i}
                onClick={() => mainSwiper?.slideTo(i)} // 👈 jump to slide index
                className=" "
              >
                <div
                  className={` ms-auto me-auto flex-1 max-w-[300px] md:max-w-full flex items-center cursor-pointer hover:opacity-100 transition-all duration-200 py-10 text-sm md ${
                    activeIndex === i
                      ? "border-t-3 border-[var(--heading-black)]"
                      : "opacity-50"
                  }`}
                >
                  <div className="w-[75px] h-[75px] rounded-full overflow-clip me-4.5">
                    <Image src={t.avatar} alt="Avatar" />
                  </div>
                  <div>
                    <p className="gradient-text text-xl">{t.user}</p>
                    <p className="text-[14px] text-[var(--gray)]">{t.email}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
