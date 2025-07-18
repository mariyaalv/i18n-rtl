import Cookies from "js-cookie";
import { type FC, useCallback, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { LANG_COOKIE_NAME, SUPPORTED_LANGS } from "@/constants";
import { DoneIcon, EarthIcon } from "@/icons";
import { detectUserLanguage, geoService } from "@/lib";
import type { Lang } from "@/types";

import { useClickOutside } from "./hooks";
import styles from "./styles.module.css";

const LANG_LABEL: Record<Lang, string> = {
    ru: "Русский",
    en: "English",
    ar: "اَلْعَرَبِيَّةُ",
};

export const LangSelect: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { pathname, search } = useLocation();
    const currentLang = detectUserLanguage(pathname);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    const selectLang = useCallback(
        (lang: Lang) => {
            Cookies.set(LANG_COOKIE_NAME, lang);
            closeMenu();
        },
        [closeMenu]
    );

    const toggleMenu = useCallback(() => {
        setIsMenuOpen((prev) => !prev);
    }, []);

    const menuRef = useClickOutside<HTMLDivElement>(closeMenu);

    const buildLangUrl = useCallback(
        (lang: Lang) => {
            let locale: string;
            if (lang === "ru") {
                const region = geoService.getCurrentRegion(search) || "RU";
                locale = region ? `${lang}-${region}` : lang;
            } else {
                locale = lang;
            }
            const pathWithoutLocale =
                pathname.replace(/^\/[a-z]{2}(?:-[A-Z]{2})?/, "") || "/";
            return `/${locale}${pathWithoutLocale}${search}`;
        },
        [pathname, search]
    );

    return (
        <div className={styles.langSelect} ref={menuRef}>
            <button
                className={styles.langSelectButton}
                onClick={toggleMenu}
                data-testid="lang-select-button"
            >
                <span className={styles.langSelectText}>
                    {LANG_LABEL[currentLang]}
                </span>

                <EarthIcon />
            </button>

            {isMenuOpen && (
                <ul
                    className={styles.langSelectMenu}
                    data-testid="lang-select-menu"
                >
                    {SUPPORTED_LANGS.map((lang) => {
                        const langLabel = LANG_LABEL[lang];
                        const url = buildLangUrl(lang);

                        return (
                            <Link to={url} onClick={() => selectLang(lang)} key={lang}>
                                <li
                                    className={styles.langSelectMenuItem}
                                >
                                    <span
                                        className={
                                            styles.langSelectMenuItemText
                                        }
                                    >
                                        {langLabel}
                                    </span>

                                    {lang === currentLang && <DoneIcon />}
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};
