import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { carwashes, getCarwash } from "@/data/carwashes";
import { assetPath } from "@/lib/paths";
import GalleryViewer from "@/components/GalleryViewer";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return carwashes
    .filter((carwash) => (carwash.gallery?.length ?? 0) > 0)
    .map((carwash) => ({ slug: carwash.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const carwash = getCarwash(slug);
  if (!carwash) return {};
  return { title: `${carwash.street} · Gallery` };
}

export default async function CarwashGalleryPage({ params }: Props) {
  const { slug } = await params;
  const carwash = getCarwash(slug);
  if (!carwash || !carwash.gallery?.length) notFound();

  const sources = [carwash.coverImage, ...carwash.gallery]
    .filter((value): value is string => Boolean(value))
    .filter((value, index, all) => all.indexOf(value) === index);
  const images = sources.map((src, index) => ({
    src: assetPath(src),
    alt: `${carwash.street}, ${carwash.city} — photo ${index + 1}`,
  }));

  return (
    <article>
      <header className="mb-10 flex items-baseline justify-between gap-6 border-b border-neutral-200 pb-6 dark:border-neutral-800">
        <div>
          <h1 className="text-2xl font-normal uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100">
            {carwash.street}
          </h1>
          <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
            Gallery — {carwash.city}
          </p>
        </div>
        <Link
          href="/projects"
          className="shrink-0 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          ← Back to projects
        </Link>
      </header>

      <GalleryViewer images={images} title={carwash.street} />
    </article>
  );
}
