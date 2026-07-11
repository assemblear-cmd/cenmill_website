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
      <Link
        href={`/projects/${slug}/gallery`}
        className="group relative block aspect-3/2 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900"
        aria-label={`Open the ${project.title} gallery`}
      >
        <Image
          src={assetPath(project.coverImage)}
          alt={`${project.title} — ${project.location}`}
          fill
          priority
          sizes="(min-width: 1152px) 1088px, 100vw"
          className="object-cover transition duration-500 ease-out group-hover:brightness-95"
        />
      </Link>

      <header className="mt-10">
        <h1 className="text-3xl font-normal uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100">
          {project.title}
        </h1>
        <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
          {project.location}
        </p>
        <Link
          href={`/projects/${slug}/gallery`}
          className="mt-4 inline-block text-sm uppercase tracking-[0.2em] text-neutral-500 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:decoration-neutral-700 dark:hover:text-neutral-100"
        >
          View gallery →
        </Link>
      </header>

      <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-800 sm:text-lg dark:text-neutral-200">
        {project.fullDescription}
      </p>

      {project.gallery.length > 0 && (
        <div className="mt-16 space-y-8">
          {project.gallery.map((image, index) => (
            <Image
              key={image}
              src={assetPath(image)}
              alt={`${project.title} — photo ${index + 1}`}
              width={1600}
              height={1067}
              sizes="(min-width: 1152px) 1088px, 100vw"
              className="h-auto w-full bg-neutral-100 dark:bg-neutral-900"
            />
          ))}
        </div>
      )}

      <nav
        aria-label="Adjacent projects"
        className="mt-20 flex items-baseline justify-between border-t border-neutral-200 pt-8 text-sm dark:border-neutral-800"
      >
        {previous ? (
          <Link
            href={`/projects/${previous.slug}`}
            className="text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            ← Previous project
          </Link>
        ) : (
          <span aria-hidden="true" />
        )}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
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
