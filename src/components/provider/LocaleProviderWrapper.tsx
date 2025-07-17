import { type FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { getOptimalLocale } from "@/lib";
import { getTranslationKeys } from "@/lib/getTranslationKeys";

import { LocaleProvider } from ".";

export const LocaleProviderWrapper: FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const { pathname, search } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const { shouldRedirect, redirectTo } = getOptimalLocale(
            pathname,
            search
        );

        if (shouldRedirect && redirectTo) {
            const restPath = pathname.replace(/^\/[a-z]{2}(?:-[A-Z]{2})?/, "");
            navigate(`${redirectTo}${restPath}${search}`, { replace: true });
            return;
        }
    }, [pathname, search, navigate]);

    const { lang } = getOptimalLocale(pathname, search);
    const translationKeys = getTranslationKeys(pathname);

    return (
        <LocaleProvider initialLocale={lang} translationKeys={translationKeys}>
            {children}
        </LocaleProvider>
    );
};

export default LocaleProviderWrapper;
