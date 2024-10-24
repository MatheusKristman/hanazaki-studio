"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { ServicesCard } from "./services-card";
import {
  ServicesTitleAnimation,
  ServicesContainerAnimation,
} from "@/constants/framer/services-animations";

const ServicesData = [
  {
    title: "Totem Interativo",
    desc: "Com nossos projetos em Totem Interativo, você pode oferecer uma experiência de interação única e atrativa para seus clientes.",
    imageUrl: "/images/tv-touch.webp",
    className: "sm:col-start-1 sm:col-end-3",
    imageClassName: "!mb-4",
    width: 512,
    height: 288,
  },
  {
    title: "Realidade Virtual",
    desc: "Permita que seus clientes explorem e interajam com o empreendimento de forma imersiva e envolvente.",
    imageUrl: "/images/vr.png",
    className: "",
    imageClassName: "!mb-4",
    width: 512,
    height: 288,
  },
  {
    title: "Nuvem",
    desc: "Nossos projetos na nuvem permitem que seus clientes acessem diretamente a partir de seus dispositivos.",
    imageUrl: "/images/nuvem.png",
    className: "",
    imageClassName: "!mb-4",
    width: 512,
    height: 288,
  },
  {
    title: "Projetos Externos",
    desc: "Com os projetos externos, é possível visualizar o entorno e as comodidades do empreendimento, proporcionando uma visão completa do ambiente ao redor.",
    imageUrl: "/images/projetos-externos.png",
    className: "",
    imageClassName: "!mb-4",
    width: 512,
    height: 288,
  },
  {
    title: "Projetos Internos",
    desc: "Os ambientes internos proporcionam aos clientes a chance de deslumbrar-se com o novo imóvel, juntamente com a opção de personalização.",
    imageUrl: "/images/projetos-internos.png",
    className: "",
    imageClassName: "!mb-4",
    width: 300,
    height: 288,
  },
];

export function Services() {
  const [services, setServices] = useState<typeof ServicesData>(ServicesData);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      const serv = [...services];

      serv[0].imageUrl = "/images/totem.png";
      serv[0].width = 300;

      setServices(serv);
    } else {
      const serv = [...services];

      serv[0].imageUrl = "/images/totem.webp";

      setServices(serv);
    }
  }, []);

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={ServicesContainerAnimation}
      className="w-full px-6 mt-12 flex flex-col items-center space-y-6 sm:px-16 lg:mt-24 lg:container lg:mx-auto"
    >
      <motion.h2
        variants={ServicesTitleAnimation}
        className="poppins-font text-gold-primary font-medium text-3xl text-center sm:text-4xl"
      >
        Nossas Soluções
      </motion.h2>

      <div className="w-full grid grid-cols-1 grid-rows-[repeat(5,auto)] gap-4 sm:grid-cols-2 sm:grid-rows-[repeat(3,auto)] lg:grid-rows-[repeat(2,auto)] lg:grid-cols-3">
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            title={service.title}
            desc={service.desc}
            imageUrl={service.imageUrl}
            className={service.className}
            imageClassName={service.imageClassName}
            width={service.width}
            height={service.height}
          />
        ))}
      </div>
    </motion.section>
  );
}
