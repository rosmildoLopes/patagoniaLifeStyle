"use client";

import React from "react";
import teamData from "../constants/teamData";
import Image from "next/image";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <div className="md:flex flex-wrap gap-10 w-10/12 md:w-full mx-auto py-12 justify-center items-center">
      {teamData.map((team, index) => (
        <motion.div
          key={index}
          className="w-full md:w-1/5 p-4 flex flex-col gap-5 md:gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <div className="flex justify-start items-start w-full">
            <Image
              src={team.image}
              alt="team icon"
              width={200}
              height={200}
              className="w-full"
              layout="intrinsic"
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full mx-auto md:gap-1">
            <p className="text-center text-lg font-extrabold">{team.name}</p>
            <p className="text-center italic">{team.profesion}</p>
          </div>
          <div className="flex justify-center px-1 w-11/12">
            <p className="text-justify text-lg">{team.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Team;
