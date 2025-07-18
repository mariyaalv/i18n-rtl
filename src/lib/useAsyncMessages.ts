import { useEffect, useState } from "react";

import type { Lang } from "@/types";

export function useAsyncMessages(lang: Lang, sections: string | string[]) {
  const [messages, setMessages] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    let isMounted = true;
    const sectionList = Array.isArray(sections) ? sections : [sections];

    Promise.all(
      sectionList.map((section) =>
        import(`@/translations/${lang}/${section}.json`).then((mod) => mod.default)
      )
    ).then((allMessages) => {
      if (isMounted) {
        const merged = Object.assign({}, ...allMessages);
        setMessages(merged);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [lang, sections]);

  return messages;
}