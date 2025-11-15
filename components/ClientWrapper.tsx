"use client";
import { I18nextProvider } from "react-i18next";
import { JSX, useEffect, useState } from "react";
import { Ubuntu, Alexandria } from "next/font/google";
import i18n from "../lib/i18n";
import { Footer, Header } from "../sections";
import { Toaster } from "@/components/ui/sonner";
import { SpinerLoading } from "components/index";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "500",
});

const alexandria = Alexandria({
  subsets: ["arabic"],
  weight: "500",
});

interface ClientWrapperProps {
  children: React.ReactNode;
}

type Lang = "ar" | "en";
type ToasterPosition = "bottom-right" | "bottom-left";

/**
 * ---
 *
 * Client-side wrapper that initializes language settings (dir & lang),
 * applies font families based on the current language, and provides
 * global layout components such as Header, Footer, and Toaster.
 *
 * This component replaces the layout for client-only environments
 * and ensures correct UI direction (rtl/ltr) before rendering the page.
 *
 * @param {ClientWrapperProps} props - all sections and components here.
 * @returns {JSX.Element} The rendered client wrapper including global providers.
 */
export default function ClientWrapper({
  children,
}: ClientWrapperProps): JSX.Element {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const html = document.documentElement;
    const lang: Lang = (i18n.language as Lang) || "ar";
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";

    const updateDirection = (): void => {
      const newLang = i18n.language;
      html.lang = newLang;
      html.dir = newLang === "ar" ? "rtl" : "ltr";
    };
    i18n.on("languageChanged", updateDirection);
    setIsReady(true);
    return () => {
      i18n.off("languageChanged", updateDirection);
    };
  }, []);

  if (!isReady) return <SpinerLoading />;

  const fontClass =
    i18n.language === "en" ? ubuntu.className : alexandria.className;
  const toasterPosition: ToasterPosition =
    i18n.language === "en" ? "bottom-right" : "bottom-left";

  return (
    <I18nextProvider i18n={i18n}>
      <div className={fontClass}>
        <Header />
        {children}
        <Toaster position={toasterPosition} richColors expand closeButton />
        <Footer />
      </div>
    </I18nextProvider>
  );
}
