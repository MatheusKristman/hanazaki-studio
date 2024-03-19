import { project } from "@/constants/project-example";

export function ProjectContent() {
  return (
    <section className="mt-[92px] w-full px-6 flex flex-col items-center sm:px-16 sm:items-start sm:mt-[152px] lg:container lg:mx-auto">
      <h3 className="poppins-font text-2xl text-gold-primary font-medium mt-12 mb-4 text-center sm:text-left sm:text-3xl sm:mb-6 lg:text-4xl">
        {project.title}
      </h3>

      <div className="w-full flex flex-col items-center space-y-4 mb-12 sm:items-start">
        <h4 className="poppins-font font-medium text-lg text-gold-primary text-center sm:text-left sm:text-xl lg:text-2xl">
          Descrição
        </h4>

        <p className="manrope-font text-base text-light-primary text-center !leading-relaxed sm:text-left sm:text-lg">
          {project.desc}
        </p>
      </div>

      <div className="relative w-full pt-[56.66%] min-[1410px]:pt-[715.5px]">
        <iframe
          id="vagonFrame"
          allow="microphone  *; clipboard-read *; clipboard-write *; encrypted-media *;"
          src={project.frameUrl}
          sandbox="allow-pointer-lock allow-same-origin allow-scripts"
          className="w-full h-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
        />
      </div>
    </section>
  );
}
