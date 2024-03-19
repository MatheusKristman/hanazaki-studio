"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  ContainerAnimation,
  IllustrationAnimation,
  TextAnimation,
} from "@/constants/framer/projects-animations";
import { project } from "@/constants/project-example";
import ProjectImage from "@/public/images/projects.png";

export function Projects() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section className="w-full mt-12 px-6 overflow-x-hidden sm:px-16 lg:px-0">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={ContainerAnimation}
        className="w-full flex flex-col space-y-4 lg:flex-row lg:items-center"
      >
        <motion.div
          variants={IllustrationAnimation}
          className="relative overflow-hidden w-full h-[250px] sm:h-[400px] lg:w-1/2 lg:h-[550px]"
        >
          <motion.div
            style={{ y }}
            className="relative w-full h-[calc(100%+200px)]"
          >
            <Image
              src={ProjectImage}
              alt="Projetos"
              fill
              priority
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
              className="object-cover object-right-top"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={ContainerAnimation}
          className="w-full flex flex-col lg:max-w-md lg:mx-auto"
        >
          <motion.h4
            variants={TextAnimation}
            className="poppins-font text-2xl text-gold-primary mb-2 sm:text-3xl lg:text-4xl"
          >
            Projeto R.P
          </motion.h4>

          <motion.p
            variants={TextAnimation}
            className="manrope-font text-base text-light-primary mb-4 sm:text-lg lg:mb-12"
          >
            Um projeto completo que fornece informações do entorno, comodidades
            e galeria. Além de uma aba de busca de unidades atualizada em tempo
            real. Com passeios virtuais integrados para explorar áreas comuns e
            apartamentos, com opções de interação, como mudanças de
            revestimentos, mobiliário e cores, além de um modo de visualização
            aérea para uma perspectiva geral.
          </motion.p>

          <motion.div variants={TextAnimation}>
            <Link
              href={`/projetos/detalhes/${project.id}`}
              className="poppins-font text-lg font-medium text-light-primary/60 flex items-center gap-x-2 sm:text-xl"
            >
              Saiba mais sobre o projeto <ArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
