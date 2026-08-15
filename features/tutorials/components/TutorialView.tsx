import Image from "next/image";
import Link from "next/link";
import { Tutorial } from "../lib/tutorials.dto";

type TutorialViewProps = {
  tutorial: Tutorial;
};

export default function TutorialView({ tutorial }: TutorialViewProps) {
  return (
    <Link href={`/tutorials/${tutorial.slug}`}className="flex flex-row md:flex-col items-center justify-between md:justify-center text-center border-2 border-foreground rounded-xl px-4 py-2 md:p-2">
      <div className=" rounded-xl overflow-hidden">
        <Image src={tutorial.logo} alt={`Logo of ${tutorial.appName}`} width={100} height={100} />
      </div>
      <div className="flex flex-col items-center ">
        <h2 className="font-titles font-bold text-primary text-headings-sm">{tutorial.appName}</h2>
        <p className="w-fit font-ui text-sm bg-secondary text-foreground rounded-full px-2 py-0.5 ">{tutorial.type}</p>
      </div>
    </Link>
  );
}
