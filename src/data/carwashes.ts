export type Carwash = {
  slug: string;
  street: string;
  city: string;
  coverImage?: string;
  gallery?: string[];
};

/**
 * Express Car Wash locations, shown as the "Carwashes" subcategory on /projects.
 * A tile with no `coverImage` renders a neutral placeholder. To show photos,
 * drop images at /public/carwashes/<slug>/ and set `coverImage` (the tile) and
 * optionally `gallery` (extra photos). A location with a `gallery` links to
 * /carwashes/<slug>/gallery. Paths are relative to /public and start with "/".
 */
export const carwashes: Carwash[] = [
  {
    slug: "fullerton",
    street: "520 S Euclid St",
    city: "Fullerton",
    coverImage: "/carwashes/fullerton/02.jpg",
    gallery: [
      "/carwashes/fullerton/01.jpg",
      "/carwashes/fullerton/02.jpg",
      "/carwashes/fullerton/03.jpg",
      "/carwashes/fullerton/04.jpg",
      "/carwashes/fullerton/05.jpg",
      "/carwashes/fullerton/06.jpg",
    ],
  },
  { slug: "south-gate", street: "3900 Firestone Blvd", city: "South Gate" },
  { slug: "cudahy", street: "7700 Atlantic Ave", city: "Cudahy" },
  { slug: "montebello", street: "8016 Slauson Ave", city: "Montebello" },
  { slug: "bellflower", street: "15118 Lakewood Blvd", city: "Bellflower" },
  { slug: "whittier", street: "16010 Whittier Blvd", city: "Whittier" },
  {
    slug: "carson",
    street: "20651 Avalon Blvd",
    city: "Carson",
    coverImage: "/carwashes/carson/01.jpg",
    gallery: [
      "/carwashes/carson/01.jpg",
      "/carwashes/carson/02.jpg",
      "/carwashes/carson/03.jpg",
    ],
  },
  {
    slug: "740-washington",
    street: "740 Washington Blvd",
    city: "Montebello",
    coverImage: "/carwashes/740-washington/01.jpg",
    gallery: [
      "/carwashes/740-washington/01.jpg",
      "/carwashes/740-washington/02.jpg",
      "/carwashes/740-washington/03.jpg",
      "/carwashes/740-washington/04.jpg",
    ],
  },
];

export function getCarwash(slug: string): Carwash | undefined {
  return carwashes.find((c) => c.slug === slug);
}
