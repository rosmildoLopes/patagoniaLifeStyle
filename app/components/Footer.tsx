"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  // Variantes de animación
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
      {/* Footer principal */}
      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-footer flex flex-col items-center md:flex-row md:justify-between py-10"
      >
        {/* Logo */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:pl-16 pb-5"
        >
          <Image
            src={"logo-verde 2.svg"}
            alt="Footer logo"
            height={70}
            width={89}
          />
        </motion.div>

        {/* Enlaces */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:pr-16 md:space-x-20 items-center"
        >
          <ul className="flex flex-col md:flex-row md:space-x-10 space-y-7 md:space-y-0 items-center">
            <li>
              <Link href={"/nosotros"} target="_blank">
                <h2>Nosotros</h2>
              </Link>
            </li>
            <li>
              <Link href={"/contacto"} target="_blank">
                <h2>Contacto</h2>
              </Link>
            </li>
          </ul>

          {/* Redes sociales */}
          <ul className="flex flex-row md:space-x-5 space-x-3 pt-4 md:pt-0">
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
