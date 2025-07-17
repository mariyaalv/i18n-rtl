import { type FC, type ReactNode, useEffect, useMemo } from "react";
import { IntlProvider } from "react-intl";
import { useLocation } from "react-router-dom";

import { LANG_DIRECTION } from "@/constants";
import { detectUserLanguage, pickMessages } from "@/lib";
import type { TranslationKey } from "@/page-translation-keys";
import type { Lang, Locale } from "@/types";

import { Loader } from "../loader";

interface LocaleProviderProps {
    children: ReactNode;
    initialLocale: Lang;
    defaultLocale?: Locale;
    translationKeys: TranslationKey[]; 
}

export const LocaleProvider: FC<LocaleProviderProps> = ({
    children,
    initialLocale,
    defaultLocale,
    translationKeys,
}) => {
    const { pathname } = useLocation();
    const lang = detectUserLanguage(pathname) || initialLocale;

    useEffect(() => {
      document.documentElement.dir = LANG_DIRECTION[lang] || "ltr";
    }, [lang]);

    const messages = useMemo(() => {
      return pickMessages(translationKeys, lang);
    }, [lang, translationKeys]);

    const isLoaded = translationKeys.every(key => messages[key]);

    if (!isLoaded) {
      return <Loader />;
    }

     console.log('LocaleProvider:', { lang, translationKeys, messages });


    return (
        <IntlProvider
            key={lang}
            locale={lang}
            messages={messages}
            defaultLocale={defaultLocale}
        >
            {children}
        </IntlProvider>
    );
};
