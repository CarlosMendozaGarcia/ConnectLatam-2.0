'use client';
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LanguagueButton(){
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    const nextLocale= locale === "es" ? "pt":"es";
    
    const handleClick = () => {
        router.replace(pathname, {locale: nextLocale});
    }

    return <button onClick={handleClick} className="button-secondary px-2 py-0.5 uppercase">
        {nextLocale}
    </button>

}