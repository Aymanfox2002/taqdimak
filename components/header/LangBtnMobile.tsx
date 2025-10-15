"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdDoubleArrow, MdOutlineGTranslate } from "react-icons/md";
import i18n from "../../lib/i18n";
import { useTranslation } from "react-i18next";

interface langInter {
  lang: string;
  setLang: any;
}
const LangBtnMobile = ({ lang, setLang }: langInter) => {
  const pickLanguage = (value: string) => {
    const newLang = value;
    i18n.changeLanguage(newLang);
    setLang(newLang);
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };
  const { t } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mounte, setMounte] = useState(false);

  useEffect(() => {
    setMounte(true);
  }, []);
  return (
    <li className="ps-8 hover:bg-[var(--teal-200)] py-2">
      <span className="flex gap-4">
        <div className="flex items-center">
          <MdOutlineGTranslate className="pe-3 text-[var(--heading-black)] text-3xl" />
          <span className="text-[var(--gray)]">{t("header.languages")}</span>
        </div>
        <button
          aria-label="dropdown arrow"
          onClick={() => setDropdownOpen((prev) => !prev)}
          type="button"
        >
          <IoIosArrowDown
            className={`text-xl text-[var(--heading-black)] duration-200 ease-in-out ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </span>
      <ul
        className={`ps-5 mt-3 gap-y-3 flex flex-col overflow-hidden duration-500 transition-all ${
          dropdownOpen ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <li className="flex items-center gap-2">
          <MdDoubleArrow className="text-[va(--heading-black)]" />
          <button
            type="button"
            className="text-sm text-[var(--gray)]"
            onClick={() => pickLanguage("en")}
          >
            {mounte ? (lang === "en" ? "English" : "الانجليزية") : null}
          </button>
        </li>
        <li className="flex items-center gap-2">
          <MdDoubleArrow className="text-[va(--heading-black)]" />
          <button
            type="button"
            className="text-sm text-[var(--gray)]"
            onClick={() => pickLanguage("ar")}
          >
            {mounte ? (lang === "ar" ? "العربية" : "Arabic") : null}
          </button>
        </li>
      </ul>
    </li>
  );
};

export default LangBtnMobile;
