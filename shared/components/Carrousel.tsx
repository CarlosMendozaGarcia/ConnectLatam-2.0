"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { SwiperModule, SwiperOptions } from "swiper/types";
import "swiper/css/bundle";

const moduleMap = {
    Navigation,
    Autoplay
} satisfies Record<string, SwiperModule>;

export type CarrouselModuleName = keyof typeof moduleMap;


export type PropsCarrousel = {
  children: React.ReactNode[];
  modules: CarrouselModuleName[];
  spaceBetween?: number;
  slidePerViews?: number | "auto";
  breakpoints?: SwiperOptions["breakpoints"];
  loop?: boolean;
  autoplay?: SwiperOptions['autoplay'];
  navigation?: boolean;

};

export default function Carrousel({
  children,
  modules,
  spaceBetween,
  slidePerViews,
  breakpoints,
  loop,
  autoplay,
  navigation,

}: PropsCarrousel) {

    const resolvedModules = modules.map((name) => moduleMap[name]);
  return (
    <Swiper
      modules={resolvedModules}
      navigation={modules.includes('Navigation') ? navigation ?? true : false}
      autoplay={modules.includes('Autoplay') ? autoplay ?? { delay: 3500 } : false}
      spaceBetween={spaceBetween}
      slidesPerView={slidePerViews}
      breakpoints={breakpoints}
      loop={loop}
      className="h-full w-full"
    >
      {children.map((child) => (
        <SwiperSlide className="w-full h-full ">{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
