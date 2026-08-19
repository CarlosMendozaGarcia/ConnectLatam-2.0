import Link from "next/link"

export default async function LanguagueButton(){

    return<div className="flex gap-2 border-2">
        <Link href="/es">ES</Link>
        <Link href="/pt">PT</Link>
    </div>

}