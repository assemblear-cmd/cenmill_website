import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Cenmill, Inc. — design, build, and development firm in Glendale, California.",
};

const mapSrc =
  "https://maps.google.com/maps?q=2551%20North%20Verdugo%20Road%2C%20Glendale%2C%20CA&z=14&output=embed";

export default function ContactPage() {
  return (
    <article>
      <h1 className="text-3xl font-normal uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100">
        Contact Cenmill
      </h1>

      <div className="mt-12 grid gap-14 lg:grid-cols-2">
        <div>
          <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            Send an email
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-800 dark:text-neutral-200">
            Please fill out the form below to contact the office of Cenmill, Inc.
          </p>
          <ContactForm />
        </div>

        <div>
          <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
            Mailing address
          </h2>
          <address className="mt-4 text-base not-italic leading-relaxed text-neutral-800 dark:text-neutral-200">
            2551 North Verdugo Road
            <br />
            Glendale, California
          </address>
          <p className="mt-6">
            <a
              href="tel:+18186962005"
              className="text-base text-neutral-800 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900 dark:text-neutral-200 dark:decoration-neutral-700 dark:hover:text-neutral-100"
            >
              818.696.2005
            </a>
          </p>

          <div className="mt-8 aspect-4/3 w-full overflow-hidden border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
            <iframe
              title="Map of the Cenmill studio location"
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
