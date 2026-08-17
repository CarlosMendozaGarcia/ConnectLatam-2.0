import {
  getAllTutorials,
  getTutorialByApp,
} from "@/features/tutorials/lib/services";
import Carrousel from "@/shared/components/Carrousel";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const tutorials = await getAllTutorials();
  return tutorials.map((t) => ({ app: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { app: string };
}) {
  const { app } = await params;
  const tutorial = await getTutorialByApp(app);
  if (!tutorial) return {};
  return { title: tutorial.appName, description: tutorial.description };
}
export default async function TutorialPage({
  params,
}: {
  params: { app: string };
}) {
  const { app } = await params;
  const tutorial = await getTutorialByApp(app);

  if (!tutorial) return notFound();

  const stepsTutorial = () => {
    let images = [];
    for (let i = 0; i <= tutorial.steps; i++) {
      images.push({ id: i, src: `${tutorial.basePhotos}${i}.png` });
    }
    return images;
  };

  return (
    <div className="flex flex-col h-full w-full max-w-2xl overflow-hidden mx-auto gap-8 px-4 py-8 border-2 ">
      <div className="border-2 border-red-500">
        <h1>{tutorial.appName}</h1>
        <h2>descripción</h2>
        <p>{tutorial.description}</p>
      </div>
      <div className="h-full border-2 border-green-500">
        <Carrousel modules={["Autoplay","Navigation"]}>
          {stepsTutorial().map((m) => (
            <div key={m.id} className="relative w-full h-full border-2 border-yellow-500 ">
              <Image
                src={m.src}
                alt={`Tutorial ${tutorial.appName} paso ${m.id}`}
                className="object-contain"
                fill
              />
            </div>
          ))}
        </Carrousel>
      </div>
    </div>
  );
}
