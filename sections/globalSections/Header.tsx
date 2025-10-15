"use client";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { IoLogoTumblr } from "react-icons/io";
import { HiMiniHome } from "react-icons/hi2";
import { RiTeamFill } from "react-icons/ri";
import { TbPackages } from "react-icons/tb";
import { FaCircleInfo } from "react-icons/fa6";

import i18n from "../../lib/i18n";
import { useTranslation } from "react-i18next";
import { MobileNav, DesktopNav, LngBtnDesktop } from "../../components/index";

const Header = () => {
  const { t } = useTranslation();

  const menuItems = useMemo(
    () => [
      {
        label: t("header.nav.home"),
        icon: (
          <HiMiniHome
            aria-hidden="true"
            className="pe-3 text-[var(--heading-black)] text-3xl"
          />
        ),
        href: "/",
      },
      {
        label: t("header.nav.services"),
        href: "/services",
        icon: (
          <TbPackages
            aria-hidden="true"
            className="pe-3 text-[var(--heading-black)] text-3xl"
          />
        ),
        children: [
          { label: t("header.nav.servicesDropdown.service-1"), href: "/" },
          { label: t("header.nav.servicesDropdown.service-2"), href: "/" },
          { label: t("header.nav.servicesDropdown.service-3"), href: "/" },
          { label: t("header.nav.servicesDropdown.service-4"), href: "/" },
          { label: t("header.nav.servicesDropdown.service-5"), href: "/" },
          { label: t("header.nav.servicesDropdown.service-6"), href: "/" },
          { label: t("header.nav.servicesDropdown.service-7"), href: "/" },
          { label: t("header.nav.servicesDropdown.service-8"), href: "/" },
        ],
      },
      {
        label: t("header.nav.about"),
        icon: (
          <RiTeamFill
            aria-hidden="true"
            className="pe-3 text-[var(--heading-black)] text-3xl"
          />
        ),
        href: "/about",
      },
      {
        label: t("header.contact"),
        icon: (
          <FaCircleInfo
            aria-hidden="true"
            className="pe-3 text-[var(--heading-black)] text-3xl"
          />
        ),
        href: "/contact",
      },
    ],
    [t]
  );

  const [lang, setLang] = useState(i18n.language || "en");

  // Keep state in sync when user switches lang from somewhere else
  useEffect(() => {
    const handleLangChange = (lng: string) => setLang(lng);
    i18n.on("languageChanged", handleLangChange);
    return () => i18n.off("languageChanged", handleLangChange);
  }, []);

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
            <span className="border-s border-[var(--gray)] ps-4">
              {/* lang button */}
              <LngBtnDesktop lang={lang} setLang={setLang} />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
