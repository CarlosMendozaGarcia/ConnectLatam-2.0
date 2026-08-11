import NavBar from "../components/NavBar";
import ThemeButton from "../components/ThemeButton";

export default function Header() {
  return (
    <header className=" h-[10dvh] w-full shrink-0 z-10 px-4">
      <div className="hidden lg:grid lg:grid-cols-3 lg:items-center h-full w-full">
        <div></div>
        <NavBar />
        <div className="justify-self-end">
          <ThemeButton />
        </div>
      </div>
      <div className="flex justify-between items-center h-full w-full lg:hidden ">
        <div>Logo</div>
        <div className="flex gap-3 items-center ">
          <ThemeButton />
          <div>Menu</div>
        </div>
      </div>
    </header>
  );
}
