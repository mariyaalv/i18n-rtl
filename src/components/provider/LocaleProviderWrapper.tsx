import { type FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { SUPPORTED_LANGS, SUPPORTED_LOCALES } from "@/constants";
import { detectUserLanguage } from "@/lib";
import { geoService } from "@/lib/geo-service";
import { getTranslationKeys } from "@/lib/getTranslationKeys";

import { LocaleProvider } from ".";


export const LocaleProviderWrapper: FC<{children: React.ReactNode}> = ({ children }) => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const pathLocale = pathname.split("/")[1];
    const [lang, regionInUrl] = pathLocale ? pathLocale.split("-") : [null, null];
    const userRegion = geoService.getCurrentRegion(search);
    const localeWithRegion = regionInUrl ? `${lang}-${userRegion}` : undefined;
    const hasSupportedRegion =
      lang && userRegion &&
      (localeWithRegion && SUPPORTED_LOCALES.includes(localeWithRegion as typeof SUPPORTED_LOCALES[number]));
    if (
      pathLocale &&
      lang &&
      regionInUrl &&
      userRegion &&
      regionInUrl !== userRegion &&
      hasSupportedRegion
    ) {
      navigate(`/${lang}-${userRegion}${pathname.replace(/^\/[a-z]{2}(?:-[A-Z]{2})?/, "")}${search}`, { replace: true });
      return;
    }
    if (
      pathLocale &&
      lang &&
      regionInUrl &&
      (!userRegion || !hasSupportedRegion) &&
      SUPPORTED_LANGS.includes(lang as typeof SUPPORTED_LANGS[number])
    ) {
      navigate(`/${lang}${pathname.replace(/^\/[a-z]{2}(?:-[A-Z]{2})?/, "")}${search}`, { replace: true });
      return;
    }
    if (
      pathLocale &&
      !SUPPORTED_LOCALES.includes(pathLocale as typeof SUPPORTED_LOCALES[number]) &&
      SUPPORTED_LANGS.includes(lang as typeof SUPPORTED_LANGS[number])
    ) {
      navigate(`/${lang}${pathname.replace(/^\/[a-z]{2}(?:-[A-Z]{2})?/, "")}${search}`, { replace: true });
    }
  }, [pathname, search, navigate]);

  const initialLang = detectUserLanguage(pathname);
  const translationKeys = getTranslationKeys(pathname);
  return (
    <LocaleProvider initialLocale={initialLang} translationKeys={translationKeys}>
      {children}
    </LocaleProvider>
  );
};

export default LocaleProviderWrapper;
