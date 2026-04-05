"use client";
import { useRef, useState, useCallback, useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "@/lib/gsap";
import Link from "next/link";
import { services } from "@/lib/content";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const navContentRef = useRef(null);
  const tlRef = useRef(null);
  const linkInnerRefs = useRef([]);
  const pathname = usePathname();
  const isOpenRef = useRef(false);
  const isAnimatingRef = useRef(false);

  const closeMenu = useCallback(() => {
    if (!isOpenRef.current || isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(".nav-link-inner", { y: "110%" });
        isAnimatingRef.current = false;
        isOpenRef.current = false;
        setIsAnimating(false);
        setIsOpen(false);
      },
    });

    tl.to(".nav-link-inner", {
      y: "-110%",
      duration: 0.4,
      stagger: 0.02,
      ease: "power3.in",
    });

    tl.to(
      ".nav-items",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.6,
        ease: "power3.inOut",
      },
      "-=0.2"
    );

    tl.to(
      ".nav-bg",
      {
        scaleY: 0,
        duration: 0.6,
        stagger: { each: 0.06, from: "end" },
        ease: "power3.inOut",
      },
      "-=0.4"
    );

    tlRef.current = tl;
  }, []);

  useEffect(() => {
    if (isOpenRef.current) {
      if (tlRef.current) tlRef.current.kill();
      gsap.set(".nav-link-inner", { y: "110%" });
      gsap.set(".nav-items", { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" });
      gsap.set(".nav-bg", { scaleY: 0 });
      isOpenRef.current = false;
      isAnimatingRef.current = false;
      setIsOpen(false);
      setIsAnimating(false);
    }
  }, [pathname]);

  const toggle = useCallback(() => {
    if (isAnimatingRef.current) return;

    if (!isOpenRef.current) {
      isAnimatingRef.current = true;
      isOpenRef.current = true;
      setIsAnimating(true);
      setIsOpen(true);

      const tl = gsap.timeline({
        onComplete: () => {
          isAnimatingRef.current = false;
          setIsAnimating(false);
        },
      });

      tl.to(".nav-bg", {
        scaleY: 1,
        duration: 0.75,
        stagger: 0.08,
        ease: "power3.inOut",
      });

      tl.to(
        ".nav-items",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 0.75,
          ease: "power3.inOut",
        },
        "-=0.5"
      );

      tl.to(
        ".nav-link-inner",
        {
          y: "0%",
          duration: 0.6,
          stagger: 0.04,
          ease: "power3.out",
        },
        "-=0.3"
      );

      tlRef.current = tl;
    } else {
      closeMenu();
    }
  }, [closeMenu]);

  const primaryLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const serviceLinks = services.slice(0, 4);

  return (
    <>
      <nav className="nav-bar">
        <Link href="/" className="nav-logo">
          TeDi<span style={{ color: "var(--green)" }}>Mark</span>
        </Link>
        <button
          className={`nav-toggler ${isOpen ? "open" : ""}`}
          onClick={toggle}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className="nav-content" ref={navContentRef}>
        <div className="nav-bg"></div>
        <div className="nav-bg"></div>
        <div className="nav-bg"></div>
        <div className="nav-bg"></div>

        <div className="nav-items">
          <div className="nav-items-col">
            <div className="nav-socials">
              <a
                href="https://www.linkedin.com/in/henrik-fog-bunzel-894828a5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="nav-link-inner">LinkedIn</span>
              </a>
              <a
                href="https://github.com/HenrikFB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="nav-link-inner">GitHub</span>
              </a>
              <a href="mailto:henrik@fogbunzel.dk">
                <span className="nav-link-inner">Email</span>
              </a>
            </div>
            <div className="nav-legal">
              <a href="#">
                <span className="nav-link-inner">Privacy Policy</span>
              </a>
              <a href="#">
                <span className="nav-link-inner">Terms of Service</span>
              </a>
            </div>
          </div>

          <div className="nav-items-col">
            <div className="nav-primary-links">
              {primaryLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span className="nav-link-inner">{link.label}</span>
                </Link>
              ))}
            </div>
            <div className="nav-secondary-links">
              <p
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: "1rem",
                }}
              >
                Services
              </p>
              {serviceLinks.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                >
                  <span className="nav-link-inner">{s.title}</span>
                </Link>
              ))}
              <Link href="/services">
                <span className="nav-link-inner">View all →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
