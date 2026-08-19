import { getTranslations } from "next-intl/server";

export default async  function Home() {
  const t = await getTranslations("Home")
  return (
    <div className="relative flex-1 h-full w-full  content-center overflow-hidden ">
      <h1 className="text-center text-primary text-display font-display font-bold p-4 whitespace-break-spaces">
        {t("Title")}
      </h1>
    </div>
  );
}
