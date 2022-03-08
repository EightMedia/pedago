import { createContext } from "react";
import { Language, DataTranslation } from "models";
import * as languages from "../data/languages";

export const DEFAULT_LANGUAGE = Language.NL;
export const LanguageContext = createContext<DataTranslation>(
  languages[DEFAULT_LANGUAGE]
);
