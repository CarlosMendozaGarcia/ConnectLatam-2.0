"use client";
import Image from "next/image";
import { useState

 } from "react";
export default function ShowViewList() {

    const [toggle, setToggle] = useState(0)

  return (
    <div className="h-full w-full  flex flex-col lg:flex-row justify-between">
      <div
        onClick= {() => setToggle(0)}
        className={`flex flex-col text-background ${toggle == 0? "flex-6" : "flex-0.5 md:flex-1"}  bg-primary transition-[flex] duration-300 group`}
      >
        <h2 className=" text-body md:text-headings-sm font-titles font-bold">
          Music Bank
        </h2>
        <div className={`relative w-full grow ${toggle == 0? "opacity-100" : "opacity-0 "} transition-opacity duration-300`}>
          <Image
            src={"/shows/MusicBank.webp"}
            alt="Show musical para Music Bank"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div
        onClick= {() => setToggle(1)}
        className={`flex flex-col text-background ${toggle == 1? "flex-6" : "flex-0.5 md:flex-1"} bg-primary/90 transition-[flex] duration-300 group`}
      >
        <h2 className=" text-body md:text-headings-sm font-titles font-bold">
          Music Core
        </h2>
        <div className={`relative w-full grow ${toggle == 1? "opacity-100" : "opacity-0 "} transition-opacity duration-300`}>
          <Image
            src={"/shows/MusicCore.webp"}
            alt="Show musical para Music Core"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div
        onClick= {() => setToggle(2)}
        className={`flex flex-col text-background ${toggle == 2? "flex-6" : "flex-0.5 md:flex-1"}  bg-primary/80 transition-[flex] duration-300 group`}
      >
        <h2 className=" text-body md:text-headings-sm font-titles font-bold">
          Show Champion
        </h2>
        <div className={`relative w-full grow ${toggle == 2? "opacity-100" : "opacity-0 "} transition-opacity duration-300`}>
          <Image
            src={"/shows/ShowChampion.webp"}
            alt="Show musical para Show Champion"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div
        onClick= {() => setToggle(3)}
        className={`flex flex-col text-background ${toggle == 3? "flex-6" : "flex-0.5 md:flex-1"}  bg-primary/70 transition-[flex] duration-300 group`}
      >
        <h2 className=" text-body md:text-headings-sm font-titles font-bold">
          Mcountdown
        </h2>
        <div className={`relative w-full grow ${toggle == 3? "opacity-100" : "opacity-0 "} transition-opacity duration-300`}>
          <Image
            src={"/shows/Mcountdown.webp"}
            alt="Show musical para Mcountdown"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div
        onClick= {() => setToggle(4)}
        className={`flex flex-col text-background ${toggle == 4? "flex-6" : "flex-0.5 md:flex-1"}  bg-primary/60 transition-[flex] duration-300 group`}>
        <h2 className=" text-body md:text-headings-sm font-titles font-bold">
          Inkigayo
        </h2>
        <div className={`relative w-full grow ${toggle == 4? "opacity-100" : "opacity-0 "} transition-opacity duration-300`}>
          <Image
            src={"/shows/Inkigayo.webp"}
            alt="Show musical para Inkigayo"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
