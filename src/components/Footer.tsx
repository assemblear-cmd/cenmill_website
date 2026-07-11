import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8">
        <div className="flex flex-col gap-8 text-sm text-neutral-500 sm:flex-row sm:items-start sm:justify-between dark:text-neutral-400">
          <address className="not-italic leading-relaxed">
            2551 North Verdugo Road
            <br />
            Glendale, California
          </address>
          <div className="leading-relaxed">
            <a
              href="tel:+18186962005"
              className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              818.696.2005
            </a>
            <br />
            <a
              href="mailto:contact@cenmill.com"
              className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              contact@cenmill.com
            </a>
          </div>
          <nav aria-label="Footer">
            <ul className="flex gap-6">
              <li>
                <Link
                  href="/projects"
                  className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="mt-10 text-xs text-neutral-400 dark:text-neutral-500">
          © {new Date().getFullYear()} Cenmill, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
