import TutorialView from "@/features/tutorials/components/TutorialView";

const tutorials = [
  { name: "MNET", logo: "/light_mode.svg", tag: "Comeback", id:1 },
  { name: "DUCKAD", logo: "/light_mode.svg", tag: "Comeback" , id:2},
  { name: "LINC", logo: "/light_mode.svg", tag: "Comeback", id:3 },
  { name: "TIN", logo: "/light_mode.svg", tag: "Comeback", id:4 },
  { name: "HIGHER", logo: "/light_mode.svg", tag: "Comeback", id:5 },
  { name: "MUBEAT", logo: "/light_mode.svg", tag: "Comeback", id:6 },
  { name: "MUNIVERSE", logo: "/light_mode.svg", tag: "Comeback", id:7 },
  { name: "IDOLCHAMP", logo: "/light_mode.svg", tag: "Comeback", id:8 },
  { name: "COOGOONG", logo: "/light_mode.svg", tag: "Comeback", id:9 },
];

export default function Page() {
  return (
    <div className="flex-1 min-h-full w-full p-4">
      <div className="flex flex-col md:grid md:grid-cols-5 gap-4 ">
        {tutorials.map((t) => (
            <TutorialView  key={t.id} name={t.name} logo={t.logo} tag={t.tag} />
        ))}
      </div>
    </div>
  );
}
