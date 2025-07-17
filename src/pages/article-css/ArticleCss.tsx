import messagesJson from "@root/translations.json";
import { type FC } from "react";
import { useIntl } from "react-intl";

import { Layout } from "@/components";

import styles from "./styles.module.css";

export const ArticleCss: FC = () => {
    const intl = useIntl();
    return (
        <Layout>
            <main className={styles.article}>
                <h1>{intl.formatMessage({ id: "articleCss.title", defaultMessage: messagesJson["articleCss.title"].en })}</h1>
                <p>{intl.formatMessage({ id: "articleCss.intro", defaultMessage: messagesJson["articleCss.intro"].en })}</p>
                <p>{intl.formatMessage({ id: "articleCss.diff", defaultMessage: messagesJson["articleCss.diff"].en })}</p>
                <section className={styles.section}>
                    <h2>{intl.formatMessage({ id: "articleCss.whyImportant.title", defaultMessage: messagesJson["articleCss.whyImportant.title"].en })}</h2>
                    <p>{intl.formatMessage({ id: "articleCss.whyImportant.text", defaultMessage: messagesJson["articleCss.whyImportant.text"].en })}</p>
                    <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "articleCss.whyImportant.list", defaultMessage: messagesJson["articleCss.whyImportant.list"].en }) }} />
                </section>
                <section className={styles.section}>
                    <h2>{intl.formatMessage({ id: "articleCss.conclusion.title", defaultMessage: messagesJson["articleCss.conclusion.title"].en })}</h2>
                    <p>{intl.formatMessage({ id: "articleCss.conclusion.text", defaultMessage: messagesJson["articleCss.conclusion.text"].en })}</p>
                </section>
            </main>
        </Layout>
    );
};
