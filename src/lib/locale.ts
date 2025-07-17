import Cookies from "js-cookie";

import { DEFAULT_LANG, LANG_COOKIE_NAME, SUPPORTED_LANGS } from "@/constants";
import type { Lang } from "@/types";

const getLocaleFromPathname = (pathname: string): Lang => {
    const pathLocale = pathname.split("/")[1];
    const lang = pathLocale?.split("-")[0];
    return SUPPORTED_LANGS.includes(lang as Lang)
        ? (lang as Lang)
        : DEFAULT_LANG;
};

const getLanguageFromCookie = (): Lang | null => {
    const cookieLang = Cookies.get(LANG_COOKIE_NAME);
    return cookieLang && SUPPORTED_LANGS.includes(cookieLang as Lang)
        ? (cookieLang as Lang)
        : null;
};

const getLanguageFromBrowser = (): Lang | null => {
    const navigatorLang = navigator.language.split("-")[0] as Lang;
    return SUPPORTED_LANGS.includes(navigatorLang) ? navigatorLang : null;
};

export const detectUserLanguage = (pathname: string): Lang => {
    return (
        getLocaleFromPathname(pathname) ||
        getLanguageFromCookie() ||
        getLanguageFromBrowser() ||
        DEFAULT_LANG
    );
};
