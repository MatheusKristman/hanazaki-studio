"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

import { CardAnimation } from "@/constants/framer/about-animation";

export function About() {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.4 }}
      variants={CardAnimation}
      className="w-full px-6 mt-12 sm:px-16 lg:container lg:mx-auto"
    >
      <div className="w-full bg-gray-secondary flex flex-col items-center gap-4 px-6 py-9 rounded-lg sm:pl-12 sm:pr-60 sm:items-start sm:bg-about-logo sm:bg-no-repeat sm:bg-[100%_100%] lg:pr-96">
        <h2 className="poppins-font font-medium text-gold-primary text-xl text-center sm:text-3xl sm:text-left lg:text-4xl">
          Hanazaki Studio
        </h2>

        <p className="manrope-font text-base text-light-primary text-center sm:text-left sm:text-lg">
          Nossa equipe busca estar sempre atualizada com as tendências e
          novidades do mercado, para oferecer aos nossos clientes as melhores
          soluções em visualização arquitetônica. Nossos serviços são únicos e
          personalizados para cada cliente, com o objetivo de atender às suas
          principais exigências e alcançar suas metas. Venha conhecer as
          soluções que a Hanazaki Studio pode oferecer para o seu
          empreendimento, alavanque suas vendes e conquiste seus clientes.
        </p>

        <Link
          href="/sobre"
          className="poppins-font text-lg font-semibold text-light-primary/60 flex items-center gap-2 sm:text-xl"
        >
          Ver mais
          <ArrowRight className="text-light-primary/60" />
        </Link>
      </div>
    </motion.section>
  );
}
