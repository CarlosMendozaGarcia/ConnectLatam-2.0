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
  return {
    title: `${tutorial.appName} tutorial`,
    description: tutorial.description ?? `Tutorial para ${tutorial.appName}`
  };
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
    <div className="flex flex-col h-full w-full max-w-2xl overflow-hidden mx-auto gap-4 px-4 py-8">
      <h1 className="font-titles text-headings-md text-primary font-bold">{tutorial.appName}</h1>
      <div className="h-full ">
        <Carrousel modules={["Autoplay", "Navigation"]}>
          {stepsTutorial().map((m) => (
            <div key={m.id} className="relative w-full h-full rounded-xl overflow-hidden ">
              <Image
                src={m.src}
                alt={`Tutorial ${tutorial.appName} paso ${m.id}`}
                className="object-cover opacity-30"
                fill
              />
              <Image
                src={m.src}
                alt={`Tutorial ${tutorial.appName} paso ${m.id}`}
                className="object-contain backdrop-blur-xs "
                fill
              />
            </div>
          ))}
        </Carrousel>
      </div>
    </div>
  );
}
