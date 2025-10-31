import React from "react";
import { SheetClose } from "./ui/sheet";
import Link from "next/link";
import { Buttons, LangBtnMobile } from "@/components/index";
import { useTranslation } from "react-i18next";

const MobileNavMenu = ({ menuItems, lang, setLang }) => {
  const { t } = useTranslation();
  return (
    <nav
      aria-label="Mobile navigation"
      className={"w-full h-full bg-[var(--teal-100)] py-12"}
    >
      <ul>
        {menuItems?.map((item, index) => (
          <li
            key={item.href || index}
            className="py-2 ps-8 hover:bg-[var(--teal-200)]"
          >
            <SheetClose asChild>
              <Link href={item.href} className="flex items-center">
                {item.icon}
                <span className="text-[var(--gray)]">{item.label}</span>
              </Link>
            </SheetClose>
          </li>
        ))}
      </ul>
      <LangBtnMobile lang={lang} setLang={setLang} />
      <div className="px-8">
        <Buttons href="/" className="w-full">
          {t("header.getStartButton")}
        </Buttons>
      </div>
    </nav>
  );
};

export default MobileNavMenu;
