import Link from "next/link";
import HomeGallery from "@/components/HomeGallery";
import { projects } from "@/data/projects";
import { assetPath } from "@/lib/paths";

export default function HomePage() {
  const slides = projects.map((project) => ({
    href: `/projects/${project.slug}`,
    src: assetPath(project.coverImage),
    title: project.title,
    location: project.location,
  }));

  return (
    <div className="space-y-20">
      <section>
        <h1 className="sr-only">Cenmill — selected projects</h1>
        <HomeGallery slides={slides} />
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="border border-neutral-900 px-10 py-4 text-xs uppercase tracking-[0.25em] text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white dark:border-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-900"
          >
            View all projects
          </Link>
        </div>
      </section>

      <section className="border-t border-neutral-200 pt-14 text-center dark:border-neutral-800">
        <h2 className="text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
          Contact us
        </h2>
        <address className="mt-6 text-lg not-italic text-neutral-900 dark:text-neutral-100">
          2551 North Verdugo Road, Glendale, California
        </address>
        <p className="mt-2 text-base text-neutral-600 dark:text-neutral-300">
          <a
            href="tel:+18186962005"
            className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            818.696.2005
          </a>
          <span className="mx-3 text-neutral-300 dark:text-neutral-600">/</span>
          <a
            href="mailto:contact@cenmill.com"
            className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
          >
            contact@cenmill.com
          </a>
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="text-sm uppercase tracking-[0.2em] text-neutral-500 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:decoration-neutral-700 dark:hover:text-neutral-100"
          >
            Get in touch →
          </Link>
        </div>
      </section>
    </div>
  );
}
