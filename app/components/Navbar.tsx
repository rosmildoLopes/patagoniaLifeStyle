"use client";
import React, { useState } from "react";
import Image from "next/image";
import { RiCloseFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import Link from "next/link";
import TransitionLink from "./TransitionLink";
import { abel } from "@/app/font/font";
import { DrawOutlineButton } from "./DrawOutlineButton";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleMenuToggle = (): void => {
    setOpen(!open);
  };

  const handleLinkClick = (): void => {
    setOpen(false);
  };

  return (
    <nav className="fixed bg-background z-[1000] w-full top-0 m-0 box-border border mb-10">
      <div
        className={` ${abel.className} flex items-center font-medium justify-around`}
      >
        <div className="p-5 md:w-auto w-full flex justify-between z-[50]">
          <Link href={"/"} onClick={() => setOpen(false)}>
            <Image
              src="/logo.svg"
              alt="Logo Patagonia life Style"
              width={300}
              height={300}
              priority
              layout="intrinsic"
              className="md:w-24 w-20"
            />
          </Link>
          <div className="text-4xl md:hidden" onClick={handleMenuToggle}>
            {open ? (
              <p className="text-text text-5xl">
                <RiCloseFill />
              </p>
            ) : (
              <p className="text-text  text-5xl">
                <IoMenu />
              </p>
            )}
          </div>
        </div>
        <ul className="md:flex justify-center items-center hidden uppercase gap-20 text-text ">
          <li>
            <TransitionLink
              href="/nosotros"
              className=" text-xl font-black flex items-center uppercase justify-center h-12 transition duration-300"
              onClick={handleLinkClick}
            >
              <DrawOutlineButton>
                <h2 className="uppercase px-5 font-black  transition-all duration-300">
                  Nosotros
                </h2>
              </DrawOutlineButton>
            </TransitionLink>
          </li>
          <li>
            <TransitionLink
              href="/contacto"
              className="text-xl font-black flex hover:shadow-sm shadow-black items-center uppercase justify-center h-12 transition duration-300"
              onClick={handleLinkClick}
            >
              <DrawOutlineButton>
                <h2 className="uppercase font-black  transition-all duration-300">
                  Contacto
                </h2>
              </DrawOutlineButton>
            </TransitionLink>
          </li>
          <li>
            <Link
              href="#"
              target="_blank"
              className="transition duration-300 hover:shadow-lg flex justify-center  items-center border-text font-black text-3xl h-12"
              onClick={handleLinkClick}
            >
              <DrawOutlineButton>
                <LuInstagram />
              </DrawOutlineButton>
            </Link>
          </li>
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
            md:hidden bg-background text-text fixed overflow-x-hidden font-medium text-2xl w-11/12 mx-auto top-0 overflow-y-auto bottom-0 py-24
            duration-500 ${open ? "left-0" : "left-[-100%]"}
          `}
        >
          <li className="flex justify-center">
            <TransitionLink
              href="/nosotros"
              className="py-7 px-5 inline-block"
              onClick={handleLinkClick}
            >
              Nosotros
            </TransitionLink>
          </li>
          <li className="flex justify-center">
            <TransitionLink
              href="/contacto"
              className="py-7 px-5 inline-block"
              onClick={handleLinkClick}
            >
              Contacto
            </TransitionLink>
          </li>
          <li className="flex justify-center">
            <Link
              href="#"
              target="_blank"
              className="py-3 px-2 justify-center  items-center border-text inline-block font-black text-3xl"
              onClick={handleLinkClick}
            >
              <LuInstagram />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
