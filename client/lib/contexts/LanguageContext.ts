import { Language, Locale } from "models";
import { createContext } from "react";
import * as languages from "../../data/languages";

export const DEFAULT_LANGUAGE = Language.NL;
export const LanguageContext = createContext<{text: Locale, lang: Language}>(
  {text: languages[DEFAULT_LANGUAGE], lang: DEFAULT_LANGUAGE}
);
