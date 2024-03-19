"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
      viewport={{ once: true, amount: 0.3 }}
      variants={CardAnimation}
      className="w-full mt-12 px-6 sm:px-16 lg:container lg:mx-auto lg:mt-24"
    >
      <div className="w-full bg-gray-secondary px-6 py-9 rounded-md flex flex-col items-center sm:grid sm:grid-cols-[repeat(2,auto)] sm:grid-rows-1 sm:p-0 sm:overflow-hidden lg:max-w-4xl lg:mx-auto">
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
            className="manrope-font text-base text-light-primary text-center mb-6 sm:mb-4 sm:text-left"
          >
            Graduado em Engenharia Ambiental e Sanitária pela UNOESTE e
            atualmente cursando Engenharia Civil na UNIARA, encontrei minha
            verdadeira paixão na área de projetos tridimensionais. Tenho me
            dedicado ao aprimoramento em metodologia BIM e fotorrealismo,
            buscando sempre estar atualizado com as últimas inovações do
            mercado.
          </motion.p>

          <motion.p
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.1 }}
            variants={TextAnimation}
            className="manrope-font text-base text-light-primary text-center mb-6 sm:mb-0 sm:text-left"
          >
            No momento, estou imerso no aprendizado da Unreal Engine 5, com foco
            na criação de plantas interativas e experiências de realidade
            virtual. Minha jornada é marcada pela constante busca por novidades
            e tecnologias que possam agregar valor aos projetos e proporcionar
            uma experiência visual única aos clientes.
          </motion.p>
        </div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={ImageAnimation}
          className="about-bio-animation relative w-2/3 aspect-square flex items-center gap-x-2 sm:w-60 sm:aspect-auto sm:h-full lg:h-96"
        >
          <div className="h-3/4 bg-light-primary grow sm:hidden" />

          <div className="relative grow-[2] h-full">
            <Image
              src="/images/leonardo-hanazaki.png"
              alt="Leonardo Hanazaki"
              fill
              priority
              sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 33vw"
              className="object-cover object-top"
            />
          </div>

          <div className="h-3/4 bg-gold-primary grow sm:hidden" />
        </motion.div>
      </div>
    </motion.div>
  );
}
