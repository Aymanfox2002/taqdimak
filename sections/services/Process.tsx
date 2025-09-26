"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  BulletsPagination,
  Container,
  ProcessPagination,
  SectionBg,
  TitleSection,
} from "../../components/index";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import i18n from "@/lib/i18n";
const Process = () => {
  const [mainSwiper, setMainSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  type processType = {
    title: string;
    description: string;
  };
  const { t } = useTranslation();
  const processData = t("services.howItWorks.process", {
    returnObjects: true,
  }) as processType[];

  const cyclesTitles = t("services.howItWorks.processOrder", {
    returnObjects: true,
  }) as string[];

  const processArr: processType[] = processData.map((item, i) => ({
    title: item.title,
    description: item.description,
  }));
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
            spaceBetween={20}
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            onSwiper={setMainSwiper}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="pb-10 relative mb-10 cursor-grab"
          >
            {processArr.map((item, i) => (
              <SwiperSlide key={i} className=" py-12">
                <div className="bg-[var(--teal-300)] relative shadow-xl overflow-clip px-5 py-9 md:pb-16 rounded-3xl rounded-tl-none md:rounded-tl-3xl max-w-[316px] md:max-w-[926px] ms-auto me-auto">
                  <div className="absolute md:hidden -top-[33px] -left-[35px] w-[143px] h-[143px] rounded-full process-cycle-gradient text-white text-5xl flex justify-center items-center ">
                    {i + 1}
                  </div>
                  <h2 className="text-3xl font-semibold leading-12 text-[var(--heading-black)] mt-[119px] md:mt-0 mb-7 text-center">
                    {item.title}
                  </h2>
                  <p className="text-[var(--gray)] text-justify md:text-lg leading-8">
                    {item.description}
                  </p>
                </div>
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
