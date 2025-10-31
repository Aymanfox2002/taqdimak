import { useEffect, useState } from 'react'
import i18n from '../lib/i18n';


export const useLang = () => {
   const [lang, setLang] = useState(i18n.language || "en");

  // Keep state in sync when user switches lang from somewhere else
  useEffect(() => {
    const handleLangChange = (lng: string) => setLang(lng);
    i18n.on("languageChanged", handleLangChange);
    return () => i18n.off("languageChanged", handleLangChange);
  }, []);

  return {lang, setLang}
}