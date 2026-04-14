"use client";
import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { services } from "@/lib/content";
import {
  Brain,
  Zap,
  Code,
  Puzzle,
  Rocket,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import LightningText from "@/components/TextAnimations/LightningText";
import CharReveal from "@/components/TextAnimations/CharReveal";

const serviceIcons = {
  "ai-engineering": Brain,
  automation: Zap,
  "software-development": Code,
  "third-party-tech": Puzzle,
  mvps: Rocket,
  "hardware-iot": Cpu,
  compliance: ShieldCheck,
};

function getTagDimensions(label) {
  const ghost = document.createElement("div");
  ghost.className = "physics-tag";
  ghost.textContent = label;
  ghost.style.position = "absolute";
  ghost.style.visibility = "hidden";
  document.body.appendChild(ghost);
  const size = { width: ghost.offsetWidth, height: ghost.offsetHeight };
  ghost.remove();
  return size;
}

export default function ServicesHover() {
  const sectionRef = useRef(null);
  const matterLoaded = useRef(false);
  const MatterRef = useRef(null);

  useEffect(() => {
    import("matter-js").then((mod) => {
      MatterRef.current = mod.default || mod;
      matterLoaded.current = true;
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const revealEls = section.querySelectorAll(".reveal");
    const revealTweens = [];
    revealEls.forEach((el) => {
      revealTweens.push(
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        })
      );
    });

    const isTouchDevice = window.matchMedia("(hover: none)").matches;
    const serviceEls = section.querySelectorAll(".service-row");
    const cleanups = [];
    cleanups.push(() => revealTweens.forEach((t) => t.scrollTrigger?.kill()));
    let expandedService = null;
    const serviceStates = new Map();

    serviceEls.forEach((service) => {
      const serviceImages = service.querySelectorAll(".service-img");
      const serviceName = service.querySelector("h2");
      const tagLabelsAttr = service.dataset.tags;
      if (!tagLabelsAttr) return;

      gsap.set(serviceImages, { y: "120%" });
      const tagLabels = tagLabelsAttr.split(",");
      const tagSizes = tagLabels.map((l) => getTagDimensions(l));
      const hoverColor = service.dataset.color || "#fff";

      let engine = null;
      let tagElements = [];
      let tagBodies = [];
      let rafId = null;
      let tagsContainer = null;
      let isHovered = false;
      let tagDropTimer = null;

      function createTags() {
        cleanupTags();
        if (!matterLoaded.current || !MatterRef.current) return;
        const Matter = MatterRef.current;
        const { Engine, World, Bodies, Body } = Matter;

        const serviceWidth = service.offsetWidth;
        const serviceHeight = service.offsetHeight;

        tagsContainer = document.createElement("div");
        tagsContainer.className = "tags-container";
        service.appendChild(tagsContainer);

        engine = Engine.create({ gravity: { x: 0, y: 2 } });

        const wt = 20;
        const floorOffset = window.innerWidth < 1000 ? 25 : 50;

        const floor = Bodies.rectangle(
          serviceWidth / 2,
          serviceHeight - floorOffset + wt / 2,
          serviceWidth * 3,
          wt,
          { isStatic: true }
        );
        const leftWall = Bodies.rectangle(-wt / 2, serviceHeight / 2, wt, serviceHeight * 3, { isStatic: true });
        const rightWall = Bodies.rectangle(serviceWidth + wt / 2, serviceHeight / 2, wt, serviceHeight * 3, { isStatic: true });

        World.add(engine.world, [floor, leftWall, rightWall]);

        tagLabels.forEach((label, i) => {
          const tagEl = document.createElement("div");
          tagEl.className = "physics-tag";
          tagEl.textContent = label;
          tagsContainer.appendChild(tagEl);

          const tw = tagSizes[i].width;
          const th = tagSizes[i].height;
          const startX = serviceWidth * 0.25 + Math.random() * serviceWidth * 0.5;
          const startY = -(th / 2) - i * 5;
          const angle = (Math.random() - 0.5) * 0.4;

          const body = Bodies.rectangle(startX, startY, tw, th, {
            chamfer: { radius: th / 2 },
            restitution: 0.15,
            friction: 0.6,
            density: 0.002,
          });

          Body.setAngle(body, angle);
          World.add(engine.world, body);

          gsap.to(tagEl, { opacity: 1, duration: 0.3, delay: i * 0.04, ease: "power2.out" });

          tagElements.push(tagEl);
          tagBodies.push(body);
        });

        function update() {
          Engine.update(engine, 1000 / 60);
          for (let i = 0; i < tagElements.length; i++) {
            const body = tagBodies[i];
            const el = tagElements[i];
            const tw = tagSizes[i].width;
            const th = tagSizes[i].height;
            el.style.transform = `translate(${body.position.x - tw / 2}px, ${body.position.y - th / 2}px) rotate(${body.angle}rad)`;
          }
          rafId = requestAnimationFrame(update);
        }
        rafId = requestAnimationFrame(update);
      }

      function cleanupTags() {
        if (rafId) cancelAnimationFrame(rafId);
        try {
          if (engine && MatterRef.current) MatterRef.current.Engine.clear(engine);
        } catch (e) { /* ignore cleanup errors */ }
        if (tagsContainer) tagsContainer.remove();
        tagElements = [];
        tagBodies = [];
        engine = null;
        rafId = null;
        tagsContainer = null;
      }

      const onEnter = () => {
        isHovered = true;
        const expandedHeight = window.innerWidth < 1000 ? "12rem" : "22rem";

        gsap.killTweensOf(service);
        gsap.killTweensOf(serviceImages);
        gsap.killTweensOf(serviceName);

        gsap.to(service, { height: expandedHeight, duration: 0.75, ease: "elastic.out(1,0.5)" });
        gsap.to(serviceName, { color: hoverColor, duration: 0.25, ease: "power4.out" });
        gsap.to(serviceImages, { y: "-50%", duration: 0.75, ease: "elastic.out(1,0.5)", stagger: 0.075 });

        tagDropTimer = gsap.delayedCall(0.2, () => {
          if (isHovered) createTags();
        });
      };

      const onLeave = () => {
        isHovered = false;
        const collapsedHeight = window.innerWidth < 1000 ? "5rem" : "8rem";

        if (tagDropTimer) tagDropTimer.kill();
        gsap.killTweensOf(service);
        gsap.killTweensOf(serviceImages);
        gsap.killTweensOf(serviceName);

        if (tagElements.length) {
          gsap.to(tagElements, { opacity: 0, duration: 0.25, ease: "power2.out", onComplete: cleanupTags });
        } else {
          cleanupTags();
        }

        gsap.to(serviceName, { color: "var(--text-primary)", duration: 0.25, ease: "power4.out" });
        gsap.to(serviceImages, { y: "120%", duration: 0.75, ease: "elastic.out(1,0.5)", stagger: 0.075 });
        gsap.to(service, { height: collapsedHeight, duration: 0.5, ease: "elastic.out(1,0.75)" });
      };

      serviceStates.set(service, { onEnter, onLeave });

      if (isTouchDevice) {
        const titleEl = service.querySelector(".service-name");
        const onTitleTap = (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (expandedService === service) {
            onLeave();
            expandedService = null;
          } else {
            if (expandedService) {
              const prev = serviceStates.get(expandedService);
              if (prev) prev.onLeave();
            }
            onEnter();
            expandedService = service;
          }
        };
        if (titleEl) titleEl.addEventListener("click", onTitleTap);
        cleanups.push(() => {
          if (titleEl) titleEl.removeEventListener("click", onTitleTap);
          cleanupTags();
        });
      } else {
        service.addEventListener("mouseenter", onEnter);
        service.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          service.removeEventListener("mouseenter", onEnter);
          service.removeEventListener("mouseleave", onLeave);
          cleanupTags();
        });
      }
    });

    if (isTouchDevice && serviceEls.length > 0) {
      const firstService = serviceEls[0];
      const firstState = serviceStates.get(firstService);
      if (firstState) {
        const autoExpandTrigger = ScrollTrigger.create({
          trigger: firstService,
          start: "top 80%",
          once: true,
          onEnter: () => {
            gsap.delayedCall(0.3, () => {
              firstState.onEnter();
              expandedService = firstService;
            });
          },
        });
        cleanups.push(() => autoExpandTrigger.kill());
      }
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      <LightningText useScrollTrigger repulseInterval={10} lightningColor="var(--blue)">
        <div
          className="section-label"
          style={{ color: "var(--blue)", textAlign: "center" }}
        >
          Services
        </div>
      </LightningText>
      <CharReveal animateOnScroll stagger={0.03} duration={0.5}>
        <h2
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "var(--text-secondary)",
            textTransform: "none",
            fontWeight: 400,
            textAlign: "center",
            marginBottom: "3rem",
            maxWidth: "500px",
          }}
        >
          Everything under one roof. No coordination required.
        </h2>
      </CharReveal>

      <p className="services-tap-hint">Tap a service to preview</p>

      {services.map((s) => {
        const Icon = serviceIcons[s.slug] || Code;

        return (
          <div
            key={s.slug}
            className="service-row"
            data-tags={s.tags.join(",")}
            data-color={s.color}
            data-slug={s.slug}
            style={{ cursor: "default" }}
          >
            <div className="service-images">
              {(s.cardColors || [s.color, s.color, s.color]).map(
                (c, i) => (
                  <div
                    key={i}
                    className="service-img"
                    style={{ background: c }}
                  >
                    <Icon
                      className="service-icon"
                      strokeWidth={1.5}
                      color="rgba(255,255,255,0.45)"
                    />
                  </div>
                )
              )}
            </div>
            <div className="service-name">
              <h2>{s.title}</h2>
            </div>
          </div>
        );
      })}
    </section>
  );
}
