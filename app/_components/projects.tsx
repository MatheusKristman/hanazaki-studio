"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  ContainerAnimation,
  IllustrationAnimation,
  TextAnimation,
} from "@/constants/framer/projects-animation";

export function Projects() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);

  return (
    <section className="w-full mt-12 px-6 sm:px-16 lg:px-0">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={ContainerAnimation}
        className="w-full flex flex-col gap-4 lg:flex-row lg:items-center"
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
              src="/images/projects.png"
              alt="Projetos"
              fill
              className="object-cover object-center"
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
            Nome do projeto
          </motion.h4>

          <motion.p
            variants={TextAnimation}
            className="manrope-font text-base text-light-primary mb-4 sm:text-lg lg:mb-12"
          >
            Lorem ipsum dolor sit amet consectetur. Dui aliquam id maecenas
            massa egestas laoreet malesuada accumsan tincidunt. Arcu in id ac
            nisl. Leo elementum felis elementum volutpat porttitor interdum.
            Fermentum nisi non aliquam consequat lacus.
          </motion.p>

          <motion.div variants={TextAnimation}>
            <Link
              href="/projetos"
              className="poppins-font text-lg font-medium text-light-primary/60 flex items-center gap-x-2 sm:text-xl"
            >
              Mais projetos <ArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
