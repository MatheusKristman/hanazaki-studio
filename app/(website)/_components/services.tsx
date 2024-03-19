"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { ServicesCard } from "./services-card";
import {
  ServicesTitleAnimation,
  ServicesContainerAnimation,
} from "@/constants/framer/services-animations";
import { ServicesData } from "@/constants/services-data";

export function Services() {
  const [services, setServices] = useState<typeof ServicesData>(ServicesData);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      const serv = [...services];

      serv[0].imageUrl = "/images/tv-touch.png";

      setServices(serv);
    } else {
      const serv = [...services];

      serv[0].imageUrl = "/images/tv-touch.webp";

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
