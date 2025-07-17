import { useEffect, useState } from "react";

import type { Lang } from "@/types";

export function useAsyncMessages(lang: Lang) {
  const [messages, setMessages] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    let isMounted = true;
    import(`@/translations/${lang}.json`)
      .then((mod) => {
        if (isMounted) setMessages(mod.default);
      });
    return () => { isMounted = false; };
  }, [lang]);

  return messages;
}