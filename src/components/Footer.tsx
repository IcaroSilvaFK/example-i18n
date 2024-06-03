import { useContext } from "react";
import { TranslationContext } from "../context/TranslationContext";

export function Footer() {
  const { language } = useContext(TranslationContext);

  return <p>{language}</p>;
}
