'use client'
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Light from "@/public/light_mode.svg";
import Dark from "@/public/dark_mode.svg";

export default function ThemeButton() {
    const { theme, setTheme } = useTheme();
    const [toggle, setToggle] = useState(false);
    const [mounted, setMounted] = useState(false);

    /* sets the theme and change the toggle */
    const changeTheme = () => {
        if (toggle) {
            setTheme('light')

        } else {
            setTheme('dark')
        }
        setToggle(!toggle)
    };

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }


    return <button onClick={changeTheme} className="flex size-10 p-1  button-tertiary">
        {(toggle) && (
            <Dark />
        )}
        {(!toggle) && (
            <Light />
        )}
    </button>
}