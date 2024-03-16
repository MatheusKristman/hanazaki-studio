import { Hero } from "@/app/(website)/_components/hero";
import { VideoAbout } from "@/app/(website)/_components/video-about";
import { About } from "@/app/(website)/_components/about";
import { Services } from "@/app/(website)/_components/services";
import { Projects } from "@/app/(website)/_components/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoAbout />
      <About />
      <Services />
      <Projects />
    </>
  );
}
