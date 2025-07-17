import { type FC, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { LocaleProviderWrapper } from "@/components/provider/LocaleProviderWrapper";

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
    return (
        <BrowserRouter>
            <LocaleProviderWrapper>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<div />} />
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
                </Routes>
            </LocaleProviderWrapper>
        </BrowserRouter>
    );
}

export default App;