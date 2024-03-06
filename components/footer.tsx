import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full mt-12 sm:mt-24">
      <div className="w-full flex flex-col items-center sm:flex-row sm:px-16 sm:justify-between lg:container lg:mx-auto">
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

        <div>form</div>

        <div className="flex items-center justify-center gap-12 pt-4 border-t border-gold-primary px-6 sm:border-t-0 sm:border-l sm:flex-col sm:items-start sm:pt-0">
          <a
            href="#whatsapp"
            target="_blank"
            rel="noreferrer noopenner"
            className="relative block w-8 h-8 sm:hidden"
          >
            <Image
              src="/images/whatsapp.svg"
              alt="Whatsapp"
              fill
              className="object-contain object-center"
            />
          </a>

          <a
            href="#whatsapp"
            target="_blank"
            rel="noreferrer noopenner"
            className="hidden sm:flex items-center gap-4"
          >
            <Image
              src="/images/whatsapp.svg"
              alt="Whatsapp"
              width={36}
              height={36}
              className="object-contain object-center"
            />

            <span className="manrope-font text-base text-light-primary">
              (11) 99999-9999
            </span>
          </a>

          <a
            href="#instagram"
            target="_blank"
            rel="noreferrer noopenner"
            className="relative block w-8 h-8 sm:hidden"
          >
            <Image
              src="/images/instagram.svg"
              alt="Instagram"
              fill
              className="object-contain object-center"
            />
          </a>

          <a
            href="#instagram"
            target="_blank"
            rel="noreferrer noopenner"
            className="hidden sm:flex items-center gap-4"
          >
            <Image
              src="/images/instagram.svg"
              alt="Instagram"
              width={36}
              height={36}
              className="object-contain object-center"
            />

            <span className="manrope-font text-base text-light-primary">
              @hanazaki_studio
            </span>
          </a>

          <a
            href="#linkedin"
            target="_blank"
            rel="noreferrer noopenner"
            className="relative block w-8 h-8 sm:hidden"
          >
            <Image
              src="/images/linkedin.svg"
              alt="Linkedin"
              fill
              className="object-contain object-center"
            />
          </a>

          <a
            href="#linkedin"
            target="_blank"
            rel="noreferrer noopenner"
            className="hidden sm:flex items-center gap-4"
          >
            <Image
              src="/images/linkedin.svg"
              alt="Linkedin"
              width={36}
              height={36}
              className="object-contain object-center"
            />

            <span className="manrope-font text-base text-light-primary">
              leonardohanazaki
            </span>
          </a>
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
