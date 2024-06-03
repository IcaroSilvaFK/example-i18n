import { ReactNode, createContext, useCallback, useState } from "react";
import { useSearchParams } from "../hooks/useUrlSearchParams";

type TranslationContextProps = {
  changeLanguage(value: string): void;
  language: string;
};

export const TranslationContext = createContext<TranslationContextProps>(
  {} as TranslationContextProps
);

type Props = {
  children: ReactNode;
};

export function TranslationContextProvider(props: Props) {
  const { children } = props;
  const { getSearchParam, pushStateUrl } = useSearchParams();
  const lang = getSearchParam("lang");
  const [language, setLanguage] = useState(lang || "pt-BR");

  const changeLanguage = useCallback(
    (lang: string) => {
      setLanguage(lang);
      pushStateUrl("lang", lang);
    },
    [pushStateUrl]
  );

  return (
    <TranslationContext.Provider value={{ changeLanguage, language }}>
      {children}
    </TranslationContext.Provider>
  );
}
