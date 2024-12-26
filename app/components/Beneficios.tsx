"use client";
import React from "react";
import beneficiosData from "../constants/beneficiosData";
import Image from "next/image";
import { motion } from "framer-motion";

const Beneficios = () => {
  return (
    <div className="flex flex-wrap gap-4 w-9/12 md:w-full mx-auto md:py-12 justify-center items-start">
      {beneficiosData.map((beneficio, index) => (
        <motion.div
          key={index}
          className="w-full md:w-1/5 md:p-4 flex flex-row md:flex-col gap-5 md:gap-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <div className="flex justify-start items-start w-28 md:w-16">
            <Image
              src={beneficio.image}
              alt="icono"
              width={200}
              height={200}
              className="w-full"
              layout="intrinsic"
            />
          </div>
          <div className="flex flex-col justify-start md:gap-6">
            <p className="text-start md:text-lg font-bold">{beneficio.title}</p>
            <p className="text-start text-sm md:text-lg font-normal text-black">
              {beneficio.content}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Beneficios;
