"use client";
import { useRef, useEffect, useState } from "react";
import { TransitionRouter } from "next-transition-router";
import gsap from "gsap";

const MOBILE_MQ = "(max-width: 768px)";

// Portrait-tuned geometry for phones: two paths snake down a tall/narrow
// canvas so a thick stroke sweep covers the screen without distortion.
const MOBILE_VIEWBOX = "0 0 1080 2340";
const MOBILE_PATHS = [
  {
    d: "M250 -200C250 150 850 250 820 600C790 950 230 1000 260 1350C290 1700 860 1750 800 2100C760 2350 400 2450 400 2540",
    stroke: "#2563EB",
  },
  {
    d: "M830 -200C830 150 230 250 260 600C290 950 850 1000 820 1350C790 1700 220 1750 280 2100C320 2350 680 2450 680 2540",
    stroke: "#EF4444",
  },
];

function getTransitionConfig(isMobile) {
  return isMobile
    ? { leaveWidth: 760, enterWidth: 220, duration: 0.45, leaveEase: "power2.out" }
    : { leaveWidth: 700, enterWidth: 200, duration: 0.8, leaveEase: "power2.inOut" };
}

export default function TransitionProvider({ children }) {
  const svgRef = useRef(null);
  const pathsRef = useRef([]);
  const isInitialLoad = useRef(true);
  const introTlRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Track viewport reactively so we swap geometry on rotate / resize.
  useEffect(() => {
    const mql = window.matchMedia(MOBILE_MQ);
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  // (Re)measure the currently rendered paths whenever the layout mode flips.
  useEffect(() => {
    if (!svgRef.current) return;
    const paths = Array.from(svgRef.current.querySelectorAll("path"));
    pathsRef.current = paths;
    const { leaveWidth, enterWidth, duration } = getTransitionConfig(isMobile);

    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = 0;
      path.setAttribute("stroke-width", String(leaveWidth));
    });

    // Only play the reveal on the very first load. When the mode switches
    // mid-session, just park the paths off-screen so navigation still works.
    if (!isInitialLoad.current) {
      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDashoffset: length,
          attr: { "stroke-width": enterWidth },
        });
      });
      return;
    }

    introTlRef.current?.kill();
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
          attr: { "stroke-width": enterWidth },
          duration,
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
        const { leaveWidth, duration, leaveEase } = getTransitionConfig(isMobile);
        const tween = gsap.timeline({ onComplete: next });
        pathsRef.current.forEach((path) => {
          tween.to(
            path,
            {
              strokeDashoffset: 0,
              attr: { "stroke-width": leaveWidth },
              duration,
              ease: leaveEase,
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
        const { enterWidth, duration } = getTransitionConfig(isMobile);
        const tween = gsap.timeline({ onComplete: next });
        pathsRef.current.forEach((path) => {
          const length = path.getTotalLength();
          tween.to(
            path,
            {
              strokeDashoffset: -length,
              attr: { "stroke-width": enterWidth },
              duration,
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
      <div className="transition-svg">
        {isMobile ? (
          <svg
            ref={svgRef}
            viewBox={MOBILE_VIEWBOX}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {MOBILE_PATHS.map((p) => (
              <path
                key={p.stroke}
                d={p.d}
                stroke={p.stroke}
                strokeWidth="760"
                strokeLinecap="round"
              />
            ))}
          </svg>
        ) : (
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
        )}
      </div>
      {children}
    </TransitionRouter>
  );
}
