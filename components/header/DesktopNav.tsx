"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { MegaMenu, Buttons } from "../index";

import { AnimatePresence } from "framer-motion";

const DesktopNav = ({ menuItems }: { menuItems: any }) => {
  const { t } = useTranslation();
  const [isHover, setIsHover] = useState(false);

  return (
    <nav className="hidden md:flex items-center">
      <ul className="flex gap-6 text-[var(--gray)] me-6">
        {menuItems.map((item, index) => (
          <li key={index} className="py-6">
            {item.children ? (
              <>
                <Link
                  className="flex items-center cursor-pointer"
                  href={item.href}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                >
                  {item.label}
                  <IoIosArrowDown className="ms-2.5 text-xl" />
                </Link>
                <AnimatePresence mode="wait">
                  {isHover && (
                    <div
                      onMouseEnter={() => setIsHover(true)}
                      onMouseLeave={() => setIsHover(false)}
                    >
                      <MegaMenu menuItems={menuItems} />
                    </div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link href={item.href}>{item.label}</Link>
            )}
          </li>
        ))}
      </ul>
      <Buttons className="me-4" href="/">
        {t("header.getStartButton")}
      </Buttons>
    </nav>
  );
};

export default DesktopNav;
