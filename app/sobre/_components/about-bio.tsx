import Image from "next/image";

export function AboutBio() {
  return (
    <div className="w-full mt-12 px-6 sm:px-16 lg:container lg:mx-auto lg:mt-24">
      <div className="w-full bg-gray-secondary px-6 py-9 rounded-md flex flex-col items-center sm:grid sm:grid-cols-[repeat(2,auto)] sm:grid-rows-1 sm:p-0 sm:overflow-hidden lg:max-w-4xl lg:mx-auto">
        <div className="w-full flex flex-col items-center sm:px-6 sm:items-start sm:py-9">
          <h3 className="poppins-font text-2xl text-gold-primary font-semibold text-center mb-4 sm:text-left sm:text-3xl lg:text-4xl">
            Quem é Leonardo Hanazaki
          </h3>

          <p className="manrope-font text-base text-light-primary text-center mb-6 sm:mb-0 sm:text-left">
            Formado em Engenharia Ambiental e Sanitária pela UNOESTE e estudante
            de Engenharia Civil pela UNIARA, descobri minha paixão na área de
            projetos com foco em 3D, me especializando em metodologia BIM e em
            fotorrealismo. Sempre buscando novidades e tecnologias no mercado,
            atualmente estou aprendendo Unreal Engine 5, focando em apresentação
            de plantas interativas e realidade virtual.
          </p>
        </div>

        <div className="relative w-2/3 aspect-square flex items-center gap-x-2 sm:w-60 sm:aspect-auto sm:h-full lg:h-96">
          <div className="h-3/4 bg-light-primary grow sm:hidden" />

          <div className="relative grow-[2] h-full">
            <Image
              src="/images/leonardo-hanazaki.png"
              alt="Leonardo Hanazaki"
              fill
              className="object-cover object-top"
            />
          </div>

          <div className="h-3/4 bg-gold-primary grow sm:hidden" />
        </div>
      </div>
    </div>
  );
}
