import { type FC } from "react";
import { useIntl } from "react-intl";

import { Layout } from "@/components";

import styles from "./styles.module.css";

export const ArticleEn: FC = () => {
    const intl = useIntl();
    return (
    <Layout>
        <main className={styles.article}>
                <h1>{intl.formatMessage({ id: "articleEn.title" })}</h1>
                <p>{intl.formatMessage({ id: "articleEn.text" })}</p>
        </main>
    </Layout>
);
};
