"use client";
import { useTranslation } from "react-i18next";
import service_image_1 from "@/public/assets/images/service_image_1.webp";
import service_image_2 from "@/public/assets/images/service_image_2.webp";
import service_image_3 from "@/public/assets/images/service_image_3.webp";

export const servicesData = () => {
  const { t } = useTranslation();
  const images = [
    service_image_1,
    service_image_2,
    service_image_3,
    service_image_1,
  ];
  type SlideItem = {
    image: any;
    title: string;
    description: string;
    link: string;
  };
  type ServiceTranslation = {
    serviceName: string;
    serviceDescription: string;
  };

  const servicesData = t("services.servicesList.list", {
    returnObjects: true,
  }) as ServiceTranslation[];

  const slidesData: SlideItem[] = servicesData.map((item, i) => ({
    image: images[i % 4],
    title: item.serviceName,
    description: item.serviceDescription,
    link: "#",
  }));
  return slidesData;
};
