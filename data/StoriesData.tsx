import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import what_they_say_1 from "@/public/assets/images/what_they_say_1.webp";
import what_they_say_2 from "@/public/assets/images/what_they_say_2.webp";
import what_they_say_3 from "@/public/assets/images/what_they_say_3.webp";
import { Navigation } from "swiper/modules";
import { SuccessStoriesProps } from "@/types";

const StoriesData = () => {
  // setup the custom arrows
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  // setup the custom paginations
  const [mainSwiper, setMainSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { t } = useTranslation();

  const successStoriesData = t("services.successStorie.list", {
    returnObjects: true,
  }) as any;

  const successStoriesArr = successStoriesData.map(
    (item: SuccessStoriesProps, i: number) => ({
      image: [what_they_say_1, what_they_say_2, what_they_say_3][i % 3],
      title: item.title,
      description: item.description,
      name: item.name,
      position: item.position,
    })
  );

  const swiperConfig = {
    modules: [Navigation],
    spaceBetween: 20,
    slidesPerView: 1,
    breakpoints: {
      1024: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      0: { slidesPerView: 1 },
    },
    className: "mb-8",
    navigation: {
      nextEl: nextRef.current,
      prevEl: prevRef.current,
    },
  };

  return {
    prevRef,
    nextRef,
    mainSwiper,
    setMainSwiper,
    activeIndex,
    setActiveIndex,
    successStoriesArr,
    swiperConfig,
  };
};

export default StoriesData;
