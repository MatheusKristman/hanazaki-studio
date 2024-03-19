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

export function AboutContent() {
  return (
    <section className="w-full px-6 mt-12 sm:px-16 lg:container lg:mx-auto">
      {/* <motion.div className="w-full flex flex-col items-center gap-y-4 mb-12">
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
          Aderir as novas tendencias do mercado não só nos proporciona um
          diferencial dos outros, mas também uma garantia de estarmos à frente e
          nunca sermos deixados para trás. Além disso, mudanças são comuns,
          porém nenhum conhecimento anterior é totalmente perdido.
        </motion.p>
      </motion.div> */}

      <AboutCarousel />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={BelowContainerAnimation}
        className="w-full flex flex-col items-center"
      >
        <motion.h2
          variants={BelowTitleAnimation}
          className="poppins-font text-gold-primary text-2xl font-semibold text-center mb-4 sm:text-3xl"
        >
          Expandindo Fronteiras através de Parcerias Internacionais
        </motion.h2>

        <motion.p
          variants={BelowTextAnimation}
          className="manrope-font text-base text-light-primary text-center mb-4 sm:text-lg lg:max-w-2xl"
        >
          Formado em Engenharia Ambiental e Sanitária pela UNOESTE e atualmente
          estudante de Engenharia Civil na UNIARA, descobri minha verdadeira
          paixão na área de projetos com ênfase em renderização 3D. Desde então,
          tenho me especializado em metodologia BIM e fotorrealismo, buscando
          constantemente estar atualizado com as últimas novidades e tecnologias
          do mercado.
        </motion.p>

        <motion.p
          variants={BelowTextAnimation}
          className="manrope-font text-base text-light-primary text-center sm:text-lg lg:max-w-2xl"
        >
          No momento, estou dedicando meu tempo ao aprendizado da Unreal Engine
          5, focando especialmente na criação de plantas interativas e
          experiências de realidade virtual para proporcionar aos clientes uma
          visualização mais imersiva e envolvente dos projetos. Minha jornada
          profissional é impulsionada pela busca contínua de excelência e
          inovação na área de visualização arquitetônica.
        </motion.p>

        <div className="relative w-full aspect-square -mt-24 max-w-sm sm:-mt-32">
          <Image
            src="/images/about-international.svg"
            alt="Parcerias internacionais"
            fill
            priority
            className="object-contain object-center"
          />
        </div>
      </motion.div>
    </section>
  );
}
