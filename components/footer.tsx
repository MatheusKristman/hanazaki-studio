import Image from "next/image";
import Link from "next/link";

import { FooterForm } from "./footer-form";
import { SocialMediaLink } from "./social-media-link";

export function Footer() {
  return (
    <footer className="w-full mt-12 sm:mt-24">
      <div className="w-full px-6 flex flex-col items-center sm:flex-row sm:gap-x-5 sm:px-16 sm:justify-between lg:container lg:mx-auto">
        <Link
          href="/"
          className="relative w-24 h-24 mb-4 sm:mt-0 sm:w-36 sm:h-32 lg:w-56 lg:h-56"
        >
          <Image
            src="/images/logo-white.svg"
            alt="Hanazaki Studio"
            fill
            className="object-contain object-center"
          />
        </Link>

        <div className="hidden sm:block sm:bg-gold-primary sm:w-[1px] sm:min-w-[1px] sm:h-56" />

        <FooterForm />

        <div className="w-full h-[1px] bg-gold-primary sm:w-[1px] sm:min-w-[1px] sm:h-56" />

        <div className="flex items-center justify-center gap-12 pt-4 px-6 sm:flex-col sm:items-start sm:p-0">
          <SocialMediaLink
            href="https://wa.me/5516997054012?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+o+seu+servi%C3%A7o."
            alt="Whatsapp"
            imageSrc="/images/whatsapp.svg"
            text="(16) 99705 - 4012"
          />

          <SocialMediaLink
            href="https://www.instagram.com/hanazaki_studio/"
            alt="Instagram"
            imageSrc="/images/instagram.svg"
            text="@hanazaki_studio"
          />

          <SocialMediaLink
            href="https://www.linkedin.com/in/leonardo-hanazaki-50468a240/"
            alt="Linkedin"
            imageSrc="/images/linkedin.svg"
            text="Leonardo Hanazaki"
          />
        </div>
      </div>

      <div className="w-full mt-8 py-4 border-t border-light-primary px-6 flex flex-col gap-4 items-center justify-between sm:flex-row sm:px-16">
        <span className="poppins-font text-sm text-light-primary font-medium sm:text-lg">
          Hanazaki Studio ©2024
        </span>

        <span className="poppins-font text-sm text-light-primary font-medium sm:text-lg">
          Desenvolvido por{" "}
          <a
            href="https://mkdevsolutions.com/"
            target="_blank"
            rel="noreferrer noopenner"
          >
            MKDev
          </a>
        </span>
      </div>
    </footer>
  );
}
