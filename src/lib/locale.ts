import { DEFAULT_LANG, SUPPORTED_LANGS } from "@/constants";
import type { Lang } from "@/types";

const getLocaleFromPathname = (pathname: string): Lang => {
    const pathLocale = pathname.split("/")[1];
    const lang = pathLocale?.split("-")[0];
    return SUPPORTED_LANGS.includes(lang as Lang)
        ? (lang as Lang)
        : DEFAULT_LANG;
};

export function getLocaleFromCookie(): Lang | null {
    const match = document.cookie.match(/i18n-l10n-conf-lang=([^;]+)/);
    if (match && SUPPORTED_LANGS.includes(match[1] as Lang)) {
        return match[1] as Lang;
    }
    return null;
}

export function setLocaleCookie(lang: Lang) {
    document.cookie = `i18n-l10n-conf-lang=${lang}; path=/; max-age=31536000`;
}

const getLanguageFromBrowser = (): Lang | null => {
    const navigatorLang = navigator.language.split("-")[0] as Lang;
    return SUPPORTED_LANGS.includes(navigatorLang) ? navigatorLang : null;
};

export const detectUserLanguage = (pathname: string): Lang => {
    return (
        getLocaleFromPathname(pathname) ||
        getLocaleFromCookie() ||
        getLanguageFromBrowser() ||
        DEFAULT_LANG
    );
};