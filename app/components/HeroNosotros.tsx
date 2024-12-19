import React from "react";
import Image from "next/image";
import { Zen_Dots } from "next/font/google";

const zen = Zen_Dots({ subsets: ["latin"], weight: ["400"] });

const HeroNosotros = () => {
  return (
    <div className="flex flex-col w-10/12 pt-16 mx-auto gap-24 md:flex-row justify-center items-center">
      <div className="flex  md:w-1/2 ">
        <Image
          src="nosotros.svg"
          className="w-full"
          width={602}
          height={447}
          alt="buildings"
        />
      </div>
      <div className="flex flex-col gap-8 w-full md:w-1/2">
        <p className={`${zen.className} text-4xl text-start`}>Sobre nosotros</p>
        <p className="text-lg text-start italic">“Alguna frase.....”</p>
        <div className="flex flex-col space-y-8 text-sm text-black">
          <p className="">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroNosotros;
