import React, { useContext } from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestions from "./GPTSuggestions";
import { UserLanguageContext } from "../utils/UserLanguageContext";

export default function () {
  const lang = useContext(UserLanguageContext);
  return <div>
    <GPTSearchBar />
    <GPTSuggestions />
  </div>;
}
