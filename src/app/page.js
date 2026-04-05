import Hero from "@/components/Hero/Hero";
import Marquee from "@/components/Marquee/Marquee";
import ServicesHover from "@/components/ServicesHover/ServicesHover";
import SvgScrollSwap from "@/components/SvgScrollSwap/SvgScrollSwap";
import StickyCards from "@/components/StickyCards/StickyCards";
import Stats from "@/components/Stats/Stats";
import CursorLight from "@/components/CursorLight/CursorLight";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <ServicesHover />
      <SvgScrollSwap />
      <StickyCards />
      <Stats />
      <CursorLight />
      <Footer />
    </main>
  );
}
