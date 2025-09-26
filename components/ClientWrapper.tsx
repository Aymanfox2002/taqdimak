"use client";
import { I18nextProvider } from "react-i18next";
import { useEffect, useState } from "react";
import { Ubuntu, Alexandria } from "next/font/google";
import i18n from "../lib/i18n";
import { Footer, Header } from "../sections";
import { Toaster } from "@/components/ui/sonner";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "500",
});

const alexandria = Alexandria({
  subsets: ["arabic"],
  weight: "500",
});

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const lang = i18n.language || "ar";

    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";

    setIsReady(true);

    const updateDirection = () => {
      const newLang = i18n.language;
      html.lang = newLang;
      html.dir = newLang === "ar" ? "rtl" : "ltr";
    };

    i18n.on("languageChanged", updateDirection);

    return () => {
      i18n.off("languageChanged", updateDirection);
    };
  }, []);

  if (!isReady) return null;

  return (
    <I18nextProvider i18n={i18n}>
      <div
        className={
          i18n.language === "en" ? ubuntu.className : alexandria.className
        }
      >
        <Header />
        {children}
        <Toaster
          position={i18n.language === "en" ? "bottom-right" : "bottom-left"}
          richColors
          expand={true}
          closeButton
        />
        <Footer />
      </div>
    </I18nextProvider>
  );
}
