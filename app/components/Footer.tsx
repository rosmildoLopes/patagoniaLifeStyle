"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FooterButtons } from "./FooterButtons";
import { abel } from "@/app/font/font";

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.5 } },
  };

  return (
    <div className="w-full">
      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-footer flex flex-col items-center md:flex-row md:justify-between py-10 gap-6 md:px-32"
      >
        {/* Logo */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pb-5"
        >
          <Image
            src={"logo-verde 2.svg"}
            alt="Footer logo"
            height={70}
            width={89}
          />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-6 md:gap-16 items-center justify-center"
        >
          <ul
            className={`${abel.className} flex flex-col font-bold md:flex-row items-center gap-6 md:gap-12 `}
          >
            <li className="transition duration-300">
              <Link href={"/nosotros"} target="_blank">
                <FooterButtons>
                  <h2 className={`font-black text-2xl uppercase`}>Nosotros</h2>
                </FooterButtons>
              </Link>
            </li>
            <li className="transition duration-300">
              <Link href={"/contacto"} target="_blank">
                <FooterButtons>
                  <h2 className={`font-black text-2xl uppercase`}>Contacto</h2>
                </FooterButtons>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-row gap-12">
            <li>
              <Link href={""} target="_blank">
                <motion.div
                  variants={fadeInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Image
                    src={"PhoneIcon.svg"}
                    alt="Phone logo"
                    width={57}
                    height={50}
                  />
                </motion.div>
              </Link>
            </li>
            <li>
              <Link href={""} target="_blank">
                <motion.div
                  variants={fadeInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Image
                    src={"MailIcon.svg"}
                    alt="Mail logo"
                    width={57}
                    height={50}
                  />
                </motion.div>
              </Link>
            </li>
            <li>
              <Link href={""} target="_blank">
                <motion.div
                  variants={fadeInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Image
                    src={"InstagramIcon.svg"}
                    alt="Instagram logo"
                    width={57}
                    height={50}
                  />
                </motion.div>
              </Link>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* SubFooter */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-subFooter"
      >
        <h4 className="text-footerText md:text-sm text-[10px] italic text-center py-3">
          Copyright 2024 © Desarrollado por NUMEN PUBLICIDAD
        </h4>
      </motion.div>
    </div>
  );
};

export default Footer;
