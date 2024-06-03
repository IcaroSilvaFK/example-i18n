import { useContext } from "react";
import { Footer } from "./Footer";
import { TranslationContext } from "../context/TranslationContext";

export function SomeComponent() {
  const { language } = useContext(TranslationContext);

  return (
    <div>
      <h1>{language === "en-US" ? "some component" : "algum componente"}</h1>
      <Footer />
    </div>
  );
}
