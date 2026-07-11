"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type Slide = {
  href: string;
  src: string;
  title: string;
  location: string;
};

// Minimum horizontal travel (px) before a release commits to the next slide.
const SWIPE_THRESHOLD = 40;
// Movement (px) needed before we lock the gesture to an axis.
const AXIS_LOCK = 8;

type Drag = {
  dx: number; // current horizontal travel from the touch start
  dir: 1 | -1; // 1 = revealing the next slide, -1 = the previous one
  snapping: boolean; // true once the finger lifts and we animate to rest
  commit: boolean; // true when the release advances the gallery
};

export default function HomeGallery({
  slides,
  interval = 4000,
}: {
  slides: Slide[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  // Bumped on any manual navigation so the auto-advance timer restarts.
  const [interactionCount, setInteractionCount] = useState(0);
  // Non-null while a touch swipe is dragging or snapping.
  const [drag, setDrag] = useState<Drag | null>(null);
  // Suppresses the base crossfade for one frame when a swipe commits, so the
  // freshly-committed slide appears exactly where the overlay left it.
  const [instantSwap, setInstantSwap] = useState(false);

  const isDragging = drag !== null;

  useEffect(() => {
    if (slides.length <= 1 || isDragging) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [slides.length, interval, interactionCount, isDragging]);

  useEffect(() => {
    if (!instantSwap) return;
    const id = requestAnimationFrame(() => setInstantSwap(false));
    return () => cancelAnimationFrame(id);
  }, [instantSwap]);

  function goTo(target: number) {
    setIndex(target);
    setInteractionCount((c) => c + 1);
  }

  const containerRef = useRef<HTMLDivElement>(null);
  const widthRef = useRef(0);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const deltaRef = useRef(0);
  const activeRef = useRef(false);
  const axisRef = useRef<"none" | "x" | "y">("none");
  const swiped = useRef(false);

  function onTouchStart(e: React.TouchEvent) {
    if (drag?.snapping) return; // don't interrupt a snap animation
    activeRef.current = true;
    axisRef.current = "none";
    swiped.current = false;
    deltaRef.current = 0;
    startXRef.current = e.touches[0].clientX;
    startYRef.current = e.touches[0].clientY;
    widthRef.current = containerRef.current?.offsetWidth ?? 0;
  }

  function onTouchMove(e: React.TouchEvent) {
    if (!activeRef.current || slides.length <= 1) return;
    const dx = e.touches[0].clientX - startXRef.current;
    const dy = e.touches[0].clientY - startYRef.current;

    if (axisRef.current === "none") {
      if (Math.abs(dx) < AXIS_LOCK && Math.abs(dy) < AXIS_LOCK) return;
      if (Math.abs(dy) > Math.abs(dx)) {
        // Vertical intent — let the page scroll, stop tracking this touch.
        activeRef.current = false;
        return;
      }
      axisRef.current = "x";
    }

    deltaRef.current = dx;
    if (Math.abs(dx) > 10) swiped.current = true;
    const dir: 1 | -1 = dx < 0 ? 1 : -1;
    setDrag({ dx, dir, snapping: false, commit: false });
  }

  function onTouchEnd() {
    if (!activeRef.current) return;
    activeRef.current = false;
    setDrag((d) => {
      if (!d) return null;
      const width = widthRef.current || 1;
      if (Math.abs(deltaRef.current) > SWIPE_THRESHOLD) {
        // Slide the incoming image fully into view, then commit on transitionend.
        return { dx: -d.dir * width, dir: d.dir, snapping: true, commit: true };
      }
      // Not far enough — send it back off-screen.
      return { dx: 0, dir: d.dir, snapping: true, commit: false };
    });
  }

  function onOverlayTransitionEnd(e: React.TransitionEvent) {
    if (e.propertyName !== "transform" || !drag?.snapping) return;
    if (drag.commit) {
      setInstantSwap(true);
      setIndex((i) => (i + drag.dir + slides.length) % slides.length);
      setInteractionCount((c) => c + 1);
    }
    setDrag(null);
  }

  const width = widthRef.current;
  const incoming = drag ? slides[(index + drag.dir + slides.length) % slides.length] : null;
  const overlayX = drag ? drag.dir * width + drag.dx : 0;

  return (
    <section aria-label="Featured projects">
      <div
        ref={containerRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="relative aspect-4/3 w-full touch-pan-y overflow-hidden bg-neutral-100 select-none sm:aspect-16/9 dark:bg-neutral-900"
      >
        {slides.map((slide, i) => (
          <Link
            key={slide.href}
            href={slide.href}
            aria-hidden={i !== index}
            tabIndex={i === index ? 0 : -1}
            draggable={false}
            onClick={(e) => {
              // Don't follow the link when the touch was a swipe.
              if (swiped.current) e.preventDefault();
            }}
            className={`absolute inset-0 ${
              instantSwap ? "" : "transition-opacity duration-1000 ease-in-out"
            } ${i === index ? "opacity-100" : "pointer-events-none opacity-0"}`}
          >
            <Image
              src={slide.src}
              alt={`${slide.title} — ${slide.location}`}
              fill
              priority={i === 0}
              draggable={false}
              sizes="(min-width: 1152px) 1088px, 100vw"
              className="object-cover"
            />
          </Link>
        ))}

        {incoming && (
          <div
            aria-hidden="true"
            onTransitionEnd={onOverlayTransitionEnd}
            style={{
              transform: `translate3d(${overlayX}px, 0, 0)`,
              transition: drag?.snapping
                ? "transform 300ms cubic-bezier(0.22, 0.61, 0.36, 1)"
                : "none",
              boxShadow: "0 0 40px rgba(0, 0, 0, 0.35)",
            }}
            className="pointer-events-none absolute inset-0 z-10 will-change-transform"
          >
            <Image
              src={incoming.src}
              alt=""
              fill
              draggable={false}
              sizes="(min-width: 1152px) 1088px, 100vw"
              className="object-cover"
            />
          </div>
        )}

        <div className="absolute right-4 bottom-4 z-20 flex gap-2 sm:right-6 sm:bottom-6">
          {slides.map((slide, i) => (
            <button
              key={slide.href}
              type="button"
              aria-label={`Show ${slide.title}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => goTo(i)}
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
