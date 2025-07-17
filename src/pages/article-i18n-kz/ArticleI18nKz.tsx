import { type FC } from "react";
import { useIntl } from "react-intl";

import { Layout } from "@/components";

import styles from "./styles.module.css";

export const ArticleI18nKz: FC = () => {
    const intl = useIntl();
    return (
        <Layout>
            <main className={styles.article}>
                <h1>{intl.formatMessage({ id: "articleI18nKz.title" })}</h1>
                <p>{intl.formatMessage({ id: "articleI18nKz.text" })}</p>
            </main>
        </Layout>
    );
};
