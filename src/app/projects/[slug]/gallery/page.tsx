import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
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
    title: `${project.title} Gallery`,
    description: `Gallery for ${project.title} by Cenmill.`,
  };
}

export default async function ProjectGalleryPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const images = project.gallery.length > 0 ? project.gallery : [project.coverImage];

  return (
    <article>
      <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">Gallery</p>
          <h1 className="mt-2 text-2xl font-light uppercase tracking-[0.2em]">{project.title}</h1>
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
        >
          ← Project details
        </Link>
      </header>

      <div className="mt-12 space-y-8 sm:space-y-12">
        {images.map((image, index) => (
          <Image
            key={image}
            src={assetPath(image)}
            alt={`${project.title} — photo ${index + 1}`}
            width={1600}
            height={1067}
            priority={index === 0}
            sizes="(min-width: 1152px) 1088px, 100vw"
            className="h-auto w-full bg-neutral-100 dark:bg-neutral-900"
          />
        ))}
      </div>
    </article>
  );
}
