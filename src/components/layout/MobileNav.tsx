"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-charcoal/40 z-[200] backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Slide-out panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-cream z-[201] transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        <div className="flex justify-between items-center p-8 pb-4">
          <span className="font-heading text-[18px] text-charcoal">
            HerCare <span className="text-sage-dark italic">Gynecology</span>
          </span>
          <button
            onClick={onClose}
            className="bg-transparent border-none cursor-pointer text-charcoal text-2xl p-1"
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-8 pt-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="no-underline text-text-muted text-[13px] tracking-[0.12em] uppercase font-normal py-3 transition-colors duration-300 hover:text-sage-dark border-b border-border"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="px-8 mt-8">
          <Link
            href="/contact"
            onClick={onClose}
            className="block text-center text-[12px] tracking-[0.14em] uppercase font-medium py-4 bg-sage-dark text-warm-white no-underline transition-all duration-300 hover:bg-charcoal"
          >
            Request Appointment
          </Link>
        </div>
      </div>
    </>
  );
}
