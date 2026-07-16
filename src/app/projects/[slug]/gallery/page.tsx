import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { assetPath } from "@/lib/paths";
import GalleryViewer from "@/components/GalleryViewer";

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
    title: `${project.title} · Gallery`,
    description: project.shortDescription,
  };
}

export default async function GalleryPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const sources = [project.coverImage, ...project.gallery].filter(
    (value, index, all) => all.indexOf(value) === index,
  );
  const images = sources.map((src, index) => ({
    src: assetPath(src),
    alt: `${project.title} — photo ${index + 1}`,
  }));
  const hasStickyBackLink = project.slug === "verdugo";

  return (
    <article>
      <header className="mb-10 flex items-baseline justify-between gap-6 border-b border-neutral-200 pb-6 dark:border-neutral-800">
        <div>
          <h1 className="text-2xl font-normal uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100">
            {project.title}
          </h1>
          <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
            Gallery — {project.location}
          </p>
        </div>
        {hasStickyBackLink ? (
          <div className="fixed right-0 top-28 z-40">
            <Link
              href={`/projects/${project.slug}`}
              className="block border border-r-0 border-neutral-200 bg-white/95 px-5 py-3 text-sm text-neutral-600 shadow-sm backdrop-blur-sm transition-colors hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950/95 dark:text-neutral-300 dark:hover:text-neutral-100"
            >
              Back
            </Link>
          </div>
        ) : (
          <Link
            href={`/projects/${project.slug}`}
            className="shrink-0 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            ← Back to project
          </Link>
        )}
      </header>

      <GalleryViewer images={images} title={project.title} />
    </article>
  );
}
