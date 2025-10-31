"use client";
import { useTranslation } from "react-i18next";
import { IoMenu } from "react-icons/io5";
import i18n from "@/lib/i18n";
import {MobileNavMenu} from "@/components/index"

// Sheet components
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
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
      <MobileNavMenu menuItems={menuItems} lang={lang} setLang={setLang} />
      </SheetContent>
    </Sheet>
  );
}
