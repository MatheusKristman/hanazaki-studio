import { ServicesCard } from "./services-card";

export function Services() {
  return (
    <section className="w-full px-6 mt-12 flex flex-col items-center gap-y-6 sm:px-16 lg:mt-24 lg:container lg:mx-auto">
      <h2 className="poppins-font text-gold-primary font-medium text-3xl text-center sm:text-4xl">
        Nossas Soluções
      </h2>

      <div className="w-full grid grid-cols-1 grid-rows-[repeat(5,auto)] gap-4 sm:grid-cols-2 sm:grid-rows-[repeat(3,auto)] lg:grid-rows-[repeat(2,auto)] lg:grid-cols-3">
        <ServicesCard
          title="Tv touch"
          desc="Maquetes interativas com possibilidade de rodar em tv com tela touch para stands de vendas."
          imageUrl="/images/tv-touch.png"
          className="sm:col-start-1 sm:col-end-3"
        />

        {/* TODO: arrumar imagem, está cortada */}
        <ServicesCard
          title="Realidade Virtual"
          desc="Nosso software é baseado em realidade virtual para criar uma imersão totalmente diferente."
          imageUrl="/images/vr.png"
          className=""
        />

        <ServicesCard
          title="Nuvem"
          desc="Software executado na nuvem, possibilitando o usuário interagir através do smartphone, tablet ou computador."
          imageUrl="/images/nuvem.png"
          className=""
        />

        <ServicesCard
          title="Projetos Externos"
          desc="Visualizar as comodidades, entorno, pontos de interesse, e muito mais."
          imageUrl="/images/projetos-externos.png"
          className=""
        />

        <ServicesCard
          title="Projetos Internos"
          desc="Passeio interativo, personalização de móveis, materiais, cores, entre outros."
          imageUrl="/images/projetos-internos.png"
          className=""
        />
      </div>
    </section>
  );
}
