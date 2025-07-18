import { PAGE_TRANSLATION_KEYS } from "@/page-translation-keys";

export function getTranslationKeys(pathname: string) {
  if (/^\/[^/]+\/article\/rtl-icons/.test(pathname)) return PAGE_TRANSLATION_KEYS.articleRtlIcons;
  if (/^\/[^/]+\/article\/css/.test(pathname)) return PAGE_TRANSLATION_KEYS.articleCss;
  if (/^\/[^/]+\/article\/l10n-ru/.test(pathname)) return PAGE_TRANSLATION_KEYS.articleL10nRu;
  if (/^\/[^/]+\/article\/ui-by/.test(pathname)) return PAGE_TRANSLATION_KEYS.articleUiBy;
  if (/^\/[^/]+\/article\/i18n-kz/.test(pathname)) return PAGE_TRANSLATION_KEYS.articleI18nKz;
  if (/^\/[^/]+\/article\/en/.test(pathname)) return PAGE_TRANSLATION_KEYS.articleEn;
  if (/^\/[^/]+\/article\/ar/.test(pathname)) return PAGE_TRANSLATION_KEYS.articleAr;
  return PAGE_TRANSLATION_KEYS.homePage;
}

export function getTranslationSections(pathname: string): string[] {
  if (/^\/[^/]+\/article\/rtl-icons/.test(pathname)) return ["articleRtlIcons"];
  if (/^\/[^/]+\/article\/css/.test(pathname)) return ["articleCss"];
  if (/^\/[^/]+\/article\/l10n-ru/.test(pathname)) return ["articleL10nRu"];
  if (/^\/[^/]+\/article\/ui-by/.test(pathname)) return ["articleUiBy"];
  if (/^\/[^/]+\/article\/i18n-kz/.test(pathname)) return ["articleI18nKz"];
  if (/^\/[^/]+\/article\/en/.test(pathname)) return ["articleEn"];
  if (/^\/[^/]+\/article\/ar/.test(pathname)) return ["articleAr"];
  return ["homePage"];
}