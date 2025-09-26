'use client';
import Image from "next/image";
import { Buttons, Container, TitleSection } from "../../components/index";
import mission_aboutPage from '../../public/assets/images/mission_aboutPage.jpg'
import { useTranslation } from "react-i18next";

const Mission = () => {
  const {t} = useTranslation();
  return (
    <section className="p-tb">
      <Container className="flex flex-col lg:flex-row">
        <div className="flex-1 flex items-center justify-center mb-20">
          <div className="w-[410px] h-[308px] overflow-clip rounded-xl shadow-xl relative">
            <Image src={mission_aboutPage} fill alt="mission" className="object-cover" />
          </div>
        </div>
        <div className="flex-1">
          <TitleSection title={t("about.missionTitle")} marginBottom={10} desktopAlignLeft={'lg'} />
          <p className="text-[var(--gray)] mb-10 line-clamp-3 leading-7">
           {t("about.missionVision")}
          </p>
         <div className="flex justify-center lg:justify-start">
           <Buttons size="lg" href={"#"}>{t("about.contactBtn")}</Buttons>
         </div>
        </div>
      </Container>
    </section>
  );
};

export default Mission;
