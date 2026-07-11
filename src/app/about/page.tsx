import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Cenmill is a design, build, and development firm serving the greater Los Angeles area.",
};

export default function AboutPage() {
  return (
    <article className="max-w-2xl">
      <h1 className="text-3xl font-normal uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100">
        About
      </h1>
      <div className="mt-8 space-y-6 text-base leading-relaxed text-neutral-800 sm:text-lg dark:text-neutral-200">
        <p>
          Cenmill is a design, build, and development firm serving the greater
          Los Angeles area. Founded by Artem Golestian in 2009, the studio
          brings designers, engineers, and craftsmen together in one team,
          united by a shared passion for creating exceptional spaces that
          maximize value and innovation.
        </p>
        <p>
          As a full-service design-build firm, we streamline the construction
          process: the people who draw a project are the people who deliver
          it. Working under one roof keeps decisions fast, budgets honest, and
          craftsmanship at the center of every stage — from first sketch to
          final walkthrough.
        </p>
        <p>
          We believe architecture&rsquo;s true purpose is to shape harmonious,
          beautiful spaces where life unfolds — whether the project is a
          hillside residence, a waterfront home, or a building for everyday
          commerce.
        </p>
      </div>
    </article>
  );
}
