"use client";
import { useState } from "react";
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
        className={`absolute ${toggle ? "max-h-100 pointer-events-auto opacity-100" : "max-h-0 pointer-events-none opacity-0"}  w-full left-0 top-full bg-primary  transition-all duration-500 ease-in-out z-10`}
      >
        <ul className="flex flex-col justify-between items-center font-ui text-background px-4 py-2 rounded-xl">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/tutorials">Tutorials</a>
          </li>
          <li>
            <a href="/shows">Shows</a>
          </li>
          <li>
            <a href="/about">About us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
