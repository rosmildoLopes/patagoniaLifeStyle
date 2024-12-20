"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { zen } from "@/app/font/font";

const Locales = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -200px 0px", once: false });

  return (
    <div
      className="flex flex-col justify-center items-center w-10/12 mx-auto"
      ref={ref}
    >
      <motion.h2
        className={`${zen.className} font-black text-2xl md:text-4xl text-center -mb-16 md:mb-10`}
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
      >
        Descubrí nuestras viviendas y locales
      </motion.h2>

      <div className="md:flex w-full gap-10 justify-between hidden">
        {/* Imágenes de la izquierda */}
        <motion.div
          className="flex flex-col gap-10 w-9/12 mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, staggerChildren: 0.3 }}
        >
          {/* Primera Línea */}
          <motion.div
            className="flex gap-10 items-end w-full"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="w-2/6 relative">
              <Image
                src="locales-foto-1.svg"
                alt="icono"
                width={200}
                height={200}
                className="w-full"
                layout="intrinsic"
              />
            </div>
            <div className="w-4/6 relative">
              <Image
                src="locales-foto-2.svg"
                alt="icono"
                width={200}
                height={200}
                className="w-full"
                layout="intrinsic"
              />
            </div>
          </motion.div>

          {/* Segunda Línea */}
          <motion.div
            className="flex gap-10"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="w-4/6 relative h-full">
              <Image
                src="locales-foto-3.svg"
                alt="icono"
                width={200}
                height={200}
                className="w-full"
                layout="intrinsic"
              />
            </div>
            <div className="w-2/6 relative">
              <Image
                src="/locales-foto-4.svg"
                alt="team Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.div>

          {/* Tercera Línea */}
          <motion.div
            className="flex gap-10"
            initial={{ opacity: 0, x: -290 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <div className="w-2/6 relative">
              <Image
                src="/locales-foto-5.svg"
                alt="team Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-4/6 relative">
              <Image
                src="locales-foto-6.svg"
                alt="icono"
                width={200}
                height={200}
                className="w-full"
                layout="intrinsic"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Imágenes de la derecha */}
        <motion.div
          className="w-3/12 flex flex-col gap-10 justify-end"
          initial={{ opacity: 0, y: -250 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 250 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="relative h-[25%]">
            <Image
              src="/locales-foto-7.svg"
              alt="team Image"
              width={200}
              height={200}
              className="w-full"
              layout="intrinsic"
            />
          </div>
          <div className="relative h-[50%]">
            <Image
              src="/locales-foto-8.svg"
              alt="team Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Locales;
