import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Cenmill, Inc. — design, build, and development firm in Glendale, California.",
};

export default function ContactPage() {
  return (
    <article>
      <h1 className="text-center text-3xl font-light uppercase tracking-[0.24em] sm:text-4xl">
        Contact Us
      </h1>

      <div className="mt-14 grid gap-16 lg:grid-cols-2 lg:gap-24">
        <form
          action="mailto:contact@cenmill.com"
          method="post"
          encType="text/plain"
          className="space-y-7"
        >
          <div className="grid gap-7 sm:grid-cols-2">
            <label className="block text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              First Name <span aria-hidden="true">*</span>
              <input
                required
                name="first-name"
                autoComplete="given-name"
                className="mt-2 block w-full border border-neutral-300 bg-transparent px-4 py-3 text-base normal-case tracking-normal text-neutral-900 outline-none transition-colors focus:border-neutral-900 dark:border-neutral-700 dark:text-neutral-100 dark:focus:border-neutral-100"
              />
            </label>
            <label className="block text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              Last Name <span aria-hidden="true">*</span>
              <input
                required
                name="last-name"
                autoComplete="family-name"
                className="mt-2 block w-full border border-neutral-300 bg-transparent px-4 py-3 text-base normal-case tracking-normal text-neutral-900 outline-none transition-colors focus:border-neutral-900 dark:border-neutral-700 dark:text-neutral-100 dark:focus:border-neutral-100"
              />
            </label>
          </div>
          <label className="block text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            Email <span aria-hidden="true">*</span>
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              className="mt-2 block w-full border border-neutral-300 bg-transparent px-4 py-3 text-base normal-case tracking-normal text-neutral-900 outline-none transition-colors focus:border-neutral-900 dark:border-neutral-700 dark:text-neutral-100 dark:focus:border-neutral-100"
            />
          </label>
          <label className="block text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            Subject <span aria-hidden="true">*</span>
            <input
              required
              name="subject"
              className="mt-2 block w-full border border-neutral-300 bg-transparent px-4 py-3 text-base normal-case tracking-normal text-neutral-900 outline-none transition-colors focus:border-neutral-900 dark:border-neutral-700 dark:text-neutral-100 dark:focus:border-neutral-100"
            />
          </label>
          <label className="block text-xs uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            Message <span aria-hidden="true">*</span>
            <textarea
              required
              name="message"
              rows={7}
              className="mt-2 block w-full resize-y border border-neutral-300 bg-transparent px-4 py-3 text-base normal-case tracking-normal text-neutral-900 outline-none transition-colors focus:border-neutral-900 dark:border-neutral-700 dark:text-neutral-100 dark:focus:border-neutral-100"
            />
          </label>
          <button
            type="submit"
            className="border border-neutral-900 bg-neutral-900 px-8 py-3 text-xs uppercase tracking-[0.2em] text-white transition-colors hover:bg-transparent hover:text-neutral-900 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-950 dark:hover:bg-transparent dark:hover:text-white"
          >
            Submit
          </button>
        </form>

        <div className="space-y-10 leading-relaxed text-neutral-700 dark:text-neutral-300">
          <section>
            <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
              Mailing Address
            </h2>
            <address className="mt-3 not-italic">
              Cenmill, Inc.
              <br />
              2551 North Verdugo Road
              <br />
              Glendale, California
            </address>
          </section>
          <section>
            <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
              Enquiries
            </h2>
            <p className="mt-3">
              <a href="tel:+18186962005" className="transition-colors hover:text-neutral-900 dark:hover:text-white">
                818.696.2005
              </a>
              <br />
              <a href="mailto:contact@cenmill.com" className="underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900 dark:decoration-neutral-700 dark:hover:text-white">
                contact@cenmill.com
              </a>
            </p>
          </section>
          <div className="aspect-4/3 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
            <iframe
              title="Cenmill studio location"
              src="https://www.google.com/maps?q=2551+North+Verdugo+Road,+Glendale,+California&output=embed"
              className="h-full w-full border-0 grayscale dark:invert dark:brightness-75"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
