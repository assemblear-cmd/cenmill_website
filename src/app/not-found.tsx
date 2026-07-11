import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-start justify-center py-24">
      <h1 className="text-3xl font-normal uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100">
        404
      </h1>
      <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
        This page could not be found.
      </p>
      <Link
        href="/projects"
        className="mt-8 text-sm text-neutral-500 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:decoration-neutral-700 dark:hover:text-neutral-100"
      >
        ← Back to projects
      </Link>
    </section>
  );
}
