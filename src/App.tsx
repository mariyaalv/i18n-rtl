import { type FC, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";

import { LocaleProviderWrapper } from "@/components/provider/LocaleProviderWrapper";
import { DEFAULT_LOCALE } from "@/constants";
import { detectUserLanguage } from "@/lib";

import {
    ArticleAr, ArticleCss, ArticleEn, ArticleI18nKz, ArticleL10nRu,
    ArticleRtlIcons, ArticleUiBy, Home
} from "./pages";

const ScrollToTop: FC = () => {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
};

function App() {
    const targetLocale = detectUserLanguage(window.location.pathname);
    return (
        <BrowserRouter>
            <LocaleProviderWrapper>
                <ScrollToTop />
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate to={`/${targetLocale}/`} replace />}
                    />
                    <Route path=":locale">
                        <Route index element={<Home />} />
                        <Route path="article/rtl-icons" element={<ArticleRtlIcons />} />
                        <Route path="article/css" element={<ArticleCss />} />
                        <Route path="article/l10n-ru" element={<ArticleL10nRu />} />
                        <Route path="article/ui-by" element={<ArticleUiBy />} />
                        <Route path="article/i18n-kz" element={<ArticleI18nKz />} />
                        <Route path="article/en" element={<ArticleEn />} />
                        <Route path="article/ar" element={<ArticleAr />} />
                    </Route>
                    <Route
                        path="*"
                        element={<Navigate to={`/${DEFAULT_LOCALE}/`} replace />}
                    />
                </Routes>
            </LocaleProviderWrapper>
        </BrowserRouter>
    );
}

export default App;
