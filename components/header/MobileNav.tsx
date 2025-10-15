"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Buttons, LangBtnMobile } from "../index";
import { IoMenu } from "react-icons/io5";
import i18n from "@/lib/i18n";

// Sheet components
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";

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
  const [side, setSide] = useState<"left" | "right">("left");

  useEffect(() => {
    setSide(i18n.language === "en" ? "left" : "right");
  }, [i18n.language]);

  return (
    <Sheet>
      <SheetTrigger className="md:hidden" aria-label="Open menu">
        <IoMenu className="text-3xl text-[var(--heading-black)] hover:cursor-pointer" />
      </SheetTrigger>
      <SheetContent side={side}>
        <SheetHeader className="hidden">
          <SheetTitle>Navigation Menu</SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile navigation"
          className={
            "w-full h-full bg-[var(--teal-100)] py-12"
          }
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
      </SheetContent>
    </Sheet>
  );
}
