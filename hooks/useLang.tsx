import { useEffect, useState } from "react";
import i18n from "../lib/i18n";

/**
 * Custom React hook that manages the current language.
 *
 * Keeps state synchronized with i18next when the user changes language
 * anywhere in the application.
 * 
 * 
 * @returns {{
 * lang: string,
 * setLang: (lang: string) => void
 * }} The current language and a setter to update it.
 */
export const useLang = () => {
  const [lang, setLang] = useState(i18n.language || "en");

  useEffect(() => {
     /**
     * Updates local state when i18next emits a language change event.
     * @param {string} lng - The newly selected language.
     */
    const handleLangChange = (lng: string) => setLang(lng);
    i18n.on("languageChanged", handleLangChange);
    return () => i18n.off("languageChanged", handleLangChange);
  }, []);

  return { lang, setLang };
};
