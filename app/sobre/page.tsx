import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { AboutBanner } from "./_components/about-banner";
import { AboutContent } from "./_components/about-content";
import { AboutTrades } from "./_components/about-trades";
import { AboutBio } from "./_components/about-bio";

function AboutPage() {
  return (
    <>
      <Header />
      <AboutBanner />
      <AboutContent />
      <AboutTrades />
      <AboutBio />
      <Footer />
    </>
  );
}

export default AboutPage;
