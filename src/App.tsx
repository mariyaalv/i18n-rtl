import { type FC, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";

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

function App() {
  const initialLang = detectUserLanguage(window.location.pathname);
    return (
        <BrowserRouter>
            <LocaleProvider initialLocale={initialLang}>
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
            </LocaleProvider>
        </BrowserRouter>
    );
}

export default App;
