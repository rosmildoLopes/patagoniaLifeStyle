import React from "react";
import Image from "next/image";
import { zen } from "@/app/font/font";

const HeroNosotros = () => {
  return (
    <div className="flex flex-col w-10/12 pt-16 mx-auto gap-24 md:flex-row justify-center items-center">
      <div className="flex  md:w-1/2 ">
        <Image
          src="nosotros-main.svg"
          className="w-full"
          width={602}
          height={447}
          alt="buildings"
          priority
        />
      </div>
      <div className="flex flex-col gap-6 w-full md:w-1/2">
        <p className={`${zen.className} text-4xl text-start `}>Sobre nosotros</p>
        <p className="text-lg text-start italic font-medium">
          En Numen Patagonia Lifestyle, la modernidad y la naturaleza se
          fusionan para ofrecerte un estilo de vida inigualable en el corazón de
          la Patagonia.
        </p>
        <div className="flex flex-col gap-6 text-lg  text-black">
          <p className="">
            Diseñamos espacios que integran armoniosamente el
            entorno natural con un toque moderno, promoviendo el equilibrio y el
            bienestar.
          </p>
          <p className="">
            Situados en la encantadora Villa La Angostura, nuestras
            residencias ofrecen una conexión íntima con el paisaje patagónico,
            asegurando confort, eficiencia y una experiencia exclusiva.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroNosotros;
