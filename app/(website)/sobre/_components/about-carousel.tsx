"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { AboutCard } from "./about-card";
import { cn } from "@/lib/utils";
import {
  CardsAnimation,
  CardsContainerAnimation,
} from "@/constants/framer/about-content-animations";

const aboutData = [
  {
    title: "Realidade Virtual",
    text: [
      "A Realidade Virtual revolucionou a forma como os projetos arquitetônicos são apresentados e compreendidos.",
      "Uma das maiores vantagens da visualização arquitetônica por meio da Realidade Virtual é a capacidade de proporcionar uma sensação de escala e perspectiva autênticas, proporcionando uma percepção mais precisa das proporções, do layout e da atmosfera geral do projeto, ajudando a tomar decisões informadas.",
    ],
  },
  {
    title: "Passeio Virtual",
    text: [
      "Com o passeio virtual, os clientes podem andar por todo o empreendimento e interagir com ele, acendendo e apagando as luzes, trocando a decoração dos ambientes, a cor dos mobiliários, suas texturas e muito mais.",
      "Além disso, é possível ver como o sol irá afetar o empreendimento de forma real.",
      "O passeio virtual tem a possibilidade de rodar no navegador dentro do seu próprio website, tanto em computadores quanto em dispositivos móveis.",
    ],
  },
];

export function AboutCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={CardsContainerAnimation}
      className="w-full mb-12 "
    >
      <Carousel setApi={setApi} className="sm:hidden">
        <CarouselContent>
          {aboutData.map((data, index) => (
            <CarouselItem key={index}>
              <AboutCard title={data.title} text={data.text} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="w-full flex items-center justify-center gap-x-1 mt-4 sm:hidden">
        <motion.div
          variants={CardsAnimation}
          className={cn(
            "w-2 h-2 rounded-full bg-gray-secondary transition-colors",
            { "bg-gold-primary": current === 1 },
          )}
        />

        <motion.div
          variants={CardsAnimation}
          className={cn(
            "w-2 h-2 rounded-full bg-gray-secondary transition-colors",
            { "bg-gold-primary": current === 2 },
          )}
        />
      </div>

      <div className="hidden sm:grid sm:grid-cols-2 sm:grid-rows-1 gap-x-6">
        <AboutCard title={aboutData[0].title} text={aboutData[0].text} />
        <AboutCard title={aboutData[1].title} text={aboutData[1].text} />
      </div>
    </motion.div>
  );
}
