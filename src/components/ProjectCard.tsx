import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { assetPath } from "@/lib/paths";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative aspect-3/2 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <Image
          src={assetPath(project.coverImage)}
          alt={`${project.title} — ${project.location}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 ease-out group-hover:scale-[1.03] group-hover:brightness-90"
        />
      </div>
      <p className="mt-3 text-sm italic text-neutral-600 transition-colors group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-white">
        {project.title}, {project.year}
      </p>
    </Link>
  );
}
