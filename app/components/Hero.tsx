"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { zen } from "@/app/font/font";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -200px 0px", once: true });

  return (
    <div
      className="flex flex-col gap-6 md:flex-row justify-center items-center w-10/12 mx-auto "
      ref={ref}
    >
      {/* Animación del texto */}
      <motion.div
        className="flex flex-col justify-center items-center gap-8 w-full md:w-1/2 "
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 1 }}
      >
        <p className="italic" >NUMEN PATAGONIA LIFESTYLE</p>
        <p
          className={`${zen.className} text-2xl md:text-4xl font-medium md:w-2/3 text-center`}
        >
          “Modernidad y naturaleza en armonía, para un estilo de vida único en
          la Patagonia.”
        </p>
        <div
          className={`flex justify-between items-center w-10/12 md:w-2/3 text-sm`}
        >
          <p className="">VILLA LA ANGOSTURA</p>
          <p className="">2025</p>
        </div>
      </motion.div>

      {/* Animación de la imagen */}
      <motion.div
        className="flex justify-center items-start w-full mx-auto md:w-1/2 "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Image
          src="/hero.svg"
          className="w-full"
          width={500}
          height={500}
          alt="buildings"
        />
      </motion.div>
    </div>
  );
}
