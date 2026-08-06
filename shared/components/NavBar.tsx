export default function NavBar(){
    return (<nav className="font-ui h-1/2 w-full">
        <ul className="h-full flex justify-between items-center border-2 px-4 py-2 rounded-xl">
            <li><a href="/">Home</a></li>
            <li><a href="/tutorials">Tutorials</a></li>
            <li><a href="/shows">Shows</a></li>
            <li><a href="/about">About us</a></li>
        </ul>
    </nav>)
}