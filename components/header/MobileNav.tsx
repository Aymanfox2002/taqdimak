"use client";
import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {Buttons, LangBtnMobile} from '../index'
import { motion } from "framer-motion";

interface MobileNavProps {
  mobileOpen?: boolean;
  lang: string;
  setLang: any;
  menuItems: any;
}

export default function MobileNav({
  lang,
  setLang,
  menuItems,
}: MobileNavProps) {
  const { t } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Style
  const slideVariants = {
    en: {
      initial: { x: "-100%", opacity: 0 },
      animate: { x: "0%", opacity: 1 },
      exit: { x: "-100%", opacity: 0 },
    },
    ar: {
      initial: { x: "100%", opacity: 0 },
      animate: { x: "0%", opacity: 1 },
      exit: { x: "100%", opacity: 0 },
    },
  };

  return (
    <motion.nav
      className={`z-100 absolute top-[54px] w-[70%] h-[200vh] bg-[var(--teal-100)] menu-shadow md:hidden ${
        lang === "en" ? "left-0" : "right-0"
      }`}
      variants={slideVariants[lang === "en" ? "en" : "ar"]}
      initial="initial"
      animate="animate"
      exit="exit"
      key={"mobileNav"}
    >
      <ul className="my-6">
        {menuItems.map((item, index) => (
          <li key={index} className="py-2 ps-8 hover:bg-[var(--teal-200)]">
            {item.children ? (
              <>
                <span className="flex gap-4">
                  <Link href={item.href} className="flex items-center">
                    {item.icon}
                    <span className="text-[var(--gray)]">{item.label}</span>
                  </Link>

                  <button
                    aria-label="dropdown arrow"
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    type="button"
                  >
                    <IoIosArrowDown
                      className={`text-xl text-[var(--heading-black)] duration-200 ease-in-out ${
                        dropdownOpen && "rotate-180"
                      }`}
                    />
                  </button>
                </span>
                <ul
                  className={`ps-5 mt-3 gap-y-3 flex flex-col overflow-hidden duration-500 transition-all ${
                    dropdownOpen ? "max-h-[1000px]" : " max-h-0"
                  }`}
                >
                  {item.children.map((child, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <MdDoubleArrow className="text-[va{label: r(--heading-black)]" />
                      <Link
                        href={child.href}
                        className="text-sm text-[var(--gray)]"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link href={item.href} className="flex items-center">
                {item.icon}
                <span className="text-[var(--gray)]">{item.label}</span>
              </Link>
            )}
          </li>
        ))}
        <LangBtnMobile lang={lang} setLang={setLang} />
      </ul>

      <div className="px-8">
        <Buttons href="/" className="w-full">
          {t("header.getStartButton")}
        </Buttons>
      </div>
    </motion.nav>
  );
}
