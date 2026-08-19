import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shows musicales",
  description: "Encuentra información sobre los shows musicales que importan para proximas votaciones y/o comebacks para Enhypen",
  openGraph: {
    title:"Shows musicales",
    description: "Encuentra información sobre los shows musicales que importan para proximas votaciones y/o comebacks para Enhypen",
  }
}

export default function Page() {
    return <div className="h-full w-full flex flex-col overflow-hidden p-10">
        <div className="h-full w-full border-2 flex flex-col lg:flex-row justify-between">
            <div className="text-background flex-1 hover:flex-6 bg-primary transition-[flex] duration-300"><h2 className=" text-headings-sm font-titles font-bold">Music Bank</h2></div>
            <div className="text-background flex-1 hover:flex-6 bg-primary/90 transition-[flex] duration-300"><h2 className=" text-headings-sm font-titles font-bold">Music Core</h2></div>
            <div className="text-background flex-1 hover:flex-6 bg-primary/80 transition-[flex] duration-300"><h2 className=" text-headings-sm font-titles font-bold">Show Champion</h2></div>
            <div className="text-background flex-1 hover:flex-6 bg-primary/70 transition-[flex] duration-300"><h2 className=" text-headings-sm font-titles font-bold">Mcountdown</h2></div>
            <div className="text-background flex-1 hover:flex-6 bg-primary/60 transition-[flex] duration-300"><h2 className=" text-headings-sm font-titles font-bold">Inkigayo</h2></div>
        </div>
    </div>
}