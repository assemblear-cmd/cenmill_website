export type Project = {
  slug: string;
  title: string;
  year: number;
  location: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  gallery: string[];
};

/**
 * To add a new project:
 * 1. Put its images into /public/projects/<slug>/ (any web format: jpg, png, svg…)
 * 2. Add an object to this array — the page /projects/<slug> is generated automatically.
 * Image paths are relative to /public and must start with "/".
 */
export const projects: Project[] = [
  {
    slug: "verdugo",
    title: "Verdugo",
    year: 2024,
    location: "Glendale, California",
    shortDescription: "A hillside building wrapped in a continuous white perforated screen.",
    fullDescription:
      "Set against a chaparral hillside, the building presents a single quiet gesture to the street: a white perforated screen that wraps the volume from end to end. The lattice filters the harsh western sun by day and lets the interior glow through after dusk, so the facade is never twice the same. Entry is a slow sequence — a board-marked concrete walk crossing a shallow reflecting pool, set in a drought-tolerant garden of palms, agaves and crushed rock.",
    coverImage: "/projects/verdugo/cover.jpg",
    gallery: [
      "/projects/verdugo/01.jpg",
      "/projects/verdugo/02.jpg",
      "/projects/verdugo/03.jpg",
      "/projects/verdugo/04.jpg",
    ],
  },
  {
    slug: "pegfair",
    title: "Pegfair",
    year: 2018,
    location: "Pasadena, California",
    shortDescription: "A private estate on a wooded hillside with terraced grounds and pool.",
    fullDescription:
      "The estate occupies a broad wooded shelf above the arroyo, its grounds unfolding as a series of terraces among mature pines and palms. A circular motor court anchors the arrival sequence, while the main residence opens on its garden side to stepped lawns and an infinity-edge pool that hangs over the slope. Outbuildings and garden structures are dispersed across the site, keeping the landscape — not any single building — the dominant experience of the place.",
    coverImage: "/projects/pegfair/cover.jpg",
    gallery: [],
  },
  {
    slug: "linda-isle",
    title: "Linda Isle",
    year: 2018,
    location: "Newport Beach, California",
    shortDescription: "A bayfront residence with a private dock on Linda Isle.",
    fullDescription:
      "On a gated island in Newport Harbor, the residence stretches along the seawall to claim the widest possible face to the water. Low hipped roofs step down toward the bay, sheltering a continuous waterside terrace, and a central skylight pulls daylight deep into the plan. The private dock extends the living space onto the harbor itself, mooring the owners' boats a few steps from the door.",
    coverImage: "/projects/linda-isle/cover.jpg",
    gallery: [],
  },
  {
    slug: "hollywell",
    title: "Hollywell",
    year: 2018,
    location: "Glendale, California",
    shortDescription: "A hillside residence developed through physical study models.",
    fullDescription:
      "Hollywell is designed in section: a steep contoured lot resolved into a set of interlocking flat-roofed volumes that step down the slope. Clerestory ribbons slide between the roof planes to bring light into the deepest rooms, and terraces are carved where the volumes shear past one another. The scheme was developed through a series of physical study models — basswood over corrugated topography — letting the massing be tested against the hill before a single drawing was finalized.",
    coverImage: "/projects/hollywell/cover.jpg",
    gallery: [],
  },
  {
    slug: "euclid",
    title: "Euclid",
    year: 2016,
    location: "Southern California",
    shortDescription: "A roadside commercial pavilion behind a colonnade of palms.",
    fullDescription:
      "A commercial project with a deliberately civic roadside presence: a long barrel-vaulted canopy spans the wash tunnel, bracketed by two bold red towers that mark the entrance and exit. A fully glazed arcade opens the working interior to the street, and a dense row of palms paces the frontage like a colonnade. The building treats an everyday program — a drive-through car wash — as an opportunity for landmark-making on the boulevard.",
    coverImage: "/projects/euclid/cover.jpg",
    gallery: [],
  },
  {
    slug: "eve-by-eves",
    title: "Eve by Eve's",
    year: 2015,
    location: "Beverly Hills, California",
    shortDescription: "A double-height fashion boutique interior.",
    fullDescription:
      "A fashion house interior conceived as a sequence of tall, luminous rooms. Paneled white walls rise through two storeys to a mirrored ceiling installation that scatters light down the central aisle, while blackened-steel display frames hold the collections like drawings on a gallery wall. A mezzanine salon overlooks the main floor, and terrazzo underfoot ties the sequence together from entry to fitting rooms.",
    coverImage: "/projects/eve-by-eves/cover.jpg",
    gallery: [],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  previous: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: null, next: null };
  return {
    previous: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
