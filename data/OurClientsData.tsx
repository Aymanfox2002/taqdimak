import { useState } from "react";
import { useTranslation } from "react-i18next";
import av_7 from "@/public/assets/images/avatar-7.png";
import av_8 from "@/public/assets/images/avatar-8.png";
import av_9 from "@/public/assets/images/avatar-9.png";
import { Autoplay, Controller } from "swiper/modules";
import { OurClientsDataProps } from "@/types";

const OurClientsData = () => {
  const { t } = useTranslation();
  const testimonialsData = t("about.testimonials", {
    returnObjects: true,
  }) as OurClientsDataProps[];

  const testimonials: OurClientsDataProps[] = [
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

  const mainSwiperConfig = {
    modules: [Controller, Autoplay],
    autoplay: { delay: 70000 },
    className: "mb-6",
  };

  const paginationSwiperConfig = {
    modules: [Controller],
    slidesPerView: 1,
    className: "w-full",
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  };

  return {
    testimonials,
    mainSwiper,
    thumbSwiper,
    activeIndex,
    setMainSwiper,
    setThumbSwiper,
    setActiveIndex,
    mainSwiperConfig,
    paginationSwiperConfig,
  };
};

export default OurClientsData;
