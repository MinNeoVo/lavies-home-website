"use client";

import { createContext, useContext, useState, ReactNode } from "react";

import vi from "../app/messages/vi.json";
import en from "../app/messages/en.json";

type Language = "vi" | "en";

const messages = {
  vi,
  en,
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: messages[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context)
    throw new Error("useLanguage must be used inside LanguageProvider");

  return context;
}
