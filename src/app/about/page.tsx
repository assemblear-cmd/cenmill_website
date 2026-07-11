import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Cenmill is an architecture studio focused on urban housing.",
};

export default function AboutPage() {
  return (
    <article className="max-w-2xl">
      <h1 className="text-2xl font-light uppercase tracking-[0.2em]">About</h1>
      <div className="mt-8 space-y-6 leading-relaxed text-neutral-700">
        <p>
          Cenmill is an architecture studio working on residential and mixed-use
          buildings. We design, and often develop, urban housing — from single
          courtyard houses to mid-rise apartment buildings — with the conviction
          that density and quiet domestic life are not opposites.
        </p>
        <p>
          Our projects begin with the section: how light enters, how air moves,
          how a person climbs from the street to their front door. Materials are
          few and left honest — concrete, timber, brick, glass — and detailing is
          reduced until nothing remains to take away.
        </p>
        <p>
          The studio keeps itself deliberately small. Every project is led by a
          principal from first sketch to final site visit, and we take on only
          the work we can draw ourselves.
        </p>
      </div>
    </article>
  );
}
