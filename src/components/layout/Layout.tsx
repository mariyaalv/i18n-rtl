import type { FC, PropsWithChildren } from "react";
import { useEffect } from "react";
import { useIntl } from "react-intl";
import { Link, useLocation } from "react-router-dom";

import { BRAND_NAMES } from "@/constants";
import { BrandLogoIcon, TelegramIcon, VkontakteIcon } from "@/icons";
import { detectUserLanguage } from "@/lib";

import { LangSelect } from "../lang-select";
import styles from "./styles.module.css";

export const Layout: FC<PropsWithChildren> = ({ children: content }) => {
    const { pathname } = useLocation();
    const userLang = detectUserLanguage(pathname);
    const intlApi = useIntl();
    const locale = intlApi.locale;

    useEffect(() => {
        document.title = BRAND_NAMES[userLang];
    }, [userLang]);

    return (
        <>
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <Link className={styles.headerBrand} to={`/${locale}/`}>
                        <BrandLogoIcon />

                        <span className={styles.headerBrandText}>
                            {BRAND_NAMES[userLang]}
                        </span>
                    </Link>

                    <LangSelect />
                </div>
            </div>

            <div className={styles.contentContainer}>{content}</div>

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
                    {intlApi.formatMessage(
                        {
                            id: "layout.footer.copyright"
                        },
                        {
                            yearStart: "2024",
                            yearEnd: "2025",
                            brand: BRAND_NAMES[userLang],
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
