"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-cream/96 backdrop-blur-[12px] py-4 px-[60px] shadow-[0_1px_0_var(--color-border)]"
            : "py-6 px-[60px]"
        } max-lg:px-8 max-lg:py-5`}
      >
        <Link
          href="/"
          className="font-heading text-[20px] font-normal tracking-[0.04em] text-charcoal no-underline"
        >
          HerCare <span className="text-sage-dark italic">Gynecology</span>
        </Link>

        <ul className="flex gap-10 list-none max-lg:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="no-underline text-text-muted text-[13px] tracking-[0.12em] uppercase font-normal transition-colors duration-300 hover:text-sage-dark"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="text-[12px] tracking-[0.14em] uppercase font-medium py-[11px] px-7 border border-sage-dark text-sage-dark no-underline transition-all duration-300 bg-transparent hover:bg-sage-dark hover:text-warm-white max-lg:hidden"
        >
          Request Appointment
        </Link>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMobileOpen(true)}
          className="hidden max-lg:flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
          aria-label="Open menu"
        >
          <span className="block w-5 h-[1.5px] bg-charcoal" />
          <span className="block w-5 h-[1.5px] bg-charcoal" />
          <span className="block w-5 h-[1.5px] bg-charcoal" />
        </button>
      </nav>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
