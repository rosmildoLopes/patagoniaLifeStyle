"use client";
import Image from "next/image";
import React from "react";
import { zen } from "../font/font";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="flex flex-col h-full md:flex-row py-10 md:py-20 w-10/12 mx-auto  gap-10">
      <motion.div
        className="w-full md:w-1/2 "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src={"/Contactosphoto.svg"}
          alt="Foto de contacto"
          width={600}
          height={700}
          className=""
        />
      </motion.div>
      <div className="w-full md:w-1/2 space-y-6">
        <motion.div
          className="flex flex-col md:flex-row w-full text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1,
            ease: [0.4, 0.0, 0.2, 1],
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="space-y-1 md:w-1/2">
              <h1
                className={`${zen.className} text-text text-3xl md:text-4xl md:text-start font-bold `}
              >
                Envianos un mensaje
              </h1>
              <h3 className="text-text xl:text-lg text-base italic md:text-start">{`Estamos aquí para ayudarte a hacer realidad tu proyecto`}</h3>
            </div>
            <p className="text-black text-base md:text-xl md:w-1/2 md:text-justify">
              Queremos saber de vos. Completá el formulario con tus datos y
              nuestro equipo se pondrá en contacto con vos a la brevedad. Ya sea
              que tengas preguntas, comentarios o quieras más información sobre
              nuestros servicios, estamos aquí para asistirte.
            </p>
          </div>
        </motion.div>
        <motion.form
          className="flex flex-col space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.4, 0.0, 0.2, 1], 
          }}
        >
          <input
            type="text"
            placeholder="Nombre"
            className="border-b-2  border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            placeholder="Mail"
            className="border-b-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="tel"
            placeholder="Teléfono"
            className=" border-b-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            placeholder="Mensaje"
            rows={4}
            className=" border-b-2 border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-black"
          />
          <div className="flex justify-end">
            <motion.button
              type="submit"
              className={`${zen.className} text-text border border-text flex items justify-center md:w-1/4 w-1/3 text-center md:py-3 md:px-9 py-3 hover:border-black`}
              whileHover={{
                scale: 1.05,
                backgroundColor: "#3C6068",
                color: "#fff",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 10,
              }}
            >
              ENVIAR
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default page;
