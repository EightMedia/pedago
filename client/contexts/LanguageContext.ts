import { createContext } from "react";
import { Language, Locale } from "models";
import * as languages from "../data/languages";

export const DEFAULT_LANGUAGE = Language.NL;
export const LanguageContext = createContext<Locale>(
  languages[DEFAULT_LANGUAGE]
);
