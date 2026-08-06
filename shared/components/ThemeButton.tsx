'use client'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Light from "@/public/light_mode.svg";
import Dark from "@/public/dark_mode.svg";

export default function ThemeButton() {
    const [toggle, setToggle] = useState(false);
    const { setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    /* sets the theme and change the toggle */
    const changeTheme = () => {
        if (toggle) {
            setTheme('dark')

        } else {
            setTheme('light')
        }
        setToggle(!toggle)
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }


    return <button onClick={changeTheme} className="flex size-10 border-2 p-0.5 rounded-xl">
        {(toggle) && (
            <Dark />
        )}
        {(!toggle) && (
            <Light />
        )}
    </button>
}