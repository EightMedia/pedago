import { Language } from "models";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { DEFAULT_LANGUAGE } from "../contexts/LanguageContext";
import LanguageProvider from "../providers/Language.provider";

const ContentPage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    let langFromLocalStorage;
    if (typeof window !== "undefined") {
      langFromLocalStorage = localStorage.getItem("language");
    }

    return langFromLocalStorage
      ? (langFromLocalStorage as Language)
      : DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const LandingWithoutSSR = dynamic(
    () => import("../lib/views/landing/LandingPage"),
    {
      ssr: false,
    }
  );

  return (
    <>
      <LanguageProvider lang={language}>
        <LandingWithoutSSR
          language={language}
          setLanguage={setLanguage}
        ></LandingWithoutSSR>
      </LanguageProvider>
    </>
  );
};
export default ContentPage;
