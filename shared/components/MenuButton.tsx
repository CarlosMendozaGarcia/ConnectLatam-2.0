"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Link from "next/link"

import Menu from "../../public/Menu.svg";
import {MenuItems} from "@/shared/menu.data";

export default function MenuButton() {
  const [toggle, setToggle] = useState(false);
  const t = useTranslations("NavBar");

  return (
    <div className="flex items-center ">
      <button
        type="button"
        onClick={() => setToggle(!toggle)}
        className="size-10 p-1 button-primary active:bg-secondary transition-all"
      >
        <Menu />
      </button>
      <div
        className={`absolute ${toggle ? "max-h-100 pointer-events-auto opacity-100" : "max-h-0 pointer-events-none opacity-0"}  w-screen left-0 top-full bg-primary  transition-all duration-500 ease-in-out z-10`}
      >
        <ul className="relative flex flex-col w-full items-stretch font-ui text-background text-body px-4 py-2 ">
          {MenuItems.map((m) => (
            <li key={m.slug} className="flex"><Link href={`/${m.slug}`} className="w-full">{t(m.key)}</Link></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
