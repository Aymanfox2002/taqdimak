import Link from "next/link";
import React from "react";
import i18n from "@/lib/i18n";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import type { FeaturesContent } from "@/types";

const FeatLargeBox = ({ title, href, desc }: FeaturesContent) => {
  const { t } = useTranslation();
  return (
    <div className="flex-1 m-3 relative overflow-clip h-[358px] md:h-[400px] lg:h-[568px] feat_0_Bg feat_bg rounded-[var(--radius-primary)] shadow-xl">
      {/* Overlay */}
      <div className="bg-black/50 absolute left-0 top-0 w-full h-full flex">
        <div className="text-white text-center h-full flex flex-col justify-end p-10 relative">
          <h1 className="text-xl mb-2.5 md:text-4xl md:font-bold">{title}</h1>
          <p className="text-sm md:text-lg font-light text-white/80 mb-1.5 lg:mb-5 w-[80%] ms-auto me-auto">
            {desc}
          </p>
          <div>
            <Link
              href={href}
              className="text-sm md:text-lg flex items-center justify-center gap-2"
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
    </div>
  );
};

export default FeatLargeBox;
