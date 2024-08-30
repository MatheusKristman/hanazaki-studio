"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { ContainerAnimation, TradesAnimation } from "@/constants/framer/about-trades-animations";

export function AboutTrades() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={ContainerAnimation}
      className="w-full bg-gray-secondary px-6 sm:px-16 py-4 flex items-center justify-around"
    >
      <motion.div variants={TradesAnimation} className="relative w-12 h-5 sm:w-20 sm:h-9 lg:w-36 lg:h-14">
        <Image
          src="/images/gvc.svg"
          alt="GVC Virtualização de construções"
          fill
          className="object-contain object-center"
        />
      </motion.div>

      <motion.div variants={TradesAnimation} className="relative w-14 h-4 sm:w-28 sm:h-6 lg:w-44 lg:h-10">
        <Image src="/images/cyrela.svg" alt="Cyrela" fill className="object-contain object-center" />
      </motion.div>
    </motion.section>
  );
}
