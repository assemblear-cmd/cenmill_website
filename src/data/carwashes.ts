export type Carwash = {
  slug: string;
  street: string;
  city: string;
  coverImage: string;
};

/**
 * Express Car Wash locations, shown as the "Carwashes" subcategory on /projects.
 * To add a photo, drop a cover image at /public/carwashes/<slug>/cover.jpg
 * (any web format). Image paths are relative to /public and must start with "/".
 */
export const carwashes: Carwash[] = [
  {
    slug: "fullerton",
    street: "520 S Euclid St",
    city: "Fullerton",
    coverImage: "/carwashes/fullerton/cover.jpg",
  },
  {
    slug: "south-gate",
    street: "3900 Firestone Blvd",
    city: "South Gate",
    coverImage: "/carwashes/south-gate/cover.jpg",
  },
  {
    slug: "cudahy",
    street: "7700 Atlantic Ave",
    city: "Cudahy",
    coverImage: "/carwashes/cudahy/cover.jpg",
  },
  {
    slug: "montebello",
    street: "8016 Slauson Ave",
    city: "Montebello",
    coverImage: "/carwashes/montebello/cover.jpg",
  },
  {
    slug: "bellflower",
    street: "15118 Lakewood Blvd",
    city: "Bellflower",
    coverImage: "/carwashes/bellflower/cover.jpg",
  },
  {
    slug: "whittier",
    street: "16010 Whittier Blvd",
    city: "Whittier",
    coverImage: "/carwashes/whittier/cover.jpg",
  },
];
