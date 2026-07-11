import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carwash",
  description: "Carwash projects by Cenmill.",
};

const emptySlots = Array.from({ length: 6 }, (_, index) => index + 1);

export default function CarwashPage() {
  return (
    <section>
      <h1 className="sr-only">Carwash Projects</h1>
      <ul className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {emptySlots.map((slot) => (
          <li key={slot} aria-label={`Empty project slot ${slot}`}>
            <div className="aspect-3/2 bg-neutral-100 transition-colors dark:bg-neutral-900" />
            <div className="mt-3 h-4 w-2/5 bg-neutral-100 transition-colors dark:bg-neutral-900" />
          </li>
        ))}
      </ul>
    </section>
  );
}
