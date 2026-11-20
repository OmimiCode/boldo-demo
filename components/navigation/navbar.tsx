"use client"

import { useState } from "react"
import Link from "next/link"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <nav
        aria-label="Main navigation"
        className="relative flex items-center justify-between px-6 pt-8 pb-0 sm:px-12 sm:pt-10 lg:px-[100px] lg:pt-14"
      >
        {/* Logo */}
        <Link href="/" aria-label="Boldo — Go to homepage" className="flex items-center gap-2">
          <svg width="42" height="34" viewBox="0 0 42 34" fill="none" aria-hidden="true">
            <rect y="17" width="42" height="17" rx="4" fill="#0A2640" />
            <rect width="20" height="13" rx="4" fill="#0A2640" />
          </svg>
          <span className="font-manrope text-[28px] leading-[34px] font-bold text-dark-blue sm:text-[43.25px]">
            Boldo
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-10 md:flex" role="list">
          <li>
            <Link href="/#numbers" className="font-open-sans text-[16px] leading-[28px] font-semibold text-dark-blue">
              Product
            </Link>
          </li>
          <li>
            <Link href="/#services" className="font-open-sans text-[16px] leading-[28px] font-semibold text-dark-blue">
              Services
            </Link>
          </li>
          <li>
            <Link href="/#about" className="font-open-sans text-[16px] leading-[28px] font-semibold text-dark-blue">
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="rounded-[24px] border-2 border-dark-blue px-10 py-2 font-open-sans text-[16px] leading-[24px] font-bold text-dark-blue transition-colors hover:bg-dark-blue hover:text-white"
            >
              Log In
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true" className={`block h-0.5 w-6 bg-dark-blue transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span aria-hidden="true" className={`block h-0.5 w-6 bg-dark-blue transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span aria-hidden="true" className={`block h-0.5 w-6 bg-dark-blue transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            className="absolute top-full right-0 left-0 z-50 border-t border-dark-blue/10 bg-green px-6 py-6 shadow-lg md:hidden"
          >
            <ul className="flex flex-col gap-5" role="list">
              <li>
                <Link href="/#numbers" className="font-open-sans text-[16px] font-semibold text-dark-blue">Product</Link>
              </li>
              <li>
                <Link href="/#services" className="font-open-sans text-[16px] font-semibold text-dark-blue">Services</Link>
              </li>
              <li>
                <Link href="/#about" className="font-open-sans text-[16px] font-semibold text-dark-blue">About</Link>
              </li>
              <li>
                <Link href="#" className="inline-block w-fit rounded-[24px] border-2 border-dark-blue px-10 py-2 font-open-sans text-[16px] font-bold text-dark-blue">
                  Log In
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
