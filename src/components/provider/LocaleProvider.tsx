import translations from "@root/translations.json";
import { type FC, type ReactNode, useMemo } from "react";
import { IntlProvider } from "react-intl";
import { useLocation } from "react-router-dom";

import { getLocaleFromPathname } from "@/lib";
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
    const locale = getLocaleFromPathname(pathname) || initialLocale;

    const messages = useMemo(() => {
        return Object.entries(translations).reduce(
            (acc, [key, value]) => ({ ...acc, [key]: value[key as Lang] }),
            {} as Record<string, string>
        );
    }, []);

    return (
        <IntlProvider
            locale={locale}
            messages={messages}
            defaultLocale={defaultLocale}
        >
            {children}
        </IntlProvider>
    );
};
