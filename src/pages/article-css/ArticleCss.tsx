import { type FC } from "react";
import { FormattedMessage,useIntl } from "react-intl";

import { Layout } from "@/components";

import styles from "./styles.module.css";

export const ArticleCss: FC = () => {
    const intl = useIntl();
    return (
        <Layout>
            <main className={styles.article}>
                <h1>{intl.formatMessage({ id: "articleCss.title" })}</h1>
                <p>{intl.formatMessage({ id: "articleCss.intro" })}</p>
                <p>
                    <FormattedMessage
                        id="articleCss.diff"
                        values={{
                            code: (chunks: React.ReactNode) => <code>{chunks}</code>
                        }}
                    />
                </p>
                <section className={styles.section}>
                    <h2>{intl.formatMessage({ id: "articleCss.whyImportant.title" })}</h2>
                    <p>{intl.formatMessage({ id: "articleCss.whyImportant.text" })}</p>
                    <p>{intl.formatMessage({ id: "articleCss.whyImportant.listText" })}</p>
                    <div className={styles.list} dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "articleCss.whyImportant.listContent" }) }} />
                </section>
                <section className={styles.section}>
                    <h2>{intl.formatMessage({ id: "articleCss.conclusion.title" })}</h2>
                    <p>{intl.formatMessage({ id: "articleCss.conclusion.text" })}</p>
                </section>
            </main>
        </Layout>
    );
};
