"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import LeonardoHanazaki from "@/public/images/leonardo-hanazaki.jpg";

import {
  CardAnimation,
  TitleAnimation,
  TextAnimation,
  ImageAnimation,
} from "@/constants/framer/about-bio-animations";

export function AboutBio() {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={CardAnimation}
      className="w-full mt-12 px-6 sm:px-16 lg:container lg:mx-auto lg:mt-24"
    >
      <div className="w-full bg-gray-secondary px-6 py-9 rounded-md flex flex-col items-center md:grid md:grid-cols-[repeat(2,auto)] md:grid-rows-1 md:p-0 md:overflow-hidden lg:max-w-4xl lg:mx-auto">
        <div className="w-full flex flex-col items-center sm:px-6 sm:items-start sm:py-9">
          <motion.h3
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={TitleAnimation}
            className="poppins-font text-2xl text-gold-primary font-semibold text-center mb-4 sm:text-left sm:text-3xl lg:text-4xl"
          >
            Quem é Leonardo Hanazaki
          </motion.h3>

          <motion.p
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={TextAnimation}
            className="manrope-font text-base text-light-primary text-center mb-6 md:mb-4 md:text-left"
          >
            Fundador da Hanazaki Studio, eu trabalhava com visualização
            arquitetônica com foco em renderização 3D e fotorrealismo, criando
            imagens e vídeos. Posteriormente, descobri um novo modelo de
            apresentação dentro desse mercado, que vai muito além da mera
            visualização, envolvendo também a interatividade. Dessa forma,
            reestruturamos o estúdio e todo o fluxo de trabalho para atender a
            essa nova demanda do mercado. Agora, oferecemos passeios interativos
            e aplicações que podem ser executadas na Web, desktops, TVs com tela
            sensível ao toque e até mesmo em Realidade Virtual.
          </motion.p>
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={ImageAnimation}
          className="about-bio-animation relative w-2/3 aspect-square flex items-center gap-x-2 md:w-60 md:aspect-auto md:h-full lg:h-96"
        >
          <div className="h-3/4 bg-light-primary grow md:hidden" />

          <div className="relative grow-[2] h-full">
            <Image
              src={LeonardoHanazaki}
              alt="Leonardo Hanazaki"
              fill
              sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 33vw"
              className="object-cover object-top scale-x-[-1]"
            />
          </div>

          <div className="h-3/4 bg-gold-primary grow md:hidden" />
        </motion.div>
      </div>
    </motion.div>
  );
}
