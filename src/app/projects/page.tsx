import type { Metadata } from "next";
import ProjectsGrid from "@/components/ProjectsGrid";
import CarwashCard from "@/components/CarwashCard";
import { carwashes } from "@/data/carwashes";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected residential and mixed-use projects by Cenmill.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-20">
      <section>
        <h1 className="sr-only">Projects</h1>
        <ProjectsGrid />
      </section>

      <section>
        <h2 className="mb-8 text-xs uppercase tracking-[0.3em] text-neutral-500 dark:text-neutral-400">
          Carwashes
        </h2>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {carwashes.map((carwash) => (
            <li key={carwash.slug}>
              <CarwashCard carwash={carwash} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
