"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import NumerosProyectos from "./NumerosProyctos";
import { zen } from "@/app/font/font";

const HeroProyecto = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    margin: "0px 0px -200px 0px",
    once: true,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={sectionRef}
      style={{ scale }}
      className="flex flex-col-reverse gap-6 md:flex-row justify-center items-center w-10/12 mx-auto min-h-screen"
    >
      <div className="flex justify-center items-start w-10/12 md:w-1/2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full h-full"
        >
          <Image
            src="/hero.svg"
            width={500}
            height={500}
            alt="buildings"
            layout="intrinsic"
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col justify-center items-center md:items-start gap-5 w-full md:w-1/2"
      >
        <p
          className={`${zen.className} font-black text-2xl md:text-4xl md:pl-6`}
        >
          Sobre el proyecto
        </p>
        <p className="italic font-medium md:text-xl md:pl-6 text-center">
          “Viví tu mejor versión, inspirado por la naturaleza patagónica”
        </p>
        <p className="text-justify text-xl w-11/12 text-black mx-auto font-medium">
          Descubrí un lugar donde la modernidad se encuentra con la serenidad de
          la naturaleza patagónica. Nuestros departamentos unipersonales y
          unifamiliares están diseñados con la máxima atención al detalle,
          ofreciendo espacios que combinan elegancia y funcionalidad.
        </p>
        <NumerosProyectos />
      </motion.div>
    </motion.div>
  );
};

export default HeroProyecto;
