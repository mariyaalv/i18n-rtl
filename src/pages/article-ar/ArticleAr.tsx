import { type FC } from "react";
import { useIntl } from "react-intl";

import { Layout } from "@/components";

import styles from "./styles.module.css";

export const ArticleAr: FC = () => {
    const intl = useIntl();
    return (
        <Layout>
            <main className={styles.article}>
                <h1>{intl.formatMessage({ id: "articleAr.title" })}</h1>
                <p>{intl.formatMessage({ id: "articleAr.text" })}</p>
            </main>
        </Layout>
    );
};
