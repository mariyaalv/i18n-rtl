import { type FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import type { Section } from "@/constants";
import { getOptimalLocale } from "@/lib";
import { getTranslationKeys, getTranslationSections } from "@/lib/getTranslationKeys";

import { LocaleProvider } from ".";

export const LocaleProviderWrapper: FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const { pathname, search } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const { shouldRedirect: needRedirect, redirectTo: redirectLocale } = getOptimalLocale(
            pathname,
            search
        );

        if (needRedirect && redirectLocale) {
            const pathRest = pathname.replace(/^\/[a-z]{2}(?:-[A-Z]{2})?/, "");
            navigate(`${redirectLocale}${pathRest}${search}`, { replace: true });
            return;
        }
    }, [pathname, search, navigate]);

    const keys = getTranslationKeys(pathname);
    const sections = getTranslationSections(pathname);

    return (
        <LocaleProvider translationKeys={keys} translationSections={sections as Section[]}>
            {children}
        </LocaleProvider>
    );
};

export default LocaleProviderWrapper;