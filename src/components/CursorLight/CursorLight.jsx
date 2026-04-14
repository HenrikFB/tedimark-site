"use client";
import { useEffect, useRef } from "react";
import LightningText from "@/components/TextAnimations/LightningText";

export default function CursorLight({ ctaHref = "/contact", ctaLabel = "Start a conversation" }) {
  const sectionRef = useRef(null);
  const lottieContainerRef = useRef(null);
  const maskRef = useRef(null);
  const lottieAnimRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const lottieContainer = lottieContainerRef.current;
    const spotlightMask = maskRef.current;
    if (!section || !lottieContainer || !spotlightMask) return;

    let cancelled = false;

    if (lottieAnimRef.current) {
      lottieAnimRef.current.destroy();
      lottieAnimRef.current = null;
    }

    const lottieEl = lottieContainer.querySelector(".lottie-player");
    if (lottieEl) lottieEl.innerHTML = "";

    import("lottie-web").then((lottieModule) => {
      if (cancelled) return;
      const lottie = lottieModule.default;
      if (lottieEl) {
        lottieAnimRef.current = lottie.loadAnimation({
          container: lottieEl,
          renderer: "svg",
          loop: true,
          autoplay: true,
          path: "/lottie/fire.json",
        });
      }
    });

    const isTouchDevice = window.matchMedia("(hover: none)").matches;

    if (isTouchDevice) {
      spotlightMask.style.display = "none";
      return () => {
        cancelled = true;
        if (lottieAnimRef.current) {
          lottieAnimRef.current.destroy();
          lottieAnimRef.current = null;
        }
      };
    }

    const state = { isTracking: false, cursorDetected: false };
    const pos = {
      mouse: {
        target: { x: 0, y: 0 },
        current: { x: 0, y: 0 },
        last: { x: 0, y: 0 },
      },
      lottie: {
        current: { x: 0, y: 0 },
        center: { x: 0, y: 0 },
      },
    };

    function init() {
      const sRect = section.getBoundingClientRect();
      const lRect = lottieContainer.getBoundingClientRect();
      pos.lottie.center.x = lRect.left - sRect.left + lRect.width / 2;
      pos.lottie.center.y = lRect.top - sRect.top + lRect.height / 2;
      pos.mouse.current.x = pos.mouse.target.x = sRect.width / 2;
      pos.mouse.current.y = pos.mouse.target.y = sRect.height / 2;
    }

    function updateCursor(x, y) {
      if (!state.cursorDetected) return;
      pos.mouse.last.x = x;
      pos.mouse.last.y = y;

      const sRect = section.getBoundingClientRect();
      const isInside =
        x >= sRect.left &&
        x <= sRect.right &&
        y >= sRect.top &&
        y <= sRect.bottom;

      if (isInside) {
        pos.mouse.target.x = x - sRect.left;
        pos.mouse.target.y = y - sRect.top;
        state.isTracking = true;
        spotlightMask.classList.add("active");
      } else {
        state.isTracking = false;
        spotlightMask.classList.remove("active");
      }
    }

    const onMouseEnter = (e) => {
      state.cursorDetected = true;
      updateCursor(e.clientX, e.clientY);
    };
    const onMouseMove = (e) => {
      state.cursorDetected = true;
      updateCursor(e.clientX, e.clientY);
    };
    const onScroll = () => {
      if (state.cursorDetected) {
        updateCursor(pos.mouse.last.x, pos.mouse.last.y);
      }
    };

    window.addEventListener("mouseenter", onMouseEnter, { once: true });
    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", init);

    let rafId;
    function animate() {
      pos.mouse.current.x +=
        (pos.mouse.target.x - pos.mouse.current.x) * 0.1;
      pos.mouse.current.y +=
        (pos.mouse.target.y - pos.mouse.current.y) * 0.1;

      section.style.setProperty("--mouse-x", `${pos.mouse.current.x}px`);
      section.style.setProperty("--mouse-y", `${pos.mouse.current.y}px`);

      const targetX = state.isTracking
        ? pos.mouse.current.x - pos.lottie.center.x
        : 0;
      const targetY = state.isTracking
        ? pos.mouse.current.y - pos.lottie.center.y
        : 0;

      pos.lottie.current.x += (targetX - pos.lottie.current.x) * 0.1;
      pos.lottie.current.y += (targetY - pos.lottie.current.y) * 0.1;

      lottieContainer.style.transform = `translate(${pos.lottie.current.x}px, ${pos.lottie.current.y}px)`;

      rafId = requestAnimationFrame(animate);
    }

    setTimeout(init, 100);
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", init);
      if (lottieAnimRef.current) {
        lottieAnimRef.current.destroy();
        lottieAnimRef.current = null;
      }
    };
  }, []);

  return (
    <section className="cursor-light-section" ref={sectionRef}>
      <div className="spotlight-mask" ref={maskRef} />

      <div className="lottie-container" ref={lottieContainerRef}>
        <div className="lottie-player" />
        <div className="fire-glow" />
      </div>

      <LightningText useScrollTrigger repulseInterval={6} lightningColor="var(--green)">
        <h2>
          Ready to build
          <br />
          something{" "}
          <span style={{ color: "var(--blue)" }}>extra</span>
          <span style={{ color: "var(--red)" }}>ordi</span>
          <span style={{ color: "var(--green)" }}>nary</span>?
        </h2>
      </LightningText>

      <p className="cta-text">
        Tell us about your project and we&apos;ll get back with a plan.
      </p>

      <a href={ctaHref} className="cta-button">
        {ctaLabel} <span>→</span>
      </a>
    </section>
  );
}
