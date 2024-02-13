import { Dispatch, SetStateAction, createContext, useState } from "react";

type LanguageContext = {
    language: string;
    setLanguage: Dispatch<SetStateAction<string>>
}


const defaultLanguageContext = {language:'en', setLanguage: ()=>{}};

export const UserLanguageContext = createContext<LanguageContext>(defaultLanguageContext);
