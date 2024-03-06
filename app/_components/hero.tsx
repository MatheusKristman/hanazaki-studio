import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full px-6 mt-6 flex flex-col items-center gap-y-6 sm:px-16 sm:flex-row sm:justify-between sm:mt-12 sm:relative lg:container lg:mx-auto lg:mt-24">
      <div className="w-full flex flex-col items-center justify-center gap-y-2 sm:w-4/6 sm:items-start sm:relative sm:z-10 lg:w-3/5 lg:gap-y-4">
        <h1 className="poppins-font text-4xl text-light-primary font-medium text-center sm:text-left lg:text-6xl">
          Onde a busca pelo excepcional redefine o padrão do mercado.
        </h1>

        <div className="flex items-center justify-center gap-x-2 sm:justify-start">
          <p className="manrope-font text-sm text-light-primary sm:text-base lg:text-xl">
            Tecnologia
          </p>

          <div className="h-6 w-[1px] bg-gold-primary lg:h-8" />

          <p className="manrope-font text-sm text-light-primary sm:text-base lg:text-xl">
            Interatividade
          </p>

          <div className="h-6 w-[1px] bg-gold-primary lg:h-8" />

          <p className="manrope-font text-sm text-light-primary sm:text-base lg:text-xl">
            Realidade virtual
          </p>
        </div>
      </div>

      <div className="w-full relative flex justify-center items-center py-4 sm:absolute sm:top-0 sm:right-16 sm:w-2/5 sm:aspect-square sm:justify-end lg:w-1/2 lg:-top-20">
        <div className="w-4/5 h-36 bg-gray-secondary rounded-lg sm:h-4/5" />

        <Image
          src="/images/hero.png"
          alt="Onde a busca pelo excepcional redefine o padrão do mercado."
          fill
          className=" object-center object-contain absolute top-1/2 left-1/2"
        />
      </div>
    </section>
  );
}
