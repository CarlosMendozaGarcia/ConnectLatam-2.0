
import ShowViewList from "@/features/shows/components/ShowViewList";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Shows musicales",
  description:
    "Encuentra información sobre los shows musicales que importan para proximas votaciones y/o comebacks para Enhypen",
  openGraph: {
    title: "Shows musicales",
    description:
      "Encuentra información sobre los shows musicales que importan para proximas votaciones y/o comebacks para Enhypen",
  },
};

export default function Page() {
  return (
    <div className="h-full w-full flex flex-col overflow-hidden p-4">
      <ShowViewList/>
    </div>
  );
}
