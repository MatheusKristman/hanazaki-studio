"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { ServicesCardAnimation } from "@/constants/framer/services-animations";

interface ServicesCardProps {
  title: string;
  desc: string;
  imageUrl: string;
  className: string;
  imageClassName?: string;
}

export function ServicesCard({
  title,
  desc,
  imageUrl,
  className,
  imageClassName = "",
}: ServicesCardProps) {
  return (
    <motion.div
      variants={ServicesCardAnimation}
      className={cn(
        "bg-gray-secondary w-full rounded-lg px-6 pt-9 flex flex-col items-center justify-between gap-y-4 sm:items-start",
        className,
      )}
    >
      <h4 className="poppins-font text-xl text-gold-primary text-center font-semibold sm:text-2xl sm:text-left">
        {title}
      </h4>

      <p className="manrope-font text-base text-light-primary text-center sm:text-lg sm:text-left">
        {desc}
      </p>

      <div
        className={cn(
          "relative w-full aspect-video max-w-lg sm:mx-auto",
          imageClassName,
        )}
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-bottom object-contain"
        />
      </div>
    </motion.div>
  );
}
