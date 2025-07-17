import messagesJson from "@root/translations.json";
import { type FC } from "react";
import { useIntl } from "react-intl";

import { Layout } from "@/components";

import styles from "./styles.module.css";

export const ArticleUiBy: FC = () => {
    const intl = useIntl();
    return (
        <Layout>
            <main className={styles.article}>
                <h1>{intl.formatMessage({ id: "articleUiBy.title", defaultMessage: messagesJson["articleUiBy.title"].en })}</h1>
                <p>{intl.formatMessage({ id: "articleUiBy.text", defaultMessage: messagesJson["articleUiBy.text"].en })}</p>
            </main>
        </Layout>
    );
};
