import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAdjacentProjects, getProject, projects } from "@/data/projects";
import { assetPath } from "@/lib/paths";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(slug);

  return (
    <article>
      <div className="relative aspect-3/2 w-full bg-neutral-100 dark:bg-neutral-900">
        <Image
          src={assetPath(project.coverImage)}
          alt={`${project.title} — ${project.location}`}
          fill
          priority
          sizes="(min-width: 1152px) 1088px, 100vw"
          className="object-cover"
        />
      </div>

      <header className="mt-10">
        <h1 className="text-2xl font-light uppercase tracking-[0.2em]">
          {project.title}
        </h1>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
          {project.year} — {project.location}
        </p>
      </header>

      <p className="mt-8 max-w-2xl leading-relaxed text-neutral-700 dark:text-neutral-300">
        {project.fullDescription}
      </p>

      <Link
        href={`/projects/${project.slug}/gallery`}
        className="mt-10 inline-block border-b border-neutral-400 pb-1 text-sm uppercase tracking-[0.18em] transition-colors hover:border-neutral-900 dark:border-neutral-600 dark:hover:border-white"
      >
        View gallery →
      </Link>

      <nav
        aria-label="Adjacent projects"
        className="mt-20 flex items-baseline justify-between border-t border-neutral-200 pt-8 text-sm dark:border-neutral-800"
      >
        {previous ? (
          <Link
            href={`/projects/${previous.slug}`}
            className="text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            ← Previous project
          </Link>
        ) : (
          <span aria-hidden="true" />
        )}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            Next project →
          </Link>
        ) : (
          <span aria-hidden="true" />
        )}
      </nav>
    </article>
  );
}
