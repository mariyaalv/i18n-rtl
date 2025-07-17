import { type FC } from "react";
import { useIntl } from "react-intl";

import { Layout } from "@/components";

import styles from "./styles.module.css";

export const ArticleL10nRu: FC = () => {
    const intl = useIntl();
    return (
    <Layout>
        <main className={styles.article}>
                <h1>{intl.formatMessage({ id: "articleL10nRu.title" })}</h1>
                <p>{intl.formatMessage({ id: "articleL10nRu.text1" }, { usersCount: "98 000 000", percent: "78 %" })}</p>
                <p>{intl.formatMessage({ id: "articleL10nRu.text2" }, { date: "1 сентября 2015 г." })}</p>
        </main>
    </Layout>
);
};
