import translations from "@root/translations.json";

import type { TranslationKey } from "@/page-translation-keys";
import type { Lang } from "@/types";

export function pickMessages(keys: TranslationKey[], lang: Lang) {
  const result: Record<string, string> = {};
  for (const key of keys) {
    if (translations[key]) {
      result[key] = translations[key][lang] || translations[key]["en"] || key;
    }
  }
  return result;
}