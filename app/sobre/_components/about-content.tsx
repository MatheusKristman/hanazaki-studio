import Image from "next/image";

import { AboutCarousel } from "./about-carousel";

export function AboutContent() {
  return (
    <section className="w-full px-6 mt-12 sm:px-16 lg:container lg:mx-auto">
      <div className="w-full flex flex-col items-center gap-y-4 mb-12">
        <h2 className="poppins-font text-2xl text-gold-primary font-semibold text-center sm:text-3xl lg:text-4xl lg:max-w-2xl">
          Acreditamos na evolução e no conhecimento
        </h2>

        <p className="manrope-font text-base text-light-primary text-center sm:text-lg lg:max-w-2xl">
          Aderir as novas tendencias do mercado não só nos proporciona um
          diferencial dos outros, mas também uma garantia de estarmos à frente e
          nunca sermos deixados para trás. Além disso, mudanças são comuns,
          porém nenhum conhecimento anterior é totalmente perdido.
        </p>
      </div>

      <AboutCarousel />

      <div className="w-full flex flex-col items-center">
        <h2 className="poppins-font text-gold-primary text-2xl font-semibold text-center mb-4 sm:text-3xl">
          Parcerias internacionais
        </h2>

        <p className="manrope-font text-base text-light-primary text-center sm:text-lg lg:max-w-2xl">
          Formado em Engenharia Ambiental e Sanitária pela UNOESTE e estudante
          de Engenharia Civil pela UNIARA, descobri minha paixão na área de
          projetos com foco em 3D, me especializando em metodologia BIM e em
          fotorrealismo. Sempre buscando novidades e tecnologias no mercado,
          atualmente estou aprendendo Unreal Engine 5, focando em apresentação
          de plantas interativas e realidade virtual.
        </p>

        <div className="relative w-full aspect-square -mt-24 max-w-sm sm:-mt-32">
          <Image
            src="/images/about-international.svg"
            alt="Parcerias internacionais"
            fill
            className="object-contain object-center"
          />
        </div>
      </div>
    </section>
  );
}
