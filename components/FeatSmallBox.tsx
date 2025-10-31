
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import i18n from "@/lib/i18n";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const FeatSmallBox = ({ ele, i }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`relative flex-1 overflow-clip feat_${
        i + 1
      }_Bg  feat_bg rounded-[var(--radius-primary)] shadow-xl p-8`}
      key={i}
    >
      <div className="bg-black/50 absolute left-0 top-0 w-full h-full" />
      <div className="text-white relative text-center md:text-start">
        <h1 className="text-lg mb-2.5 md:text-3xl">{ele.title}</h1>
        <p className="text-sm lg:text-lg font-light text-white/80 mb-1.5 w-[70%] ms-auto me-auto md:ms-0 md:mb-10">
          {ele.desc}
        </p>
        <div className="">
          <Link
            href={ele.href}
            className="text-sm  md:text-lg flex items-center justify-center md:justify-start gap-2"
          >
            {t("services.showMore")}
            <span>
              <FaLongArrowAltRight
                className={`${i18n.language === "ar" && "rotate-180"} `}
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatSmallBox;
