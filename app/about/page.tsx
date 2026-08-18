import { Metadata } from "next";

import X from "@/public/X.svg";
import Ig from "@/public/Instagram.svg";
import Email from "@/public/Email.svg";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description: "Encuentra mas información sobre Connect Latam VT, nuestra visión, misión y principales aliados",
  openGraph: {
    title:"Sobre nosotros",
    description: "Encuentra mas información sobre Connect Latam VT, nuestra visión, misión y principales aliados",
  }
}

export default function Page() {
  return (
    <div className="flex-1 flex flex-col gap-16 items-center text-center min-h-full w-full px-4 py-8">
      <div className="flex flex-col gap-4 max-w-2xl ">
        <h1 className="font-titles font-semibold text-headings-lg text-primary"> Sobre nosotros</h1>
        <p className="text-body font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, lorem ac mattis suscipit, sem eros faucibus tellus, id posuere sapien sem eget libero. Ut placerat lorem et congue bibendum. Vivamus cursus, metus eget sagittis pretium, ante est pulvinar enim, at sagittis erat neque vitae metus. Curabitur felis orci, dapibus a lacus a, consequat ornare diam. Quisque lectus ex, pretium vel nisi a, aliquam commodo purus. Aliquam condimentum justo in nisi porta, eu feugiat sem egestas. Praesent eu eros eget urna convallis tempus eu eget nulla. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla dui ante, pharetra sit amet quam in, consectetur fermentum sem. Suspendisse volutpat ante non eleifend accumsan. Vivamus finibus purus nec lorem gravida, at vulputate lectus ullamcorper. Aenean rhoncus tincidunt enim auctor aliquet.</p>
      </div>
      <div className="flex flex-col gap-4 max-w-2xl ">
        <h2 className="font-titles font-semibold text-headings-lg text-primary">Mision</h2>
        <p className="text-body font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, lorem ac mattis suscipit, sem eros faucibus tellus, id posuere sapien sem eget libero. Ut placerat lorem et congue bibendum. Vivamus cursus, metus eget sagittis pretium, ante est pulvinar enim, at sagittis erat neque vitae metus. Curabitur felis orci, dapibus a lacus a, consequat ornare diam. Quisque lectus ex, pretium vel nisi a, aliquam commodo purus. Aliquam condimentum justo in nisi porta, eu feugiat sem egestas. Praesent eu eros eget urna convallis tempus eu eget nulla. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla dui ante, pharetra sit amet quam in, consectetur fermentum sem. Suspendisse volutpat ante non eleifend accumsan. Vivamus finibus purus nec lorem gravida, at vulputate lectus ullamcorper. Aenean rhoncus tincidunt enim auctor aliquet.</p>
      </div>
      <div className="flex flex-col gap-4 max-w-2xl ">
        <h2 className="font-titles font-semibold text-headings-lg text-primary">Visión</h2>
        <p className="text-body font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, lorem ac mattis suscipit, sem eros faucibus tellus, id posuere sapien sem eget libero. Ut placerat lorem et congue bibendum. Vivamus cursus, metus eget sagittis pretium, ante est pulvinar enim, at sagittis erat neque vitae metus. Curabitur felis orci, dapibus a lacus a, consequat ornare diam. Quisque lectus ex, pretium vel nisi a, aliquam commodo purus. Aliquam condimentum justo in nisi porta, eu feugiat sem egestas. Praesent eu eros eget urna convallis tempus eu eget nulla. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla dui ante, pharetra sit amet quam in, consectetur fermentum sem. Suspendisse volutpat ante non eleifend accumsan. Vivamus finibus purus nec lorem gravida, at vulputate lectus ullamcorper. Aenean rhoncus tincidunt enim auctor aliquet.</p>
      </div>
      <div className="flex flex-col gap-4 max-w-2xl ">
        <h2 className="font-titles font-semibold text-headings-lg text-primary">Paises aliados</h2>
        <p className="text-body font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, lorem ac mattis suscipit, sem eros faucibus tellus, id posuere sapien sem eget libero. Ut placerat lorem et congue bibendum. Vivamus cursus, metus eget sagittis pretium, ante est pulvinar enim, at sagittis erat neque vitae metus. Curabitur felis orci, dapibus a lacus a, consequat ornare diam. Quisque lectus ex, pretium vel nisi a, aliquam commodo purus. Aliquam condimentum justo in nisi porta, eu feugiat sem egestas. Praesent eu eros eget urna convallis tempus eu eget nulla. In hac habitasse platea dictumst. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla dui ante, pharetra sit amet quam in, consectetur fermentum sem. Suspendisse volutpat ante non eleifend accumsan. Vivamus finibus purus nec lorem gravida, at vulputate lectus ullamcorper. Aenean rhoncus tincidunt enim auctor aliquet.</p>
      </div>
      <div className="flex flex-col gap-4 max-w-2xl ">
        <h2 className="font-titles font-semibold text-headings-lg text-primary">Contactanos</h2>
        <div className="flex flex-col gap-4 ">
          <div className="flex items-center gap-2 font-body text-headings-sm">
            <div className="size-10 button-tertiary">
              <X/>
            </div>
            <p>@connect_latamvt</p>
          </div>
          <div className="flex items-center gap-2 font-body text-headings-sm">
            <div className="size-10 button-tertiary">
              <Ig/>
            </div>
            <p>@connectlatam_vt</p>
          </div>
          <div className="flex items-center gap-2 font-body text-headings-sm">
            <div className="size-10 button-tertiary">
              <Email/>
            </div>
            <p></p>
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