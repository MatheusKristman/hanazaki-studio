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
    title: "Explorando Novos Mundos: O Potencial da Realidade Virtual",
    text: [
      "A Realidade Virtual tem revolucionado a abordagem de apresentação e compreensão dos projetos arquitetônicos.",
      "Uma das suas maiores vantagens é a capacidade de oferecer uma experiência imersiva única, proporcionando uma percepção autêntica de escala e perspectiva. Esta tecnologia permite uma compreensão mais profunda das proporções, layout e atmosfera geral do projeto, capacitando os envolvidos a tomarem decisões informadas e precisas, redefinindo assim os padrões de excelência na arquitetura contemporânea.",
    ],
  },
  {
    title: "Passeio Virtual: Uma Jornada Imersiva",
    text: [
      "Com o passeio virtual, os clientes têm a oportunidade de explorar integralmente o empreendimento, imergindo-se em uma experiência interativa única. Eles podem percorrer todos os espaços e interagir com eles, desde controlar as luzes até personalizar a decoração dos ambientes, modificando cores, mobiliário e texturas conforme suas preferências.",
      "Além disso, oferecemos uma funcionalidade excepcional: a capacidade de visualizar o impacto da luz solar em tempo real no empreendimento, proporcionando uma compreensão completa de como o ambiente será afetado em diferentes momentos do dia.",
      "Destaque ainda para a praticidade: nosso passeio virtual é acessível diretamente pelo navegador, tanto em computadores quanto em dispositivos móveis, permitindo que os clientes explorem o empreendimento de forma conveniente e intuitiva, sem a necessidade de downloads adicionais.",
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
            { "bg-gold-primary": current === 1 }
          )}
        />

        <motion.div
          variants={CardsAnimation}
          className={cn(
            "w-2 h-2 rounded-full bg-gray-secondary transition-colors",
            { "bg-gold-primary": current === 2 }
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
