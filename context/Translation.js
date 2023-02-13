import React, { useState, createContext } from "react";
import axios from "axios";
import qs from "qs";

export const TranslationContext = createContext();

const TranslationContextProvider = (props) => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutoutText] = useState("");
  const [fromLang, setFromLang] = useState("en");
  const [toLang, setToLang] = useState("ar");

  const swapLanguages = () => {
    setFromLang(toLang);
    setToLang(fromLang);
  };

  const translate = () => {
    const options = {
      method: "POST",
      url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": "bc8e0c20b3mshb633af1f6da17e5p1be477jsnda3b1602c636",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      data: qs.stringify({
        q: inputText,
        source: fromLang,
        target: toLang,
      }),
    };

    axios
      .request(options)
      .then(function (response) {
        setOutoutText(response.data.data.translations[0].translatedText);
      })
      .catch(function (error) {
        console.error(error);
        console.log(inputText);
      });
  };

  const reset = () => {
    setInputText(""), setOutoutText("");
  };

  return (
    <TranslationContext.Provider
      value={{
        inputText,
        setInputText,
        outputText,
        setOutoutText,
        fromLang,
        setFromLang,
        toLang,
        setToLang,
        swapLanguages,
        translate,
        reset,
      }}
    >
      {props.children}
    </TranslationContext.Provider>
  );
};

export default TranslationContextProvider;
