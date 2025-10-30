import React, { createContext, useContext, useState, useCallback } from "react";
import type { Language, Translations } from "../types/i18n";
import { en } from "./translations/en";
import { de } from "./translations/de";
import { uk } from "./translations/uk";

const translations: Record<Language, Translations> = {
  en,
  de,
  uk,
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const getStoredLanguage = (): Language => {
  const stored = localStorage.getItem("language");
  if (stored && (stored === "en" || stored === "de" || stored === "uk")) {
    return stored as Language;
  }

  // Detect browser language
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("de")) return "de";
  if (browserLang.startsWith("uk")) return "uk";
  return "en";
};

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguageState] = useState<Language>(getStoredLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  }, []);

  const value: I18nContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useTranslation = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within I18nProvider");
  }
  return context;
};


