import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "@/constants";
import type { Locale } from "@/types";

export const getLocaleFromPathname = (pathname: string): Locale => {
    const pathLocale = pathname.split("/")[1];
    return SUPPORTED_LOCALES.includes(pathLocale as Locale)
        ? (pathLocale as Locale)
        : DEFAULT_LOCALE;
};
