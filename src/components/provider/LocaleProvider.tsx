import translations from "@root/translations.json";
import { type FC, type ReactNode, useMemo } from "react";
import { IntlProvider } from "react-intl";
import { useLocation } from "react-router-dom";

import { detectUserLanguage } from "@/lib";
import type { Lang, Locale } from "@/types";

interface LocaleProviderProps {
    children: ReactNode;
    initialLocale: Lang;
    defaultLocale?: Locale;
}

export const LocaleProvider: FC<LocaleProviderProps> = ({
    children,
    initialLocale,
    defaultLocale,
}) => {
    const { pathname } = useLocation();
    const lang = detectUserLanguage(pathname) || initialLocale;

    const messages = useMemo(() => {
        return Object.entries(translations).reduce(
            (acc, [key, value]) => ({
                ...acc,
                [key]: value[lang] || value["en"]
            }),
            {} as Record<string, string>
        );
    }, [lang]);

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
