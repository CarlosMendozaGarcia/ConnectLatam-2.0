import { Metadata } from "next";
import Image from "next/image";

import Carrousel from "@/shared/components/Carrousel";
import { accounts } from "@/shared/accounts.data";
import X from "@/public/X.svg";
import Ig from "@/public/Instagram.svg";
import Email from "@/public/Email.svg";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Encuentra mas información sobre Connect Latam VT, nuestra visión, misión y principales aliados",
  openGraph: {
    title: "Sobre nosotros",
    description:
      "Encuentra mas información sobre Connect Latam VT, nuestra visión, misión y principales aliados",
  },
};

export default function Page() {
  return (
    <div className="flex-1 flex flex-col gap-16 items-center text-center min-h-full w-full px-4 py-8 ">
      <div className="flex flex-col gap-4 max-w-2xl w-full">
        <h1 className="font-titles font-semibold text-headings-lg text-primary">
          {" "}
          Sobre nosotros
        </h1>
        <p className="text-body font-body">
          <span className="text-primary font-bold">CONNECT LATAM VT</span> nace
          como una red de colaboración entre fanbases y fan accounts de
          Latinoamérica con el propósito de unificar esfuerzos, compartir
          información confiable y coordinar estrategias de votación que permitan
          maximizar el apoyo de la región en cada comeback, premiación y
          actividad oficial.
        </p>
      </div>
      <div className="flex flex-col gap-4 max-w-2xl w-full">
        <h2 className="font-titles font-semibold text-headings-lg text-primary">
          Mision
        </h2>
        <p className="text-body font-body">
          <span className="text-primary font-bold">CONNECT LATAM VT</span> busca
          centralizar la información relacionada con las votaciones, facilitar
          la coordinación entre fanbases y fan accounts de la región, y promover
          estrategias conjuntas que permitan optimizar la participación del
          fandom latinoamericano.
        </p>
      </div>
      <div className="flex flex-col gap-4 max-w-2xl w-full">
        <h2 className="font-titles font-semibold text-headings-lg text-primary">
          Visión
        </h2>
        <p className="text-body font-body">
          El propósito del proyecto es fortalecer la forma en que la región
          participa. Una comunidad organizada puede tomar mejores decisiones,
          utilizar sus recursos de manera más eficiente y responder con mayor
          rapidez a los objetivos de cada campaña de votación.{" "}
          <span className="text-primary font-bold">CONNECT LATAM VT</span>{" "}
          responde a esa necesidad de coordinación, convirtiéndose en un espacio
          de colaboración sin ánimo de lucro donde el trabajo conjunto permite
          potenciar el impacto del apoyo latino hacia{" "}
          <span className="text-primary font-bold">ENHYPEN.</span>
        </p>
      </div>
      <div className="flex flex-col gap-4 max-w-2xl w-full ">
        <h2 className="font-titles font-semibold text-headings-lg text-primary">
          Miembros de alianza
        </h2>
        <div className="w-full ">
          <Carrousel modules={["Autoplay", "Navigation"]} loop={true} spaceBetween={10}>
            {accounts.map((a) => (
              <div key={a.name} className="bg-primary flex flex-col md:flex-row w-full h-100 items-center justify-center px-6 rounded-xl">
                <div className="relative w-full md:w-1/2 h-full ">
                  <Image
                    src={a.logo}
                    alt={`Logo de ${a.name}`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col items-center justify-center w-1/2 ">
                  {a.socialMedias.map((s) => (
                    <p key={s.name} className="text-background font-ui text-headings-sm"><span className="font-bold">{s.name}: </span>{s.user}</p>
                  ))}
                </div>
              </div>
            ))}
          </Carrousel>
        </div>
      </div>
      <div className="flex flex-col gap-4 max-w-2xl ">
        <h2 className="font-titles font-semibold text-headings-lg text-primary">
          Contactanos
        </h2>
        <div className="flex flex-col gap-4 ">
          <div className="flex items-center gap-2 font-body text-headings-sm">
            <div className="size-10 button-tertiary">
              <X />
            </div>
            <p>@connect_latamvt</p>
          </div>
          <div className="flex items-center gap-2 font-body text-headings-sm">
            <div className="size-10 button-tertiary">
              <Ig />
            </div>
            <p>@connectlatam_vt</p>
          </div>
          <div className="flex items-center gap-2 font-body text-headings-sm">
            <div className="size-10 button-tertiary">
              <Email />
            </div>
            <p>connectvty024@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
{ name: "CONNECT LATAM VT",
    socialMedias: [{ name:"X", user:""},{ name:"Instagram", user:""}]
}, */
