"use client";
import React from "react";
import { MdOutlineGTranslate } from "react-icons/md";
import i18n from "../../lib/i18n";
interface langInter {
  lang: string;
  setLang: any;
}

const LngBtnDesktop = ({ lang, setLang }: langInter) => {
  const toggleLanguage = () => {
    const newLang = lang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    setLang(newLang);
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };
  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="hover:scale-120 transition-all duration-300 cursor-pointer"
    >
      <MdOutlineGTranslate className="text-3xl text-[var(--heading-black)]" />
    </button>
  );
};

export default LngBtnDesktop;
