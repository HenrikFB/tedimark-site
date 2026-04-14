"use client";
import { useEffect, useRef } from "react";
import { gsap, SplitText, ScrollTrigger } from "@/lib/gsap";

export default function CharReveal({
  children,
  animateOnScroll = false,
  scrub = false,
  delay = 0,
  stagger = 0.05,
  duration = 0.65,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const wrapper = containerRef.current;
    if (!wrapper) return;

    const el = wrapper.firstElementChild;
    if (!el) return;

    const split = SplitText.create(el, {
      type: "lines,words,chars",
      linesClass: "cr-line",
      wordsClass: "cr-word",
      charsClass: "cr-char",
      autoSplit: true,
    });

    const { chars, lines } = split;

    gsap.set(chars, { x: 100, opacity: 0, skewX: 20 });

    const charMeta = lines.flatMap((line) => {
      const lineChars = chars.filter((c) => line.contains(c));
      return lineChars.map((char, charIndexInLine) => ({
        char,
        charIndexInLine,
      }));
    });

    const animate = (tl) => {
      charMeta.forEach(({ char, charIndexInLine }) => {
        tl.to(
          char,
          {
            x: 0,
            opacity: 1,
            skewX: 0,
            ease: "power3.out",
            duration,
          },
          charIndexInLine * stagger
        );
      });
      return tl;
    };

    let tl;
    let st;

    if (animateOnScroll) {
      tl = gsap.timeline({ paused: true, delay });
      animate(tl);

      st = ScrollTrigger.create({
        trigger: el,
        start: "top 100%",
        onEnter: () => tl.restart(),
        onLeaveBack: () => {
          tl.pause(0);
          gsap.set(chars, { x: 100, opacity: 0, skewX: 20 });
        },
      });
    } else if (scrub) {
      tl = gsap.timeline({ paused: true });
      animate(tl);

      st = ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        end: "top 45%",
        scrub: true,
        animation: tl,
      });
    } else {
      tl = gsap.timeline({ delay });
      animate(tl);
    }

    return () => {
      tl?.kill();
      st?.kill();
      split?.revert();
    };
  }, [animateOnScroll, scrub, delay, stagger, duration]);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}
