"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
  MenuAnimation,
  MobileLinksAnimation,
  OverlayAnimaiton,
} from "@/constants/framer/header-animations";

export function MobileMenu() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleOpenMenu() {
    setIsMenuOpen(true);
  }

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <motion.div initial="initial" animate="animate" variants={MenuAnimation}>
        <Button
          size="icon"
          variant="link"
          onClick={handleOpenMenu}
          className="flex lg:hidden"
        >
          <Menu color="#B9A568" size="35px" />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={OverlayAnimaiton}
            className="w-screen h-screen px-6 py-6 bg-gray-secondary fixed top-0 left-0 right-0 bottom-0 z-50 sm:px-16 sm:py-14 lg:hidden"
          >
            <div className="w-full h-full flex flex-col">
              <div className="w-full flex justify-end items-center">
                <Button size="icon" variant="link" onClick={handleCloseMenu}>
                  <X color="#B9A568" size="35px" />
                </Button>
              </div>

              <div className="flex flex-1 w-full flex-col items-center justify-center gap-y-9 sm:gap-y-12">
                <motion.div variants={MobileLinksAnimation}>
                  <Link
                    href="/"
                    className={cn(
                      "poppins-font text-white text-2xl font-medium text-center transition-colors relative sm:text-3xl",
                      {
                        "text-gold-primary before:content-[''] before:w-3 before:h-[1px] before:bg-gold-primary before:absolute before:top-1/2 before:-left-4 after:content-[''] after:w-3 after:h-[1px] after:bg-gold-primary after:absolute after:top-1/2 after:-right-4":
                          pathname === "/",
                      },
                    )}
                  >
                    Inicio
                  </Link>
                </motion.div>

                <motion.div variants={MobileLinksAnimation}>
                  <Link
                    href="/sobre"
                    className={cn(
                      "poppins-font text-white text-2xl font-medium text-center transition-colors relative sm:text-3xl",
                      {
                        "text-gold-primary before:content-[''] before:w-3 before:h-[1px] before:bg-gold-primary before:absolute before:top-1/2 before:-left-4 after:content-[''] after:w-3 after:h-[1px] after:bg-gold-primary after:absolute after:top-1/2 after:-right-4":
                          pathname === "/sobre",
                      },
                    )}
                  >
                    Sobre
                  </Link>
                </motion.div>

                <motion.div variants={MobileLinksAnimation}>
                  <Link
                    href="/projetos"
                    className={cn(
                      "poppins-font text-white text-2xl font-medium text-center transition-colors relative sm:text-3xl",
                      {
                        "text-gold-primary before:content-[''] before:w-3 before:h-[1px] before:bg-gold-primary before:absolute before:top-1/2 before:-left-4 after:content-[''] after:w-3 after:h-[1px] after:bg-gold-primary after:absolute after:top-1/2 after:-right-4":
                          pathname === "/projetos",
                      },
                    )}
                  >
                    Projetos
                  </Link>
                </motion.div>

                {/* TODO confirmar se o botão contato vai jogar para o footer */}
                <motion.div variants={MobileLinksAnimation}>
                  <Link
                    href="/contato"
                    className={cn(
                      "poppins-font text-white text-2xl font-medium text-center transition-colors relative sm:text-3xl",
                      {
                        "text-gold-primary before:content-[''] before:w-3 before:h-[1px] before:bg-gold-primary before:absolute before:top-1/2 before:-left-4 after:content-[''] after:w-3 after:h-[1px] after:bg-gold-primary after:absolute after:top-1/2 after:-right-4":
                          pathname === "/contato",
                      },
                    )}
                  >
                    Contato
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
