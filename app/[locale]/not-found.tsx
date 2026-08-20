import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
    const t = await getTranslations("NotFound")
    return <div className="flex-1 w-full h-full content-center overflow-hidden p-4 border-2">
        <div className="flex flex-col gap-2 justify-center items-center  w-full h-full border-2">
            <div className="flex w-full gap-4 md:gap-16 items-center justify-center  border-2">
                <h1 className="border-2 text-primary text-center text-display font-display font-bold">Error <br />404</h1>
                <h2 className="border-2 text-primary text-center text-headings-lg font-titles md:whitespace-break-spaces">{t("Title")}</h2>
            </div>
            <p className="text-headings-sm font-body">{t("Subtitle")} <Link href="/" className="font-bold">{t("Cta")}</Link></p>
        </div>
    </div>
}