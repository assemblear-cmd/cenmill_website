"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/projects") {
    return pathname === "/" || pathname.startsWith("/projects");
  }
  return pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-neutral-200 transition-colors dark:border-neutral-800">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 sm:px-8">
        <Link
          href="/"
          className="text-lg font-light uppercase tracking-[0.35em]"
          onClick={() => setMenuOpen(false)}
        >
          Cenmill
        </Link>

        <div className="ml-auto flex items-center gap-1 md:gap-14">
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-10">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive(pathname, link.href) ? "page" : undefined}
                    className={`text-sm uppercase tracking-[0.2em] transition-colors hover:text-neutral-900 dark:hover:text-white ${
                      isActive(pathname, link.href)
                        ? "text-neutral-900 dark:text-white"
                        : "text-neutral-400 dark:text-neutral-500"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span
              className={`h-px w-6 bg-neutral-900 transition-colors transition-transform dark:bg-neutral-100 ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-neutral-900 transition-colors transition-transform dark:bg-neutral-100 ${
                menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Main"
          className="border-t border-neutral-200 dark:border-neutral-800 md:hidden"
        >
          <ul className="mx-auto w-full max-w-6xl px-6 py-6 sm:px-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(pathname, link.href) ? "page" : undefined}
                  className={`block py-3 text-sm uppercase tracking-[0.2em] ${
                    isActive(pathname, link.href)
                      ? "text-neutral-900 dark:text-white"
                      : "text-neutral-400 dark:text-neutral-500"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
