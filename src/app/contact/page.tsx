import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Cenmill, Inc. — design, build, and development firm in Glendale, California.",
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
            Cenmill, Inc.
            <br />
            2551 North Verdugo Road
            <br />
            Glendale, California
          </address>
        </section>
        <section>
          <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-400">
            Enquiries
          </h2>
          <p className="mt-2">
            <a
              href="tel:+18186962005"
              className="transition-colors hover:text-neutral-900"
            >
              818.696.2005
            </a>
            <br />
            <a
              href="mailto:contact@cenmill.com"
              className="underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900"
            >
              contact@cenmill.com
            </a>
          </p>
        </section>
      </div>
    </article>
  );
}
