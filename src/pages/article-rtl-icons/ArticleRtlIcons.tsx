import messagesJson from "@root/translations.json";
import cn from "classnames";
import { type FC } from "react";
import { useIntl } from "react-intl";

import { Layout } from "@/components";
import {
    ClockIcon,
    GamepadIcon,
    MagnifierIcon,
    MessageIcon,
    PaperNoteIcon,
    WindowIcon,
} from "@/icons";

import styles from "./styles.module.css";

export const ArticleRtlIcons: FC = () => {
    const intl = useIntl();
    return (
        <Layout>
            <main className={styles.article}>
                <h1>{intl.formatMessage({ id: "articleRtlIcons.title", defaultMessage: messagesJson["articleRtlIcons.title"].en }, { br: <br /> })}</h1>
                <p>{intl.formatMessage({ id: "articleRtlIcons.intro", defaultMessage: messagesJson["articleRtlIcons.intro"].en })}</p>
                <section className={styles.section}>
                    <h2>{intl.formatMessage({ id: "articleRtlIcons.whyImportant.title", defaultMessage: messagesJson["articleRtlIcons.whyImportant.title"].en })}</h2>
                    <p>{intl.formatMessage({ id: "articleRtlIcons.whyImportant.text", defaultMessage: messagesJson["articleRtlIcons.whyImportant.text"].en })}</p>
                </section>
                <section className={styles.section}>
                    <h2>{intl.formatMessage({ id: "articleRtlIcons.flipIcons.title", defaultMessage: messagesJson["articleRtlIcons.flipIcons.title"].en })}</h2>
                    <p>{intl.formatMessage({ id: "articleRtlIcons.flipIcons.text", defaultMessage: messagesJson["articleRtlIcons.flipIcons.text"].en })}</p>
                    <div className={cn(styles.icons)} data-testid="rtl-icons">
                        <PaperNoteIcon />
                        <MessageIcon />
                        <WindowIcon />
                    </div>
                </section>
                <section className={styles.section}>
                    <h2>{intl.formatMessage({ id: "articleRtlIcons.dontFlipIcons.title", defaultMessage: messagesJson["articleRtlIcons.dontFlipIcons.title"].en })}</h2>
                    <p>{intl.formatMessage({ id: "articleRtlIcons.dontFlipIcons.text", defaultMessage: messagesJson["articleRtlIcons.dontFlipIcons.text"].en })}</p>
                    <div className={cn(styles.icons)} data-testid="not-rtl-icons">
                        <GamepadIcon />
                        <MagnifierIcon />
                        <ClockIcon />
                    </div>
                </section>
                <section className={styles.section}>
                    <h2>{intl.formatMessage({ id: "articleRtlIcons.conclusion.title", defaultMessage: messagesJson["articleRtlIcons.conclusion.title"].en })}</h2>
                    <p>{intl.formatMessage({ id: "articleRtlIcons.conclusion.text1", defaultMessage: messagesJson["articleRtlIcons.conclusion.text1"].en })}</p>
                    <p dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "articleRtlIcons.conclusion.text2", defaultMessage: messagesJson["articleRtlIcons.conclusion.text2"].en }) }} />
                </section>
            </main>
        </Layout>
    );
};
