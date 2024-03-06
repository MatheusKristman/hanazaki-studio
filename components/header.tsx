"use client";

import Image from "next/image";
import Link from "next/link";

import { MobileMenu } from "./mobile-menu";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full px-6 py-6 flex items-center justify-between sm:px-16 sm:py-9 lg:container lg:mx-auto">
      <Link href="/" className="relative w-14 h-11 sm:w-24 sm:h-20">
        <Image
          src="/images/logo.svg"
          alt="Hanazaki Studio"
          fill
          className="object-contain object-center"
        />
      </Link>

      <MobileMenu />

      <nav className="hidden lg:flex items-center justify-end gap-x-12">
        <Link
          href="/"
          className={cn(
            "poppins-font text-xl font-medium text-light-primary transition-opacity hover:opacity-80",
            {
              "text-gold-primary relative after:content-[''] after:bg-gold-primary after:w-4/5 after:h-[2px] after:absolute after:bottom-0 after:right-0 hover:opacity-100 pointer-event-none":
                pathname === "/",
            }
          )}
        >
          Inicio
        </Link>

        <Link
          href="/sobre"
          className={cn(
            "poppins-font text-xl font-medium text-light-primary transition-opacity hover:opacity-80",
            {
              "text-gold-primary relative after:content-[''] after:bg-gold-primary after:w-4/5 after:h-[2px] after:absolute after:bottom-0 after:right-0 hover:opacity-100 pointer-event-none":
                pathname === "/sobre",
            }
          )}
        >
          Sobre
        </Link>

        <Link
          href="/projetos"
          className={cn(
            "poppins-font text-xl font-medium text-light-primary transition-opacity hover:opacity-80",
            {
              "text-gold-primary relative after:content-[''] after:bg-gold-primary after:w-4/5 after:h-[2px] after:absolute after:bottom-0 after:right-0 hover:opacity-100 pointer-event-none":
                pathname === "/projetos",
            }
          )}
        >
          Projetos
        </Link>

        <Link
          href="/contato"
          className={cn(
            "poppins-font text-lg font-medium text-light-primary px-6 py-1 border-2 border-light-primary rounded-md transition-opacity hover:opacity-80"
          )}
        >
          Contato
        </Link>
      </nav>
    </header>
  );
}
