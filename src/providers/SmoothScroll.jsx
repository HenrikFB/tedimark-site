"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "@/lib/gsap";
import { gsap } from "@/lib/gsap";

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Undgå at ScrollTrigger re-beregner (og "hopper") når mobilens
    // adresselinje animerer ind/ud og ændrer viewporthøjden.
    ScrollTrigger.config({ ignoreMobileResize: true });

    const lenis = new Lenis({
      // Let touch-smoothing der bevarer fri scroll, men jævner momentum
      // på mobil, så pinned sektioner slipper mindre rykvist.
      syncTouch: true,
      touchMultiplier: 1.2,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const update = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Sørg for korrekte start/end-mål når layout er klar.
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
