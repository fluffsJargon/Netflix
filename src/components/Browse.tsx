import React, { createContext, useEffect, useState } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import { RootState } from "../utils/appStore";
import { UserLanguageContext } from "../utils/UserLanguageContext";
import { Locale } from "../utils/i18Messages";

const Browse = () => {
  const [lang, setLang] = useState('en');

  const defaultLanguageContext = {language:lang as Locale, setLanguage: setLang};

  const gptToggle = useSelector(
    (store: RootState) => store.gptSearch.searchToggle
  );
  useNowPlayingMovies();
  return (
    <>
      <UserLanguageContext.Provider value={defaultLanguageContext}>
      <Header />
      {gptToggle ? (
        <GPTSearch />
      ) : (
        <>
          <PrimaryContainer />
          <SecondaryContainer />
        </>
      )}
      </UserLanguageContext.Provider>
    </>
  );
};


export default Browse;
