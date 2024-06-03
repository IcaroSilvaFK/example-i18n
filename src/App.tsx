import { useContext } from "react";

import "./App.css";
import { TranslationContext } from "./context/TranslationContext";
import { SomeComponent } from "./components/SomeComponent";

function makeMessage(key: string) {
  return key === "pt-BR" ? `Sua linguagem é ${key}` : `You language is ${key}`;
}

function App() {
  const { language, changeLanguage } = useContext(TranslationContext);

  const i18n = {
    "pt-BR": "en-US",
    "en-US": "pt-BR",
  };

  return (
    <>
      <h1>{makeMessage(language)}</h1>

      <button
        onClick={() => changeLanguage(i18n[language as keyof typeof i18n])}
      >
        change language
      </button>

      <SomeComponent />
    </>
  );
}

export default App;
