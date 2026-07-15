import Image from "next/image";
import type { Carwash } from "@/data/carwashes";
import { assetPath } from "@/lib/paths";

export default function CarwashCard({ carwash }: { carwash: Carwash }) {
  return (
    <div>
      <div className="relative aspect-3/2 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <Image
          src={assetPath(carwash.coverImage)}
          alt={`${carwash.street}, ${carwash.city}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <p className="mt-3 text-base text-neutral-800 dark:text-neutral-200">
        {carwash.street}
      </p>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        {carwash.city}
      </p>
    </div>
  );
}
