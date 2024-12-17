import React from "react";
import { Zen_Dots } from "next/font/google";

const zen = Zen_Dots({ subsets: ["latin"], weight: ["400"] });

const NumerosProyectos = () => {
  return (
    <div className={`${zen.className} flex flex-col w-full`}>
      <div className="flex justify-start p-6 md:p-10 items-center gap-12 w-full border-b-2">
        <h2 className="text-xl md:text-4xl font-bold w-1/6 ">+50</h2>
        <p className="font- text-lg md:text-xl ">
          Departamentos unipersonales y unifamiliares
        </p>
      </div>
      <div className="flex justify-start p-6 md:p-10 items-center gap-12 w-full border-b-2">
        <h2 className="text-xl md:text-4xl font-bold  w-1/6">+40</h2>
        <p className="text-lg md:text-xl w-5/6 ">Cocheras</p>
      </div>
      <div className="flex justify-start p-6 md:p-10 items-center gap-12 w-full border-b-2 md:border-none">
        <h2 className="text-xl md:text-4xl font-bold  w-1/6">+5</h2>
        <p className="text-lg md:text-xl  w-5/6 ">
          Tiendas Comerciales
        </p>
      </div>
    </div>
  );
};

export default NumerosProyectos;
