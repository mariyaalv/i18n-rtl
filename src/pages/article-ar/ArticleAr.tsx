import messagesJson from "@root/translations.json";
import { type FC } from "react";
import { useIntl } from "react-intl";

import { Layout } from "@/components";

import styles from "./styles.module.css";

export const ArticleAr: FC = () => {
    const intl = useIntl();
    return (
        <Layout>
            <main className={styles.article}>
                <h1>{intl.formatMessage({ id: "articleAr.title", defaultMessage: messagesJson["articleAr.title"].en })}</h1>
                <p>{intl.formatMessage({ id: "articleAr.text", defaultMessage: messagesJson["articleAr.text"].en })}</p>
            </main>
        </Layout>
    );
};
