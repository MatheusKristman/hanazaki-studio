import { Hero } from "@/app/(website)/_components/hero";
import { VideoAbout } from "@/app/(website)/_components/video-about";
import { About } from "@/app/(website)/_components/about";
import { Services } from "@/app/(website)/_components/services";
import { Projects } from "@/app/(website)/_components/projects";

/* <iframe
  id="vagonFrame"
  allow="microphone  *; clipboard-read *; clipboard-write *; encrypted-media *;"
  src="https://streams.vagon.io/streams/ef76eab7-3f5c-40a3-ade1-45927848364c "
/> */

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
