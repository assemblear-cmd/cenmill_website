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
      <div className="relative aspect-3/2 w-full bg-neutral-100">
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
        <p className="mt-2 text-sm text-neutral-500">
          {project.year} — {project.location}
        </p>
      </header>

      <p className="mt-8 max-w-2xl leading-relaxed text-neutral-700">
        {project.fullDescription}
      </p>

      <div className="mt-16 space-y-8">
        {project.gallery.map((image, index) => (
          <div key={image} className="relative aspect-3/2 w-full bg-neutral-100">
            <Image
              src={assetPath(image)}
              alt={`${project.title} — photo ${index + 1}`}
              fill
              sizes="(min-width: 1152px) 1088px, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      <nav
        aria-label="Adjacent projects"
        className="mt-20 flex items-baseline justify-between border-t border-neutral-200 pt-8 text-sm"
      >
        {previous ? (
          <Link
            href={`/projects/${previous.slug}`}
            className="text-neutral-500 transition-colors hover:text-neutral-900"
          >
            ← Previous project
          </Link>
        ) : (
          <span aria-hidden="true" />
        )}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="text-neutral-500 transition-colors hover:text-neutral-900"
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
