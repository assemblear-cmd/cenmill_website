import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8">
        <div className="flex flex-col gap-8 text-sm text-neutral-500 sm:flex-row sm:items-start sm:justify-between">
          <address className="not-italic leading-relaxed">
            1040 Tenth Avenue, Suite 300
            <br />
            San Diego, CA 92101
          </address>
          <div className="leading-relaxed">
            <a href="tel:+16195550148" className="transition-colors hover:text-neutral-900">
              +1 (619) 555-0148
            </a>
            <br />
            <a
              href="mailto:studio@cenmill.com"
              className="transition-colors hover:text-neutral-900"
            >
              studio@cenmill.com
            </a>
          </div>
          <nav aria-label="Footer">
            <ul className="flex gap-6">
              <li>
                <Link href="/projects" className="transition-colors hover:text-neutral-900">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-neutral-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-neutral-900">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="mt-10 text-xs text-neutral-400">
          © {new Date().getFullYear()} Cenmill Architecture Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
