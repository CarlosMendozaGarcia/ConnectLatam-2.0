"use client";
import { useState } from "react";
import Link from "next/link"
import Menu from "../../public/Menu.svg";
export default function MenuButton() {
  const [toggle, setToggle] = useState(false);
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
        <ul className="static flex flex-col w-full font-ui text-background text-body px-4 py-2 ">
          <li className="w-full border-2 ">
            <Link href="/" className="w-full border-2">Home</Link>
          </li>
          <li className="w-full border-2 ">
            <Link href="/tutorials" className="w-full border-2">Tutorials</Link>
          </li>
          <li className="w-full border-2 ">
            <Link href="/shows" className="w-full border-2">Shows</Link>
          </li>
          <li className="w-full border-2 ">
            <Link href="/about" className="w-full border-2">About us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
