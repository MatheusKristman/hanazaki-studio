"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Link as LinkScroll } from "react-scroll";

import { MobileMenu } from "./mobile-menu";
import { cn } from "@/lib/utils";
import {
  LogoAnimation,
  MenuAnimation,
} from "@/constants/framer/header-animations";
import { useEffect, useState } from "react";

export function Header() {
  const pathname = usePathname();

  const [initialAnimation, setInitialAnimation] = useState<boolean>(true);

  useEffect(() => {
    setInitialAnimation(true);
  }, []);

  function handleContact() {
    location.hash = "#contact";
  }

  return (
    <AnimatePresence initial={initialAnimation}>
      <header className="w-full px-6 py-6 flex items-center justify-between absolute top-0 left-1/2 -translate-x-1/2 z-40 sm:px-16 sm:py-9 lg:container lg:mx-auto">
        <motion.div
          className="w-14 h-11 sm:w-24 sm:h-20"
          initial="initial"
          animate="animate"
          variants={LogoAnimation}
        >
          <Link href="/" className="relative block w-full h-full">
            <Image
              src="/images/logo.svg"
              alt="Hanazaki Studio"
              fill
              className="object-contain object-center"
            />
          </Link>
        </motion.div>

        <MobileMenu />

        <motion.nav
          initial="initial"
          animate="animate"
          variants={MenuAnimation}
          className="hidden lg:flex items-center justify-end gap-x-12"
        >
          <Link
            href="/"
            className={cn(
              "relative poppins-font text-xl font-medium text-light-primary transition-all after:transition-all hover:after:w-full after:content-[''] after:bg-light-primary after:w-0 after:h-[1px] after:absolute after:bottom-0 after:right-0",
              {
                "text-gold-primary relative after:content-[''] after:bg-gold-primary after:w-full after:h-[1px] after:absolute after:bottom-0 after:right-0 hover:opacity-100 pointer-event-none":
                  pathname === "/",
              },
            )}
          >
            Inicio
          </Link>

          <Link
            href="/sobre"
            className={cn(
              "relative poppins-font text-xl font-medium text-light-primary transition-all after:transition-all hover:after:w-full after:content-[''] after:bg-light-primary after:w-0 after:h-[1px] after:absolute after:bottom-0 after:right-0",
              {
                "text-gold-primary relative after:content-[''] after:bg-gold-primary after:w-full after:h-[1px] after:absolute after:bottom-0 after:right-0 hover:opacity-100 pointer-event-none":
                  pathname === "/sobre",
              },
            )}
          >
            Sobre
          </Link>

          {/* <Link
            href="/projetos"
            className={cn(
              "relative poppins-font text-xl font-medium text-light-primary transition-all after:transition-all hover:after:w-full after:content-[''] after:bg-light-primary after:w-0 after:h-[1px] after:absolute after:bottom-0 after:right-0",
              {
                "text-gold-primary relative after:content-[''] after:bg-gold-primary after:w-full after:h-[1px] after:absolute after:bottom-0 after:right-0 hover:opacity-100 pointer-event-none":
                  pathname === "/projetos",
              }
            )}
          >
            Projetos
          </Link> */}
        </motion.nav>

        <LinkScroll
          to="contact"
          smooth
          offset={50}
          onClick={handleContact}
          className={cn(
            "cursor-pointer bg-transparent hover:bg-transparent poppins-font text-lg font-medium text-light-primary px-6 py-1 border-2 border-light-primary rounded-md transition-solors hover:border-gold-primary hover:text-gold-primary hidden lg:flex",
          )}
        >
          Contato
        </LinkScroll>
      </header>
    </AnimatePresence>
  );
}
