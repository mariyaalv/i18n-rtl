import { type FC, type ReactNode, useEffect } from "react";
import { IntlProvider } from "react-intl";
import { useLocation } from "react-router-dom";

import { LANG_DIRECTION } from "@/constants";
import { detectUserLanguage, pickMessages } from "@/lib";
import { useAsyncMessages } from "@/lib/useAsyncMessages";
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
      document.documentElement.lang = lang;
    }, [lang]);

    const messages = useAsyncMessages(lang);

    if (!messages) {
      return <Loader />;
    }

    return (
        <IntlProvider
            key={lang}
            locale={lang}
            messages={pickMessages(translationKeys, messages)}
            defaultLocale={defaultLocale}
        >
            {children}
        </IntlProvider>
    );
};
