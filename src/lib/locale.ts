import {
    DEFAULT_LANG,
    LANG_COOKIE_NAME,
    SUPPORTED_LANGS,
    SUPPORTED_LOCALES,
} from "@/constants";
import type { Lang, Locale } from "@/types";

import { geoService } from "./geo-service";

const getLocaleFromPathname = (
    pathname: string
): { lang: Lang | null; locale: string | null } => {
    const pathParts = pathname.split("/");
    const pathLocale = pathParts[1];

    if (!pathLocale) {
        return { lang: null, locale: null };
    }

    const [lang] = pathLocale.split("-");

    if (SUPPORTED_LANGS.includes(lang as Lang)) {
        return {
            lang: lang as Lang,
            locale: pathLocale,
        };
    }

    return { lang: null, locale: null };
};

export function getLocaleFromCookie(): Lang | null {
    if (typeof document === "undefined") return null;

    const match = document.cookie.match(
        new RegExp(`${LANG_COOKIE_NAME}=([^;]+)`)
    );
    if (match && SUPPORTED_LANGS.includes(match[1] as Lang)) {
        return match[1] as Lang;
    }
    return null;
}

export function setLocaleCookie(lang: Lang) {
    if (typeof document === "undefined") return;

    document.cookie = `${LANG_COOKIE_NAME}=${lang}; path=/; max-age=31536000`;
}

const getLanguageFromBrowser = (): Lang | null => {
    if (typeof navigator === "undefined") return null;

    const navigatorLang = navigator.language.split("-")[0] as Lang;
    return SUPPORTED_LANGS.includes(navigatorLang) ? navigatorLang : null;
};

export const detectUserLanguage = (pathname: string): Lang => {
    const { lang } = getLocaleFromPathname(pathname);

    return (
        lang ||
        getLocaleFromCookie() ||
        getLanguageFromBrowser() ||
        DEFAULT_LANG
    );
};

export const constructLocale = (
    lang: Lang,
    userRegion: string,
    search: string
): Locale => {
    const geoRegion = geoService.getCurrentRegion(search);
    const targetRegion = userRegion || geoRegion;

    const localeWithRegion = `${lang}-${targetRegion}` as Locale;

    if (SUPPORTED_LOCALES.includes(localeWithRegion)) {
        return localeWithRegion;
    }

    return lang as Locale;
};

export const getOptimalLocale = (
    pathname: string,
    search: string
): {
    lang: Lang;
    locale: Locale;
    shouldRedirect: boolean;
    redirectTo: string;
} => {
    const { lang: urlLang, locale: urlLocale } =
        getLocaleFromPathname(pathname);
    const userRegion = geoService.getCurrentRegion(search);

    const detectedLang =
        urlLang ||
        getLocaleFromCookie() ||
        getLanguageFromBrowser() ||
        DEFAULT_LANG;

    const optimalLocale = constructLocale(detectedLang, userRegion, search);

    const shouldRedirect = !urlLang || urlLocale !== optimalLocale;
    const redirectTo = shouldRedirect ? `/${optimalLocale}` : "";

    return {
        lang: detectedLang,
        locale: optimalLocale,
        shouldRedirect,
        redirectTo,
    };
};