"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import CommonButton from "./CommonButton";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Careers", href: "/careers" },
  { name: "Insights", href: "/insights" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [activePill, setActivePill] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    opacity: 0,
  });

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const activeHref = navLinks.find((link) => isActiveLink(link.href))?.href;

  const updateActivePill = useCallback(() => {
    if (!activeHref || !navRef.current) {
      setActivePill((current) => ({ ...current, opacity: 0 }));
      return;
    }

    const activeLinkElement = linkRefs.current[activeHref];
    if (!activeLinkElement) {
      return;
    }

    setActivePill({
      x: activeLinkElement.offsetLeft,
      y: activeLinkElement.offsetTop,
      width: activeLinkElement.offsetWidth,
      height: activeLinkElement.offsetHeight,
      opacity: 1,
    });
  }, [activeHref]);

  useEffect(() => {
    updateActivePill();
    window.addEventListener("resize", updateActivePill);

    return () => {
      window.removeEventListener("resize", updateActivePill);
    };
  }, [updateActivePill]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full py-4 transition-colors duration-300 ${
        isScrolled
          ? "bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <Container className="relative flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="relative h-10 w-36 shrink-0">
          <Image
            src="/icons/ttg_logo.png"
            alt="TOTALTECH GLOBAL"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Navigation Links  */}
        <nav
          ref={navRef}
          className="relative hidden items-center rounded-[40px] border border-white/20 bg-white/10 p-[5px] pl-[6px] pr-[25px] shadow-[0_4px_12px_rgba(0,0,0,0.05)] backdrop-blur-[6px] md:flex gap-[20px]"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 rounded-full bg-[#ecfbff] transition-[transform,width,height,opacity] duration-300 ease-out"
            style={{
              width: `${activePill.width}px`,
              height: `${activePill.height}px`,
              opacity: activePill.opacity,
              transform: `translate(${activePill.x}px, ${activePill.y}px)`,
            }}
          />
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              ref={(element) => {
                linkRefs.current[link.href] = element;
              }}
              aria-current={isActiveLink(link.href) ? "page" : undefined}
              className={`relative z-10 inline-flex items-center justify-center rounded-full px-4 py-3 text-[16px] leading-none font-normal transition-colors ${
                isActiveLink(link.href)
                  ? "text-[#1A202C] font-semibold"
                  : "text-[#1A202C] opacity-70 hover:opacity-100"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Section */}
        <div className="flex items-center gap-4">
          <CommonButton
            href="/contact"
            text="Contact Us"
            className="hidden sm:flex"
            icon="/icons/arrow-up-right.png"
          />

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#1A202C] md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu content */}
        {isOpen && (
          <div className="absolute top-full right-6 left-6 mt-4 flex flex-col items-center gap-4 rounded-3xl bg-white p-6 shadow-xl md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-medium transition-colors ${
                  isActiveLink(link.href)
                    ? "rounded-full bg-[#ecfbff] px-4 py-2 text-[#1A202C]"
                    : "text-[#4A5568]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <CommonButton
              href="/contact"
              text="Contact Us"
              className="mt-4 w-full flex justify-center py-4"
              onClick={() => setIsOpen(false)}
            />
          </div>
        )}
      </Container>
    </header>
  );
};


export default NavBar;
