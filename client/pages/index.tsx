import React from "react";
import { useEffect, useState } from "react";
import { DEFAULT_LANGUAGE, LanguageContext } from "../contexts/LanguageContext";
import LandingPage from "../views/LandingPage";
import * as languages from '../data/languages';
import { DataTranslation, Language } from 'pedago-models/models'


const ContentPage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    let langFromLocalStorage;
    if (typeof window !== "undefined") {
      langFromLocalStorage = localStorage.getItem("language");
    }

    return langFromLocalStorage ? langFromLocalStorage as Language : DEFAULT_LANGUAGE;
  });
  const data: DataTranslation = languages[language];
  
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <>
      <LanguageContext.Provider value={data}>
        <LandingPage language={language} setLanguage={setLanguage}></LandingPage>
      </LanguageContext.Provider>
    </>
  );
};
export default ContentPage;
