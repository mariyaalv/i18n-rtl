import { type FC, type ReactNode, useEffect } from "react"; 
import { IntlProvider } from "react-intl"; 
import { useLocation } from "react-router-dom"; 

import { LANG_DIRECTION } from "@/constants"; 
import { getOptimalLocale, pickMessages } from "@/lib"; 
import { useAsyncMessages } from "@/lib/useAsyncMessages"; 
import type { TranslationKey } from "@/page-translation-keys"; 
import type { Locale } from "@/types"; 

import { Loader } from "../loader"; 
 
interface LocaleProviderProps { 
    children: ReactNode; 
    defaultLocale?: Locale; 
    translationKeys: TranslationKey[]; 
} 
 
export const LocaleProvider: FC<LocaleProviderProps> = ({ 
    children, 
    defaultLocale, 
    translationKeys, 
}) => { 
    const { pathname, search } = useLocation(); 
    const { lang, locale } = getOptimalLocale(pathname, search); 
 
    useEffect(() => { 
        document.documentElement.dir = LANG_DIRECTION[lang] || "ltr"; 
        document.documentElement.lang = lang; 
    }, [lang]); 
 
    const messages = useAsyncMessages(lang); 
 
    if (!messages) { 
        return <Loader />; 
    } 
 
    return ( 
        <IntlProvider 
            key={locale} 
            locale={locale} 
            messages={pickMessages(translationKeys, messages)} 
            defaultLocale={defaultLocale} 
        > 
            {children} 
        </IntlProvider> 
    ); 
};