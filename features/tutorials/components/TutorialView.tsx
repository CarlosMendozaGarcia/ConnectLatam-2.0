import Image from "next/image";

type TutorialViewProps = {
  name: string;
  logo: string;
  tag: string;
};

export default function TutorialView({ name, logo, tag }: TutorialViewProps) {
  return (
    <div className="flex flex-row md:flex-col items-center justify-between md:justify-center text-center border-2 border-foreground rounded-xl px-4 md:p-2">
      <div>
        <Image src={logo} alt={`Logo of ${name}`} width={100} height={100} />
      </div>
      <div className="flex flex-col items-center ">
        <p className="font-titles font-bold text-primary">{name}</p>
        <p className="w-fit font-ui text-sm bg-secondary text-foreground rounded-full px-2 py-0.5 ">{tag}</p>
      </div>
    </div>
  );
}
