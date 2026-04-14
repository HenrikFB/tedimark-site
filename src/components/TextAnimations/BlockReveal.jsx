"use client";
import { useEffect, useRef } from "react";
import { gsap, SplitText, ScrollTrigger } from "@/lib/gsap";

export default function BlockReveal({
  children,
  animateOnScroll = true,
  delay = 0,
  blockColor = "var(--blue)",
  stagger = 0.15,
  duration = 0.75,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const splitRefs = [];
    const lineEls = [];
    const blockEls = [];

    const elements = Array.from(containerRef.current.children);

    elements.forEach((element) => {
      const split = SplitText.create(element, {
        type: "lines",
        linesClass: "block-line++",
        lineThreshold: 0.1,
      });

      splitRefs.push(split);

      split.lines.forEach((line) => {
        const wrapper = document.createElement("div");
        wrapper.className = "block-line-wrapper";
        line.parentNode.insertBefore(wrapper, line);
        wrapper.appendChild(line);

        const block = document.createElement("div");
        block.className = "block-revealer";
        block.style.backgroundColor = blockColor;
        wrapper.appendChild(block);

        lineEls.push(line);
        blockEls.push(block);
      });
    });

    gsap.set(lineEls, { opacity: 0 });
    gsap.set(blockEls, { scaleX: 0, transformOrigin: "left center" });

    const timelines = [];
    const triggers = [];

    const createBlockRevealAnimation = (block, line, index) => {
      const tl = gsap.timeline({ delay: delay + index * stagger });
      tl.to(block, { scaleX: 1, duration, ease: "power4.inOut" });
      tl.set(line, { opacity: 1 });
      tl.set(block, { transformOrigin: "right center" });
      tl.to(block, { scaleX: 0, duration, ease: "power4.inOut" });
      return tl;
    };

    if (animateOnScroll) {
      blockEls.forEach((block, index) => {
        const tl = createBlockRevealAnimation(block, lineEls[index], index);
        tl.pause();
        timelines.push(tl);

        const st = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 90%",
          onEnter: () => tl.restart(),
          onLeaveBack: () => {
            tl.pause(0);
            gsap.set(lineEls[index], { opacity: 0 });
            gsap.set(block, { scaleX: 0, transformOrigin: "left center" });
          },
        });
        triggers.push(st);
      });
    } else {
      blockEls.forEach((block, index) => {
        timelines.push(createBlockRevealAnimation(block, lineEls[index], index));
      });
    }

    return () => {
      timelines.forEach((tl) => tl.kill());
      triggers.forEach((st) => st.kill());
      splitRefs.forEach((split) => split?.revert());

      const wrappers = containerRef.current?.querySelectorAll(".block-line-wrapper");
      wrappers?.forEach((wrapper) => {
        if (wrapper.parentNode && wrapper.firstChild) {
          wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
          wrapper.remove();
        }
      });
    };
  }, [animateOnScroll, delay, blockColor, stagger, duration]);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}
