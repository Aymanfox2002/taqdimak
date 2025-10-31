"use client";
import Link from "next/link";
import { getMenuItems } from "@/data/menuItems";
import { useLang } from "@/hooks/useLang";
import { IoLogoTumblr } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { MobileNav, DesktopNav, LngBtnDesktop } from "@/components/index";
import { useMemo } from "react";

const Header = () => {
  const { t } = useTranslation();
  const menuItems = useMemo(() => getMenuItems(t), [t]);
  const { lang, setLang } = useLang();

  return (
    <header className="bg-[#EAF6F6] sticky top-0 z-10 shadow-lg">
      <div className="container mx-auto px-4 py-3 md:py-0">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <IoLogoTumblr className="text-3xl text-[var(--teal-900)]" />
          </Link>
          <MobileNav lang={lang} setLang={setLang} menuItems={menuItems} />
          <div className="hidden md:flex items-center">
            <DesktopNav menuItems={menuItems} />
            <nav className="border-s border-[var(--gray)] ps-4">
              <LngBtnDesktop lang={lang} setLang={setLang} />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
