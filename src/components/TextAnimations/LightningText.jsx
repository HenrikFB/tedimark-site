"use client";
import { useEffect, useRef } from "react";
import { gsap, SplitText, ScrollTrigger } from "@/lib/gsap";

export default function LightningText({
  children,
  useScrollTrigger = false,
  staggerDelay = 0.04,
  repulseInterval = 0,
  lightningColor = "var(--green)",
  as: Tag = "div",
}) {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const el = textRef.current;
    let split;
    let intervalId;
    let st;

    const ctx = gsap.context(() => {
      split = new SplitText(el, { type: "chars, words" });

      const playAnimation = () => {
        split.chars.forEach((char) => {
          char.classList.remove("lightning-char");
        });
        el.classList.remove("lightning-blink");

        void el.offsetWidth;

        split.chars.forEach((char, index) => {
          char.style.animationDelay = `${index * staggerDelay}s`;
          char.classList.add("lightning-char");
        });
        el.classList.add("lightning-blink");
      };

      const startRepulse = () => {
        if (repulseInterval > 0) {
          intervalId = setInterval(playAnimation, repulseInterval * 1000);
        }
      };

      if (useScrollTrigger) {
        st = ScrollTrigger.create({
          trigger: el,
          start: "top 80%",
          onEnter: () => {
            playAnimation();
            startRepulse();
          },
          onLeaveBack: () => {
            if (intervalId) clearInterval(intervalId);
            split.chars.forEach((char) => {
              char.classList.remove("lightning-char");
            });
            el.classList.remove("lightning-blink");
          },
        });
      } else {
        playAnimation();
        startRepulse();
      }
    }, el);

    return () => {
      if (intervalId) clearInterval(intervalId);
      st?.kill();
      ctx.revert();
    };
  }, [useScrollTrigger, staggerDelay, repulseInterval, lightningColor]);

  return (
    <>
      <style jsx global>{`
        @keyframes lightning-flash {
          0% { color: inherit; opacity: 1; }
          1% { color: ${lightningColor}; opacity: 1; }
          15% { opacity: 0.2; }
          30% { opacity: 0.8; }
          40% { color: ${lightningColor}; opacity: 1; }
          55% { opacity: 1; }
          70% { color: inherit; opacity: 0.5; }
          85% { opacity: 1; }
          to { opacity: 1; }
        }

        @keyframes lightning-blink-kf {
          0% { opacity: 1; }
          20% { opacity: 0.3; }
          35% { opacity: 0.85; }
          55% { opacity: 0.2; }
          70% { opacity: 1; }
          to { opacity: 1; }
        }

        .lightning-char {
          animation: lightning-flash 0.4s ease-out forwards;
        }

        .lightning-blink {
          animation: lightning-blink-kf 0.6s ease-out;
        }
      `}</style>
      <Tag ref={textRef}>{children}</Tag>
    </>
  );
}
