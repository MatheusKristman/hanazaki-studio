"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

import {
  LineAnimation,
  TextAnimation,
  PlayAnimation,
  ContainerAnimation,
} from "@/constants/framer/video-about-animations";
import { VideoModal } from "./video-modal";

export function VideoAbout() {
  return (
    <>
      <VideoModal />

      <section className="relative w-full aspect-video rounded-[30px] overflow-hidden flex items-center justify-center lg:rounded-[60px] after:content-[''] after:w-full after:h-full after:bg-gray-primary/60 after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:z-10">
        {/* TODO: inserir a imagem por enquanto depois pegar e colocar o video */}
        <Image
          src="/images/below-hero-example.jpg"
          alt="Exemplo"
          fill
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover object-center"
        />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: "some" }}
          variants={ContainerAnimation}
          className="relative z-20 flex flex-col gap-y-6 items-center justify-center group cursor-pointer overflow-hidden"
        >
          <motion.div
            variants={LineAnimation}
            className="w-full h-[2px] bg-gold-primary self-start"
          />

          <motion.h2
            variants={TextAnimation}
            className="text-4xl text-center uppercase text-light-primary font-medium sm:text-5xl lg:text-6xl"
          >
            Dê vida às{" "}
            <strong className="font-medium text-gold-primary">ideias</strong>
          </motion.h2>

          <motion.div variants={PlayAnimation}>
            <PlayCircle
              size="67px"
              strokeWidth={1.5}
              className="text-light-primary group-hover:text-gold-primary transition-colors"
            />
          </motion.div>

          <motion.div
            variants={LineAnimation}
            className="w-full h-[2px] bg-gold-primary self-end"
          />
        </motion.div>
      </section>
    </>
  );
}
