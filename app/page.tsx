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
    <div className="flex flex-col md:gap-20 pb-16 md:pb-44">
      <Hero />
      <Carrousel images={images} />
      <h2
        className={`${zen.className} text-2xl md:text-4xl text-center pb-96 pt-1`}
      >
        Nuestros Pilares
      </h2>
      <HeroProyecto />
      <Beneficios />
      <Locales />
      <Carrousel images={locales} />
    </div>
  );
}
