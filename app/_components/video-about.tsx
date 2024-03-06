"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { VideoAnimation } from "@/constants/framer/video-about-animation";

export function VideoAbout() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.7 }}
      variants={VideoAnimation}
      className="relative w-full aspect-video mt-12 sm:mt-[290px] lg:mt-0"
    >
      {/* TODO: inserir a imagem por enquanto depois pegar e colocar o video */}
      <Image
        src="/images/below-hero-example.png"
        alt="Exemplo"
        fill
        className="object-cover object-center"
      />
    </motion.section>
  );
}
