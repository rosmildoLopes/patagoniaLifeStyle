import Image from "next/image";
import Beneficios from "./components/Beneficios";
import Carrousel from "./components/Carrousel";
import Hero from "./components/Hero";
import HeroProyecto from "./components/HeroProyecto";
import Locales from "./components/Locales";
import { images } from "./constants/slideHome";
import { locales } from "./constants/slideLocales";
import {zen} from '@/app/font/font';


export default function Home() {
  return (
    <div className="flex flex-col md:gap-20 gap-10 pb-16 md:pb-44">
      <Hero />
      <Carrousel images={images} />
      <h2
        className={`${zen.className} text-2xl md:text-4xl text-center pt-1 md:-mb-12 mb-4`}
      >
        Nuestros Pilares
      </h2>
      <div className="flex justify-center items-center w-10/12 mx-auto p-0 mb-8 md:-mb-20">
        <Image src='/pilares.gif' width={600} height={600} alt="Gif pilares de la empresa" unoptimized className="w-full"/>
      </div>
      <HeroProyecto />
      <Beneficios />
      <Locales />
      <Carrousel images={locales} />
    </div>
  );
}
