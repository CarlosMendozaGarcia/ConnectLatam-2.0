import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
    const t = await getTranslations("NotFound")
    return <div className="flex-1 w-full h-full  ">
        <div className="flex flex-col gap-2 justify-center items-center  w-full h-full p-4 ">
            <div className="flex gap-16 items-center">
                <h1 className="text-primary text-center text-display font-display font-bold">Error <br />404</h1>
                <h2 className="text-primary text-headings-lg font-titles whitespace-break-spaces">{t("Title")}</h2>
            </div>
            <p className="text-headings-sm font-body">{t("Subtitle")} <Link href="/" className="font-bold">{t("Cta")}</Link></p>
        </div>
    </div>
}