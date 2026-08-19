import Link from "next/link";
import { getTranslations } from "next-intl/server";

import { MenuItems } from "@/shared/menu.data";
export default async function NavBar() {

    const t = await getTranslations("NavBar");
    
    return (<nav className="font-ui h-1/2 w-full">
        <ul className="h-full flex justify-between items-center border-2 px-4 py-2 rounded-xl">
            {MenuItems.map((m) => (
                <li key={m.slug}><Link href={`/${m.slug}`}>{t(m.key)}</Link></li>
            ))}
        </ul>
    </nav>)
}