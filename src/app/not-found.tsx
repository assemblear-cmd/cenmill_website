import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-start justify-center py-24">
      <h1 className="text-2xl font-light uppercase tracking-[0.2em]">404</h1>
      <p className="mt-4 leading-relaxed text-neutral-500">
        This page could not be found.
      </p>
      <Link
        href="/projects"
        className="mt-8 text-sm text-neutral-500 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900"
      >
        ← Back to projects
      </Link>
    </section>
  );
}
