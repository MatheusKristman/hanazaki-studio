import Image from "next/image";

export function AboutTrades() {
  return (
    <section className="w-full bg-gray-secondary px-6 sm:px-16 py-4 flex items-center justify-around">
      <div className="relative w-12 h-5 sm:w-20 sm:h-9 lg:w-36 lg:h-14">
        <Image
          src="/images/gvc.svg"
          alt="GVC Virtualização de construções"
          fill
          className="object-contain object-center"
        />
      </div>

      <div className="relative w-14 h-4 sm:w-28 sm:h-6 lg:w-44 lg:h-10">
        <Image
          src="/images/cyrela.svg"
          alt="Cyrela"
          fill
          className="object-contain object-center"
        />
      </div>

      <div className="relative w-14 h-3 sm:w-32 sm:h-5 lg:w-36 lg:h-9">
        <Image
          src="/images/scandurra.svg"
          alt="Scandurra"
          fill
          className="object-contain object-center"
        />
      </div>
    </section>
  );
}
