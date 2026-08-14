import TutorialView from "@/features/tutorials/components/TutorialView";
import { getAllTutorials } from "@/features/tutorials/lib/services";


export default async  function Page() {

  const tutorials = await getAllTutorials();

  return (
    <div className="flex-1 min-h-full w-full p-4">
      <div className="flex flex-col md:grid md:grid-cols-5 gap-4 ">
        {tutorials.map((t) => (
            <TutorialView  key={t.id} tutorial={t} />
        ))}
      </div>
    </div>
  );
}
