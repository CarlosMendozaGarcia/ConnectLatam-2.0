import NavBar from "../components/NavBar";

export default function Header (){
    return <header className=" h-[10dvh] w-full grid grid-cols-3 items-center px-4 z-10 ">
        <div>Logo</div>
        <NavBar/>
        <div className="justify-self-end">Buttons</div>
    </header>
}