import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Projects() {
  return (
    <section className="w-full mt-12 px-6 sm:px-16 lg:px-0">
      <div className="w-full flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="w-full relative h-[250px] sm:h-[400px] lg:w-1/2 lg:h-[550px]">
          <Image
            src="/images/projects.png"
            alt="Projetos"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="w-full flex flex-col lg:max-w-md lg:mx-auto">
          <h4 className="poppins-font text-2xl text-gold-primary mb-2 sm:text-3xl lg:text-4xl">
            Nome do projeto
          </h4>

          <p className="manrope-font text-base text-light-primary mb-4 sm:text-lg lg:mb-12">
            Lorem ipsum dolor sit amet consectetur. Dui aliquam id maecenas
            massa egestas laoreet malesuada accumsan tincidunt. Arcu in id ac
            nisl. Leo elementum felis elementum volutpat porttitor interdum.
            Fermentum nisi non aliquam consequat lacus.
          </p>

          <Link
            href="/projetos"
            className="poppins-font text-lg font-medium text-light-primary/60 flex items-center gap-x-2 sm:text-xl"
          >
            Mais projetos <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
