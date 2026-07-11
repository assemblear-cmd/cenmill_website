import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the Cenmill architecture studio.",
};

export default function ContactPage() {
  return (
    <article className="max-w-2xl">
      <h1 className="text-2xl font-light uppercase tracking-[0.2em]">Contact</h1>
      <div className="mt-8 space-y-8 leading-relaxed text-neutral-700">
        <section>
          <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-400">
            Studio
          </h2>
          <address className="mt-2 not-italic">
            1040 Tenth Avenue, Suite 300
            <br />
            San Diego, CA 92101
          </address>
        </section>
        <section>
          <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-400">
            Enquiries
          </h2>
          <p className="mt-2">
            <a
              href="tel:+16195550148"
              className="transition-colors hover:text-neutral-900"
            >
              +1 (619) 555-0148
            </a>
            <br />
            <a
              href="mailto:studio@cenmill.com"
              className="underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900"
            >
              studio@cenmill.com
            </a>
          </p>
        </section>
        <section>
          <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-400">
            Hours
          </h2>
          <p className="mt-2">Monday – Friday, 9:00 – 18:00</p>
        </section>
      </div>
    </article>
  );
}
