
import { getAllTutorials, getTutorialByApp } from "@/features/tutorials/lib/services"
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const tutorials = await getAllTutorials();
    return tutorials.map(t => ({ app: t.slug }));
}

export async function generateMetadata({ params }: { params: { app: string } }) {
    const { app } = await params
    const tutorial = await getTutorialByApp(app)
    if (!tutorial) return {}
    return { title: tutorial.appName, description: tutorial.description }
}
export default async function TutorialPage({ params }: { params: { app: string } }) {

    const { app } = await params
    const tutorial = await getTutorialByApp(app);
    console.log(tutorial)
    if (!tutorial) return notFound();

    return <div className="flex flex-col min-h-full w-full max-w-2xl mx-auto gap-14 px-4 py-8">
        <h1>{tutorial.appName}</h1>
        <h2>Descripcion</h2>
        <p>{tutorial.description}</p>
    </div>
}