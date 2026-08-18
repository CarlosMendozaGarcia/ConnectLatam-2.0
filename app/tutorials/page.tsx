import { Metadata } from "next";
import TutorialView from "@/features/tutorials/components/TutorialView";
import { getAllTutorials } from "@/features/tutorials/lib/services";

export const metadata: Metadata = {
  title: "Tutoriales",
  description: "Encuentra nuestro catalogo de tutoriales para la recolección de votos para comebacks, apps generales, etc ",
  openGraph: {
    title:"Tutoriales",
    description: "Encuentra nuestro catalogo de tutoriales para la recolección de votos para comebacks, apps generales, etc ",
  }
}

export default async  function Page() {

  const tutorials = await getAllTutorials();

  return (
    <div className="flex-1 min-h-full w-full p-4">
      <div className="flex flex-col md:grid md:grid-cols-[repeat(auto-fill,minmax(150px,1fr))]  gap-4 ">
        {tutorials.map((t) => (
            <TutorialView  key={t.id} tutorial={t} />
        ))}
      </div>
    </div>
  );
}
