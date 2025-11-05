"use client";
import { TFunction } from "i18next";
import { FaBolt, FaPaintRoller, FaThumbsUp } from "react-icons/fa6";


const whyUsData = (t: TFunction) => {
     const reasons = [
      {
        icon: <FaBolt size={80} className="text-white" />,
        title: t("about.whyUs.performance.title"),
        description: t("about.whyUs.performance.desc"),
      },
      {
        icon: <FaPaintRoller size={80} className="text-white" />,
        title: t("about.whyUs.Design.title"),
        description: t("about.whyUs.Design.desc"),
      },
      {
        icon: <FaThumbsUp size={80} className="text-white" />,
        title: t("about.whyUs.ux.title"),
        description: t("about.whyUs.ux.desc"),
      },
    ];

  return reasons
}

export default whyUsData