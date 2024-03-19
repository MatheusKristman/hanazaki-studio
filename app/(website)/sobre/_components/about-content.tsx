"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { AboutCarousel } from "./about-carousel";
import {
  TextAnimation,
  TitleAnimation,
  BelowTitleAnimation,
  BelowTextAnimation,
  BelowContainerAnimation,
} from "@/constants/framer/about-content-animations";
import { AboutBio } from "./about-bio";

export function AboutContent() {
  return (
    <section className="w-full px-6 mt-12 sm:px-16 lg:container lg:mx-auto">
      <motion.div className="w-full flex flex-col items-center space-y-4 mb-12">
        <motion.h2
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={TitleAnimation}
          className="poppins-font text-2xl text-gold-primary font-semibold text-center sm:text-3xl lg:text-4xl lg:max-w-2xl"
        >
          Acreditamos na evolução e no conhecimento
        </motion.h2>

        <motion.p
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={TextAnimation}
          className="manrope-font text-base text-light-primary text-center sm:text-lg lg:max-w-2xl"
        >
          Nosso principal objetivo é impulsionar as vendas de imóveis na planta,
          utilizando as mais modernas tecnologias disponíveis no mercado atual.
          Dessa forma, buscamos proporcionar um diferencial competitivo para
          nossos clientes no mercado imobiliário de alto padrão, onde nossa
          empresa se destaca por sua especialização.
        </motion.p>
      </motion.div>

      <AboutBio />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={BelowContainerAnimation}
        className="w-full flex flex-col items-center mt-12 mb-4"
      >
        <motion.h2
          variants={BelowTitleAnimation}
          className="poppins-font text-gold-primary text-2xl font-semibold text-center mb-4 sm:text-3xl"
        >
          Parcerias internacionais
        </motion.h2>

        <motion.p
          variants={BelowTextAnimation}
          className="manrope-font text-base text-light-primary text-center mb-4 sm:text-lg lg:max-w-2xl"
        >
          Atualmente, a Hanazaki Studio atende às principais capitais do Brasil
          e estabeleceu parcerias internacionais com outros estúdios, buscando
          transformar tanto o mercado brasileiro quanto o internacional. Essa
          iniciativa nos coloca constantemente na vanguarda não apenas do
          mercado brasileiro, mas também do cenário internacional.
        </motion.p>

        <div className="relative -mt-24 max-w-sm sm:-mt-32">
          <Image
            src="/images/about-international.svg"
            alt="Parcerias internacionais"
            width={384}
            height={384}
            priority
            className="object-contain object-center"
          />
        </div>
      </motion.div>
    </section>
  );
}
