'use client'
import { ThemeProvider } from "next-themes";

/* props for themeProvider  */
type Props ={
    children: React.ReactNode;
}

export default function Provider({children}: Props) {
    return <ThemeProvider attribute={'data-theme'}>{children}</ThemeProvider>
}