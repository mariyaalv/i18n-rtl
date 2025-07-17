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

const DetectLocaleRedirect: FC = () => {
    const targetLocale = detectUserLanguage(window.location.pathname);
    return <Navigate to={`/${targetLocale}/`} replace />;
};

function App() {
    return (
        <BrowserRouter>
            <LocaleProviderWrapper>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<DetectLocaleRedirect />} />
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
