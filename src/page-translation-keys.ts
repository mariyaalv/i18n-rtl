export const PAGE_TRANSLATION_KEYS = {
    homePage: [
        "layout.footer.copyright",
        "homePage.hero.title",
        "homePage.hero.conference",
        "homePage.hero.location",
        "homePage.hero.price",
        "homePage.hero.register",
        "homePage.regionArticle.title",
        "homePage.ruArticle.title",
        "homePage.ruArticle.description",
        "homePage.byArticle.title",
        "homePage.byArticle.description",
        "homePage.kzArticle.title",
        "homePage.kzArticle.description",
        "homePage.arArticle.title",
        "homePage.arArticle.description",
        "homePage.enArticle.title",
        "homePage.enArticle.description",
        "homePage.rtlArticle.title",
        "homePage.rtlArticle.description",
        "homePage.cssArticle.title",
        "homePage.cssArticle.description",
        "homePage.articles.title",
        "homePage.articles.description",
        "homePage.article.read",
    ],
    articleUiBy: [
        "layout.footer.copyright",
        "articleUiBy.title",
        "articleUiBy.text",
    ],

    articleL10nRu: [
        "layout.footer.copyright",
        "articleL10nRu.title",
        "articleL10nRu.text1",
        "articleL10nRu.text2",
    ],
    articleI18nKz: [
        "layout.footer.copyright",
        "articleI18nKz.title",
        "articleI18nKz.text",
    ],
    articleEn: ["layout.footer.copyright", "articleEn.title", "articleEn.text"],
    articleCss: [
        "layout.footer.copyright",
        "articleCss.title",
        "articleCss.intro",
        "articleCss.diff",
        "articleCss.whyImportant.title",
        "articleCss.whyImportant.text",
        "articleCss.whyImportant.listText",
        "articleCss.whyImportant.listContent",
        "articleCss.conclusion.title",
        "articleCss.conclusion.text",
    ],
    articleAr: ["layout.footer.copyright", "articleAr.title", "articleAr.text"],
    articleRtlIcons: [
        "layout.footer.copyright",
        "articleRtlIcons.title",
        "articleRtlIcons.intro",
        "articleRtlIcons.whyImportant.title",
        "articleRtlIcons.whyImportant.text",
        "articleRtlIcons.flipIcons.title",
        "articleRtlIcons.flipIcons.text",
        "articleRtlIcons.dontFlipIcons.title",
        "articleRtlIcons.dontFlipIcons.text",
        "articleRtlIcons.conclusion.title",
        "articleRtlIcons.conclusion.text1",
        "articleRtlIcons.conclusion.text2",
    ],
};

export type TranslationKey = 
  | typeof PAGE_TRANSLATION_KEYS.homePage[number]
  | typeof PAGE_TRANSLATION_KEYS.articleAr[number]
  | typeof PAGE_TRANSLATION_KEYS.articleCss[number]
  | typeof PAGE_TRANSLATION_KEYS.articleEn[number]
  | typeof PAGE_TRANSLATION_KEYS.articleI18nKz[number]
  | typeof PAGE_TRANSLATION_KEYS.articleL10nRu[number]
  | typeof PAGE_TRANSLATION_KEYS.articleRtlIcons[number]
  | typeof PAGE_TRANSLATION_KEYS.articleUiBy[number];