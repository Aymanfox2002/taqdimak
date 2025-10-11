"use client";
import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Buttons, LangBtnMobile } from "../index";
import { IoMenu } from "react-icons/io5";
import i18n from "@/lib/i18n";

// Sheet
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

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

  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <IoMenu className="text-3xl text-[var(--heading-black)] hover:cursor-pointer" />
      </SheetTrigger>
      <SheetContent
        side={i18n.language === "en" ? "left" : "right"}
      >
        <SheetHeader className="hidden">
          <SheetTitle>Navigation Menu</SheetTitle>
        </SheetHeader>
        <nav className={`w-[100%] h-[100%] bg-[var(--teal-100)]`}>
          <ul className="my-6">
            {menuItems.map((item, index) => (
              <li key={index} className="py-2 ps-8 hover:bg-[var(--teal-200)]">
                {item.children ? (
                  <>
                    <span className="flex gap-4">
                      <SheetClose asChild>
                        <Link href={item.href} className="flex items-center">
                          {item.icon}
                          <span className="text-[var(--gray)]">
                            {item.label}
                          </span>
                        </Link>
                      </SheetClose>

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
                          <MdDoubleArrow className="text-[var(--heading-black)]" />
                          <SheetClose asChild>
                            <Link
                              href={child.href}
                              className="text-sm text-[var(--gray)]"
                            >
                              {child.label}
                            </Link>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <SheetClose asChild>
                    <Link href={item.href} className="flex items-center">
                      {item.icon}
                      <span className="text-[var(--gray)]">{item.label}</span>
                    </Link>
                  </SheetClose>
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
        </nav>
      </SheetContent>
    </Sheet>
  );
}
