import Image from "next/image";
import Link from "next/link";
import type { Carwash } from "@/data/carwashes";
import { assetPath } from "@/lib/paths";

export default function CarwashCard({ carwash }: { carwash: Carwash }) {
  const hasGallery = (carwash.gallery?.length ?? 0) > 0;

  const content = (
    <>
      <div className="relative aspect-3/2 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        {carwash.coverImage && (
          <Image
            src={assetPath(carwash.coverImage)}
            alt={`${carwash.street}, ${carwash.city}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 ease-out group-hover:brightness-95"
          />
        )}
      </div>
      <p className="mt-3 text-base text-neutral-800 dark:text-neutral-200">
        {carwash.street}
      </p>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        {carwash.city}
      </p>
    </>
  );

  if (!hasGallery) return <div>{content}</div>;

  return (
    <Link href={`/carwashes/${carwash.slug}/gallery`} className="group block">
      {content}
    </Link>
  );
}
