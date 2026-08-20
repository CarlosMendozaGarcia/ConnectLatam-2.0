import { getTranslations } from "next-intl/server";

import Foot from "@/public/Footer.svg";

export default async function Footer() {
  const t = await getTranslations("Footer");
  return (
    <footer className="z-10 relative flex items-center justify-center shrink-0 h-[5dvh] w-full bg-primary  shadow-lg/50 shadow-secondary">
      <div
        className="absolute bottom-full shrink-0 h-[10dvh] w-full bg-primary"
        style={{
          maskImage: "url(/Footer.svg)",
          WebkitMaskImage: "url(/Footer.svg)",
          maskRepeat: "repeat-x",
          WebkitMaskRepeat: "repeat-x",
          maskSize: "auto 100%",
          WebkitMaskSize: "auto 100%",
          maskPosition: "center",
          WebkitMaskPosition: "center",
        }}
      ></div>
      <p className=" text-body font-ui text-background">
        {t("Title")}: OrionByPixel
      </p>
    </footer>
  );
}
