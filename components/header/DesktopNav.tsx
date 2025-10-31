"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from "react-i18next";
import { MegaMenu, Buttons } from "../index";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const DesktopNav = ({ menuItems }: { menuItems: any }) => {
  const { t } = useTranslation();

  return (
    <nav className="hidden md:flex items-center">
      <ul className="flex gap-6 text-[var(--gray)] me-6">
        {menuItems.map((item, index) => (
          <li key={index} className="py-6">
            {item.children ? (
              <>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Link
                      className="flex items-center cursor-pointer"
                      href={item.href}
                    >
                      {item.label}
                      <IoIosArrowDown className="ms-2.5 text-xl" />
                    </Link>
                  </HoverCardTrigger>
                    <MegaMenu menuItems={menuItems} />
                </HoverCard>
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
