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
  const data: Locale = languages[lang];
  return (
    <>
      <LanguageContext.Provider value={data}>
        {children}
      </LanguageContext.Provider>
    </>
  );
};
export default LanguageProvider;
