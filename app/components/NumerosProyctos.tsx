import React from "react";
import { Zen_Dots } from "next/font/google";
import AnimatedNumbers from "./AnimatedNumbers";

const zen = Zen_Dots({ subsets: ["latin"], weight: ["400"] });

const NumerosProyectos = () => {
  return (
    <div className={`${zen.className} flex flex-col w-full`}>
      <div className="flex justify-start p-6 md:p-3 xl:p-10 items-center gap-12 md:gap-6 xl:gap-12 w-full border-b-2">
        <h2 className="text-xl md:text-3xl xl:text-4xl font-bold w-1/6 ">+<AnimatedNumbers value={50} />
        </h2>
        <p className="font-  text-base md:text-lg xl:text-xl ">
          Departamentos unipersonales y unifamiliares
        </p>
      </div>
      <div className="flex justify-start p-6 md:p-3 xl:p-10 items-center gap-12 md:gap-6 xl:gap-12 w-full border-b-2">
        <h2 className="text-xl md:text-3xl xl:text-4xl font-bold  w-1/6">
          +<AnimatedNumbers value={40} /></h2>
        <p className=" text-base md:text-lg xl:text-xl w-5/6 ">Cocheras</p>
      </div>
      <div className="flex justify-start p-6 md:p-3 xl:p-10 items-center gap-12 md:gap-6 xl:gap-12 w-full border-b-2 md:border-none">
        <h2 className="text-xl md:text-3xl xl:text-4xl font-bold  w-1/6">+<AnimatedNumbers value={5} /></h2>
        <p className=" text-base md:text-lg xl:text-xl  w-5/6 ">
          Tiendas Comerciales
        </p>
      </div>
    </div>
  );
};

export default NumerosProyectos;
