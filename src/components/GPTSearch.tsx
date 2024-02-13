import React, { useContext } from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestions from "./GPTSuggestions";
import { UserLanguageContext } from "../utils/UserLanguageContext";
import { NETFLIX_BG_IMG } from "../utils/constants";

export default function () {
  return <>
    <div className="absolute -z-20">
        <img src={NETFLIX_BG_IMG} alt="bg-logo" />
      </div>
    <GPTSearchBar />
    <GPTSuggestions />
  </>;
}
