export type Carwash = {
  slug: string;
  street: string;
  city: string;
  coverImage?: string;
};

/**
 * Express Car Wash locations, shown as the "Carwashes" subcategory on /projects.
 * A tile with no `coverImage` renders a neutral placeholder. To show a photo,
 * drop a cover image at /public/carwashes/<slug>/cover.jpg (any web format) and
 * set `coverImage` to that path. Paths are relative to /public and start with "/".
 */
export const carwashes: Carwash[] = [
  { slug: "fullerton", street: "520 S Euclid St", city: "Fullerton" },
  { slug: "south-gate", street: "3900 Firestone Blvd", city: "South Gate" },
  { slug: "cudahy", street: "7700 Atlantic Ave", city: "Cudahy" },
  { slug: "montebello", street: "8016 Slauson Ave", city: "Montebello" },
  { slug: "bellflower", street: "15118 Lakewood Blvd", city: "Bellflower" },
  { slug: "whittier", street: "16010 Whittier Blvd", city: "Whittier" },
  { slug: "carson", street: "20651 Avalon Blvd", city: "Carson" },
];
