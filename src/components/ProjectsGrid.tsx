import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

const emptyCarwashSlots = Array.from({ length: 6 }, (_, index) => index + 1);

export default function ProjectsGrid() {
  return (
    <>
      <ul className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>

      <section className="mt-20 border-t border-neutral-200 pt-10 dark:border-neutral-800" aria-labelledby="carwashes-heading">
        <h2 id="carwashes-heading" className="text-lg font-light uppercase tracking-[0.2em]">
          Carwashes
        </h2>
        <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {emptyCarwashSlots.map((slot) => (
            <li key={slot} aria-label={`Empty carwash project slot ${slot}`}>
              <div className="aspect-3/2 bg-neutral-100 transition-colors dark:bg-neutral-900" />
              <div className="mt-3 h-4 w-2/5 bg-neutral-100 transition-colors dark:bg-neutral-900" />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
