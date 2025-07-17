import type { TranslationKey } from "@/page-translation-keys";

export function pickMessages(
  keys: TranslationKey[],
  messages: Record<string, string>
) {
  const result: Record<string, string> = {};
  for (const key of keys) {
    result[key] = messages[key] ?? key;
  }
  return result;
}