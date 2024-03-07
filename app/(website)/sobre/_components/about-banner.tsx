"use client";

import { motion } from "framer-motion";

import {
  BannerAnimation,
  TextAnimation,
} from "@/constants/framer/about-banner-animations";

export function AboutBanner() {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={BannerAnimation}
      className="w-full h-40 flex items-end justify-center bg-about-banner-mobile bg-no-repeat bg-cover bg-center sm:h-60 sm:bg-about-banner-tablet lg:bg-about-banner-desktop lg:h-[430px] lg:items-center"
    >
      <motion.h1
        initial="initial"
        animate="animate"
        variants={TextAnimation}
        className="poppins-font text-4xl text-gold-primary font-medium text-center mb-6 sm:mb-16 sm:text-5xl lg:mb-0 lg:text-6xl"
      >
        Quem Somos?
      </motion.h1>
    </motion.section>
  );
}
