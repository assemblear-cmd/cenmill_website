"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type Slide = {
  href: string;
  src: string;
  title: string;
  location: string;
};

export default function HomeGallery({
  slides,
  interval = 4000,
}: {
  slides: Slide[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [slides.length, interval]);

  return (
    <section aria-label="Featured projects">
      <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-100 sm:aspect-16/9 dark:bg-neutral-900">
        {slides.map((slide, i) => (
          <Link
            key={slide.href}
            href={slide.href}
            aria-hidden={i !== index}
            tabIndex={i === index ? 0 : -1}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={`${slide.title} — ${slide.location}`}
              fill
              priority={i === 0}
              sizes="(min-width: 1152px) 1088px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 sm:p-8">
              <p className="text-lg font-normal uppercase tracking-[0.2em] text-white sm:text-xl">
                {slide.title}
              </p>
              <p className="mt-1 text-sm text-white/80">{slide.location}</p>
            </div>
          </Link>
        ))}

        <div className="absolute right-4 bottom-4 flex gap-2 sm:right-6 sm:bottom-6">
          {slides.map((slide, i) => (
            <button
              key={slide.href}
              type="button"
              aria-label={`Show ${slide.title}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
