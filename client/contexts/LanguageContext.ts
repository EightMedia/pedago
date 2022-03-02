import { createContext } from "react";
import { Language } from "../models/language.enum";

export const defaultLanguage = Language.NL;
export const LanguageContext = createContext<Language>(defaultLanguage);
