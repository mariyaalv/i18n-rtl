import { type FC, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { PAGE_TRANSLATION_KEYS } from "@/page-translation-keys";

import { LocaleProvider } from "./components";
import { DEFAULT_LOCALE } from "./constants";
import { detectUserLanguage } from "./lib";
import {
    ArticleAr, ArticleCss, ArticleEn, ArticleI18nKz, ArticleL10nRu,
    ArticleRtlIcons, ArticleUiBy, Home
} from "./pages";

const ScrollToTop: FC = () => {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
};

const RedirectToLocale: FC = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    useEffect(() => {
        if (pathname === "/") {
            const lang = detectUserLanguage(pathname);
            navigate(`/${lang}`, { replace: true });
        }
    }, [pathname, navigate]);
    return null;
};

function getTranslationKeys(pathname: string) {
  if (/^\/[^/]+\/article\/rtl-icons/.test(pathname)) return PAGE_TRANSLATION_KEYS.articleRtlIcons;
  if (/^\/[^/]+\/article\/css/.test(pathname)) return PAGE_TRANSLATION_KEYS.articleCss;
  if (/^\/[^/]+\/article\/l10n-ru/.test(pathname)) return PAGE_TRANSLATION_KEYS.articleL10nRu;
  if (/^\/[^/]+\/article\/ui-by/.test(pathname)) return PAGE_TRANSLATION_KEYS.articleUiBy;
  if (/^\/[^/]+\/article\/i18n-kz/.test(pathname)) return PAGE_TRANSLATION_KEYS.articleI18nKz;
  if (/^\/[^/]+\/article\/en/.test(pathname)) return PAGE_TRANSLATION_KEYS.articleEn;
  if (/^\/[^/]+\/article\/ar/.test(pathname)) return PAGE_TRANSLATION_KEYS.articleAr;
  return PAGE_TRANSLATION_KEYS.homePage;
}

const LocaleProviderWrapper: FC<{children: React.ReactNode}> = ({ children }) => {
  const { pathname } = useLocation();
  const initialLang = detectUserLanguage(pathname);
  const translationKeys = getTranslationKeys(pathname);
  return (
    <LocaleProvider initialLocale={initialLang} translationKeys={translationKeys}>
      {children}
    </LocaleProvider>
  );
};

function App() {
    return (
        <BrowserRouter>
            <LocaleProviderWrapper>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<RedirectToLocale />} />
                    <Route path=":locale">
                        <Route index element={<Home />} />
                        <Route path="article">
                            <Route path="rtl-icons" element={<ArticleRtlIcons />} />
                            <Route path="css" element={<ArticleCss />} />
                            <Route path="l10n-ru" element={<ArticleL10nRu />} />
                            <Route path="ui-by" element={<ArticleUiBy />} />
                            <Route path="i18n-kz" element={<ArticleI18nKz />} />
                            <Route path="en" element={<ArticleEn />} />
                            <Route path="ar" element={<ArticleAr />} />
                        </Route>
                        <Route path="*" element={<Navigate to={`/${DEFAULT_LOCALE}/`} replace />} />
                    </Route>
                </Routes>
            </LocaleProviderWrapper>
        </BrowserRouter>
    );
}

export default App;
