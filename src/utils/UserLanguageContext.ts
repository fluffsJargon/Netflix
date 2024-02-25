import { Dispatch, SetStateAction, createContext, useState } from "react";
import { Locale } from "./i18Messages";

type LanguageContext = {
    language: Locale;
    setLanguage: Dispatch<SetStateAction<string>>
}


const defaultLanguageContext = {language: 'en' as Locale, setLanguage: ()=>{}};

export const UserLanguageContext = createContext<LanguageContext>(defaultLanguageContext);
