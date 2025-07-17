import type { FC, PropsWithChildren } from "react";
import { useEffect } from "react";
import { useIntl } from "react-intl";
import { Link, useLocation } from "react-router-dom";

import { BRAND_NAMES } from "@/constants";
import { BrandLogoIcon, TelegramIcon, VkontakteIcon } from "@/icons";
import { detectUserLanguage } from "@/lib";

import { LangSelect } from "../lang-select";
import styles from "./styles.module.css";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    const { pathname } = useLocation();
    const lang = detectUserLanguage(pathname);
    const intl = useIntl();

    useEffect(() => {
        document.title = BRAND_NAMES[lang];
    }, [lang]);

    return (
        <>
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <Link className={styles.headerBrand} to="/">
                        <BrandLogoIcon />

                        <span className={styles.headerBrandText}>
                            {BRAND_NAMES[lang]}
                        </span>
                    </Link>

                    <LangSelect />
                </div>
            </div>

            <div className={styles.contentContainer}>{children}</div>

            <div className={styles.footer}>
                <div
                    className={styles.footerSocialLinks}
                    data-testid="social-icons"
                >
                    {[TelegramIcon, VkontakteIcon].map((Icon, index) => (
                        <a key={index} href="">
                            <Icon />
                        </a>
                    ))}
                </div>

                <span className={styles.footerText}>
                    {intl.formatMessage(
                        {
                            id: "layout.footer.copyright"
                        },
                        {
                            yearStart: "2024",
                            yearEnd: "2025",
                            brand: BRAND_NAMES[lang],
                            link: (chunks) => (
                                <a className={styles.textLink} href="">
                                    {chunks}
                                </a>
                            ),
                        }
                    )}
                </span>
            </div>
        </>
    );
};
