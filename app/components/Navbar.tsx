"use client";
import React, { useState } from "react";
import Image from "next/image";
import { RiCloseFill } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";
import { LuInstagram } from "react-icons/lu";
import Link from "next/link";
import TransitionLink from "./TransitionLink";

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
      <div className="flex items-center font-medium justify-around">
        <div className="p-5 md:w-auto w-full flex justify-between z-[50]">
          <Link href={"/"} onClick={() => setOpen(false)}>
            <Image
              src="/logo.svg"
              alt="Logo Patagonia life Style"
              width={56}
              height={32}
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
        <ul className="md:flex justify-center items-center hidden uppercase  gap-20 text-text font-bold tracking-wide">
          <li>
            <TransitionLink
              href="/nosotros"
              className="py-3 px-5 border-2 border-text inline-block h-12"
              onClick={handleLinkClick}
            >
              NOSOTROS
            </TransitionLink>
          </li>
          <li>
            <TransitionLink
              href="/contacto"
              className="py-3 px-5 border-2 border-text inline-block h-12"
              onClick={handleLinkClick}
            >
              CONTACTO
            </TransitionLink>
          </li>
          <li>
            <Link
              href="#"
              target="_blank"
              className="py-3 px-2 border-2  flex justify-center  items-center border-text font-black text-3xl h-12"
              onClick={handleLinkClick}
            >
              <LuInstagram />
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
              NOSOTROS
            </TransitionLink>
          </li>
          <li className="flex justify-center">
            <TransitionLink
              href="/contacto"
              className="py-7 px-5 inline-block"
              onClick={handleLinkClick}
            >
              CONTACTO
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
