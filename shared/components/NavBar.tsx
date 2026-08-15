import Link from "next/link";
import {MenuItems} from "@/shared/menu.data";
export default function NavBar(){
    return (<nav className="font-ui h-1/2 w-full">
        <ul className="h-full flex justify-between items-center border-2 px-4 py-2 rounded-xl">
            {MenuItems.map((m) => (
                <li key={m.slug}><Link href={`/${m.slug}`}>{m.name}</Link></li>
            ))}
        </ul>
    </nav>)
}