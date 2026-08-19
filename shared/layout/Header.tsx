import NavBar from "../components/NavBar";
import ThemeButton from "../components/ThemeButton";
import Logo from "../../public/Logo.svg";
import MenuButton from "../components/MenuButton";
import LanguagueButton from "../components/LanguageButton";

export default function Header() {
  return (
    <header className="relative top-0 h-[10dvh] w-full shrink-0 z-10 px-4 bg-linear-to-b from-background from-80% to-transparent ">
      <div className="hidden lg:grid lg:grid-cols-[1fr_2fr_1fr] lg:items-center h-full w-full">
        <Logo className="h-full w-auto fill-primary"/>
        <NavBar />
        <div className="justify-self-end">
          <LanguagueButton/>
          <ThemeButton />
        </div>
      </div>
      <div className="flex justify-between items-center h-full w-full lg:hidden ">
        <Logo className="h-full w-auto fill-primary"/>
        <div className="flex gap-3 items-center ">
          <ThemeButton />
          <MenuButton />
        </div>
      </div>
    </header>
  );
}
