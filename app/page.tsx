import { Header } from "@/components/header";
import { Hero } from "@/app/_components/hero";
import { VideoAbout } from "./_components/video-about";
import { About } from "./_components/about";
import { Services } from "./_components/services";
import { Projects } from "./_components/projects";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <VideoAbout />
      <About />
      <Services />
      <Projects />
      <Footer />
    </>
  );
}
