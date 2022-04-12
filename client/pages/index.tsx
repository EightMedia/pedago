import { Language, Locale } from "models";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { DEFAULT_LANGUAGE, LanguageContext } from "../contexts/LanguageContext";
import * as languages from "../data/languages";

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
  const data: Locale = languages[language];

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
      <LanguageContext.Provider value={data}>
        <LandingWithoutSSR
          language={language}
          setLanguage={setLanguage}
        ></LandingWithoutSSR>
      </LanguageContext.Provider>
    </>
  );
};
export default ContentPage;
