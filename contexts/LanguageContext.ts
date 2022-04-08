import { createContext } from "react";
import * as languages from "../data/languages";
import { Language, Locale } from "./../lib/models";

export const DEFAULT_LANGUAGE = Language.NL;
export const LanguageContext = createContext<Locale>(
  languages[DEFAULT_LANGUAGE]
);
