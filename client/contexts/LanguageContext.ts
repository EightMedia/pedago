import { createContext } from "react";
import { DataTranslation } from "../../models/data-translation.interface";
import { Language } from "../models/language.enum";
import * as languages from '../data/languages';

export const DEFAULT_LANGUAGE = Language.NL;
export const LanguageContext = createContext<DataTranslation>(languages[DEFAULT_LANGUAGE]);
