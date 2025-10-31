import avatar1 from "@/public/assets/images/avatar-1.png";
import avatar2 from "@/public/assets/images/avatar-2.png";
import avatar3 from "@/public/assets/images/avatar-3.png";
import avatar4 from "@/public/assets/images/avatar-4.png";
import avatar5 from "@/public/assets/images/avatar-5.png";
import avatar6 from "@/public/assets/images/avatar-6.png";
import avatar7 from "@/public/assets/images/avatar-7.png";
import avatar8 from "@/public/assets/images/avatar-8.png";
import avatar9 from "@/public/assets/images/avatar-9.png";
import { useTranslation } from "react-i18next";

export const testimonialsData = () => {
  const { t } = useTranslation();
  const testi = t("home.testimonials.members", { returnObjects: true }) as {
    text: string;
    name: string;
    university: string;
  }[];
  const testiImages = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
  ];
  const testimonials = testi.map((ele, i) => ({
    text: testi[i].text,
    imageSrc: testiImages[i].src,
    name: testi[i].name,
    username: testi[i].university,
  }));

  const firstColumn = testimonials.slice(0, 3);
  const secondColumn = testimonials.slice(3, 6);
  const thirdColumn = testimonials.slice(6, 9);
  const testiColumns = {
    firstColumn, secondColumn, thirdColumn
  }
  return testiColumns;
};