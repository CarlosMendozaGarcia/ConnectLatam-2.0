import Link from "next/link";

export default function NotFound() {
    return <div className="flex-1 w-full h-full  ">
        <div className="flex flex-col gap-2 justify-center items-center  w-full h-full ">
            <div className="flex gap-16 items-center">
                <h1 className="text-primary text-center text-display font-display font-bold">Error <br />404</h1>
                <h2 className="text-primary text-headings-lg font-titles">La pagina se ha <br /> desvanecido</h2>
            </div>
            <p className="text-headings-sm font-body">Entre estas páginas solo quedan sombras. <Link href="/" className="font-bold">Quizás sea hora de regresar...</Link></p>
        </div>
    </div>
}