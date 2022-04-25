import { Language, Locale } from "models";
import { ReactNode } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import * as languages from "../data/languages";

const LanguageProvider = ({
  children,
  lang,
}: {
  children: ReactNode;
  lang: Language;
}) => {
  const text: Locale = languages[lang];
  return (
    <>
      <LanguageContext.Provider value={{text, lang}}>
        {children}
      </LanguageContext.Provider>
    </>
  );
};
export default LanguageProvider;
