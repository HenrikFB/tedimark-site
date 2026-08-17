"use client";
import { useRef, useEffect, useState } from "react";
import { TransitionRouter } from "next-transition-router";
import gsap from "gsap";

const MOBILE_MQ = "(max-width: 768px)";
const MOBILE_DURATION = 0.55;
const MOBILE_EASE = "power3.inOut";

export default function TransitionProvider({ children }) {
  const svgRef = useRef(null);
  const pathsRef = useRef([]);
  const panelRef = useRef(null);
  const isInitialLoad = useRef(true);
  const introTlRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Track viewport reactively so we swap the transition on rotate / resize.
  useEffect(() => {
    const mql = window.matchMedia(MOBILE_MQ);
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  // Set up the intro (initial page-load reveal) and re-init when the layout
  // mode flips. Desktop uses the SVG stroke reveal; mobile uses a solid panel
  // that slides up and off the screen.
  useEffect(() => {
    introTlRef.current?.kill();

    if (isMobile) {
      if (!panelRef.current) return;
      if (isInitialLoad.current) {
        gsap.set(panelRef.current, { yPercent: 0 });
        const tl = gsap.timeline({
          delay: 0.15,
          onComplete: () => {
            isInitialLoad.current = false;
            gsap.set(panelRef.current, { yPercent: 100 });
          },
        });
        introTlRef.current = tl;
        tl.to(panelRef.current, {
          yPercent: -100,
          duration: MOBILE_DURATION,
          ease: MOBILE_EASE,
        });
      } else {
        gsap.set(panelRef.current, { yPercent: 100 });
      }
      return;
    }

    if (!svgRef.current) return;
    const paths = Array.from(svgRef.current.querySelectorAll("path"));
    pathsRef.current = paths;

    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = 0;
      path.setAttribute("stroke-width", "700");
    });

    if (!isInitialLoad.current) {
      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDashoffset: length,
          attr: { "stroke-width": 200 },
        });
      });
      return;
    }

    const introTl = gsap.timeline({
      delay: 0.15,
      onComplete: () => {
        isInitialLoad.current = false;
      },
    });
    introTlRef.current = introTl;

    paths.forEach((path) => {
      const length = path.getTotalLength();
      introTl.to(
        path,
        {
          strokeDashoffset: -length,
          attr: { "stroke-width": 200 },
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(path, { strokeDashoffset: length });
          },
        },
        0
      );
    });
  }, [isMobile]);

  return (
    <TransitionRouter
      auto
      leave={(next) => {
        // MOBILE: slide the solid panel up from below to cover the screen.
        if (isMobile) {
          const tween = gsap.timeline({ onComplete: next });
          gsap.set(panelRef.current, { yPercent: 100 });
          tween.to(panelRef.current, {
            yPercent: 0,
            duration: MOBILE_DURATION,
            ease: MOBILE_EASE,
          });
          return () => tween.kill();
        }
        // DESKTOP: draw the SVG strokes in to cover the screen.
        const tween = gsap.timeline({ onComplete: next });
        pathsRef.current.forEach((path) => {
          tween.to(
            path,
            {
              strokeDashoffset: 0,
              attr: { "stroke-width": 700 },
              duration: 0.8,
              ease: "power2.inOut",
            },
            0
          );
        });
        return () => tween.kill();
      }}
      enter={(next) => {
        if (isInitialLoad.current) {
          next();
          return;
        }
        // MOBILE: continue the panel up and off the top to reveal the page.
        if (isMobile) {
          const tween = gsap.timeline({ onComplete: next });
          tween.to(panelRef.current, {
            yPercent: -100,
            duration: MOBILE_DURATION,
            ease: MOBILE_EASE,
            onComplete: () => gsap.set(panelRef.current, { yPercent: 100 }),
          });
          return () => tween.kill();
        }
        // DESKTOP: draw the SVG strokes out to reveal the page.
        const tween = gsap.timeline({ onComplete: next });
        pathsRef.current.forEach((path) => {
          const length = path.getTotalLength();
          tween.to(
            path,
            {
              strokeDashoffset: -length,
              attr: { "stroke-width": 200 },
              duration: 0.8,
              ease: "power2.inOut",
              onComplete: () => {
                gsap.set(path, { strokeDashoffset: length });
              },
            },
            0
          );
        });
        return () => tween.kill();
      }}
    >
      {isMobile ? (
        <div className="transition-panel" ref={panelRef} aria-hidden="true">
          <div className="transition-panel__half transition-panel__half--blue" />
          <div className="transition-panel__half transition-panel__half--red" />
        </div>
      ) : (
        <div className="transition-svg">
          <svg
            ref={svgRef}
            viewBox="0 0 2453 2535"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M227.549 1818.76C227.549 1818.76 406.016 2207.75 569.049 2130.26C843.431 1999.85 -264.104 1002.3 227.549 876.262C552.918 792.849 773.647 2456.11 1342.05 2130.26C1885.43 1818.76 14.9644 455.772 760.548 137.262C1342.05 -111.152 1663.5 2266.35 2209.55 1972.76C2755.6 1679.18 1536.63 384.467 1826.55 137.262C2013.5 -22.1463 2209.55 381.262 2209.55 381.262"
              stroke="#2563EB"
              strokeWidth="700"
              strokeLinecap="round"
            />
            <path
              d="M1661.28 2255.51C1661.28 2255.51 2311.09 1960.37 2111.78 1817.01C1944.47 1696.67 718.456 2870.17 499.781 2255.51C308.969 1719.17 2457.51 1613.83 2111.78 963.512C1766.05 313.198 427.949 2195.17 132.281 1455.51C-155.219 736.292 2014.78 891.514 1708.78 252.012C1437.81 -314.29 369.471 909.169 132.281 566.512C18.1772 401.672 244.781 193.012 244.781 193.012"
              stroke="#EF4444"
              strokeWidth="700"
              strokeLinecap="round"
            />
          </svg>
        </div>
      )}
      {children}
    </TransitionRouter>
  );
}
