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
    slug: "the-meridian",
    title: "The Meridian",
    year: 2024,
    location: "San Diego, California",
    shortDescription: "A 24-unit mixed-use building organized around a light-filled central courtyard.",
    fullDescription:
      "The Meridian occupies a narrow infill lot at the edge of the historic district. Twenty-four residential units are arranged around a central courtyard that draws daylight deep into the plan and provides cross-ventilation to every home. Board-formed concrete anchors the street facade, while the upper levels step back in stucco and glass to reduce the apparent mass. Ground-floor commercial space activates the sidewalk, and a shared roof terrace opens views toward the bay.",
    coverImage: "/projects/the-meridian/cover.svg",
    gallery: [
      "/projects/the-meridian/01.svg",
      "/projects/the-meridian/02.svg",
      "/projects/the-meridian/03.svg",
      "/projects/the-meridian/04.svg",
    ],
  },
  {
    slug: "park-house",
    title: "Park House",
    year: 2023,
    location: "Portland, Oregon",
    shortDescription: "A single-family residence folded into a sloping site overlooking the city park.",
    fullDescription:
      "Park House negotiates a steep, wooded parcel with a section that steps down the hillside in three half-levels. Living spaces occupy the uppermost floor to capture canopy views, while bedrooms nest into the slope below, insulated by the earth. A continuous cedar screen wraps the volume, filtering western light and giving the house a quiet, unified presence from the street. Rainwater is collected from the single-pitch roof and returned to the landscape through a series of terraced gardens.",
    coverImage: "/projects/park-house/cover.svg",
    gallery: [
      "/projects/park-house/01.svg",
      "/projects/park-house/02.svg",
      "/projects/park-house/03.svg",
      "/projects/park-house/04.svg",
    ],
  },
  {
    slug: "cortland-terrace",
    title: "Cortland Terrace",
    year: 2023,
    location: "Austin, Texas",
    shortDescription: "Eight courtyard townhouses that trade private yards for a generous shared landscape.",
    fullDescription:
      "Cortland Terrace replaces a single suburban lot with eight three-storey townhouses arranged along a planted mews. Each unit opens onto the shared landscape through a double-height loggia, and deep roof overhangs temper the Texas sun. The material palette is deliberately narrow — grey brick, galvanized steel, and white oak — allowing the rhythm of the facades and the movement of shadow to carry the composition. Parking is consolidated below grade, keeping the ground plane entirely pedestrian.",
    coverImage: "/projects/cortland-terrace/cover.svg",
    gallery: [
      "/projects/cortland-terrace/01.svg",
      "/projects/cortland-terrace/02.svg",
      "/projects/cortland-terrace/03.svg",
      "/projects/cortland-terrace/04.svg",
    ],
  },
  {
    slug: "atrium-nine",
    title: "Atrium Nine",
    year: 2022,
    location: "Chicago, Illinois",
    shortDescription: "A nine-storey residential tower built around a full-height glazed atrium.",
    fullDescription:
      "Atrium Nine explores vertical community in a compact urban tower. All circulation is gathered into a glazed atrium on the north face, where open stairs and bridges turn daily movement into casual encounter. Apartments face south, east and west with floor-to-ceiling glazing shaded by perforated aluminum shutters that residents operate themselves, so the elevation changes hour by hour. The concrete structure is left exposed inside, paired with lime-plaster walls and pale timber floors.",
    coverImage: "/projects/atrium-nine/cover.svg",
    gallery: [
      "/projects/atrium-nine/01.svg",
      "/projects/atrium-nine/02.svg",
      "/projects/atrium-nine/03.svg",
      "/projects/atrium-nine/04.svg",
    ],
  },
  {
    slug: "the-larchmont",
    title: "The Larchmont",
    year: 2021,
    location: "Los Angeles, California",
    shortDescription: "A low-rise apartment court that reinterprets the classic Los Angeles bungalow court.",
    fullDescription:
      "The Larchmont takes the bungalow court — one of the city's great housing inventions — and rebuilds it at a slightly higher density. Twelve flats and maisonettes face a long garden room shaded by existing jacarandas, which the design carefully preserves. White stucco volumes are cut by deep loggias and stairways finished in hand-troweled pigmented plaster. The project relies on natural ventilation throughout; no unit requires mechanical cooling despite the climate.",
    coverImage: "/projects/the-larchmont/cover.svg",
    gallery: [
      "/projects/the-larchmont/01.svg",
      "/projects/the-larchmont/02.svg",
      "/projects/the-larchmont/03.svg",
      "/projects/the-larchmont/04.svg",
    ],
  },
  {
    slug: "hollis-court",
    title: "Hollis Court",
    year: 2020,
    location: "Seattle, Washington",
    shortDescription: "A pair of stacked duplexes sharing a quiet entry court on a corner lot.",
    fullDescription:
      "Hollis Court places four homes on a corner lot that previously held one. Two mirrored volumes in dark-stained cedar frame an entry court paved in reclaimed granite setts, giving each household its own front door at grade. Interiors are organized around a top-lit stair that pulls daylight through all three floors — a necessity in the Pacific Northwest winter. The project was built to Passive House standards, with triple glazing and a heat-recovery ventilation system concealed in the roof build-up.",
    coverImage: "/projects/hollis-court/cover.svg",
    gallery: [
      "/projects/hollis-court/01.svg",
      "/projects/hollis-court/02.svg",
      "/projects/hollis-court/03.svg",
      "/projects/hollis-court/04.svg",
    ],
  },
  {
    slug: "vellum-house",
    title: "Vellum House",
    year: 2018,
    location: "Denver, Colorado",
    shortDescription: "A courtyard house wrapped in translucent channel glass that glows at dusk.",
    fullDescription:
      "Vellum House turns inward from a busy arterial street, wrapping its perimeter in translucent channel glass that admits soft, even light while screening the traffic beyond. Rooms open instead onto a sequence of three small courtyards — entry, garden, and bathing — each planted with a single species. At night the envelope reverses, and the house reads as a quiet lantern on the block. The structure is a simple steel frame on a concrete plinth, built on a deliberately modest budget.",
    coverImage: "/projects/vellum-house/cover.svg",
    gallery: [
      "/projects/vellum-house/01.svg",
      "/projects/vellum-house/02.svg",
      "/projects/vellum-house/03.svg",
      "/projects/vellum-house/04.svg",
    ],
  },
  {
    slug: "stoneway-lofts",
    title: "Stoneway Lofts",
    year: 2016,
    location: "Brooklyn, New York",
    shortDescription: "The adaptive reuse of a 1920s bindery into eighteen live-work lofts.",
    fullDescription:
      "Stoneway Lofts converts a four-storey brick bindery into eighteen live-work units while keeping the building's industrial character intact. Existing heavy-timber columns and beams were cleaned and left exposed; new insertions — kitchens, baths, sleeping mezzanines — are built as freestanding plywood furniture that never touches the original envelope. A new steel-and-glass rooftop pavilion houses a shared workshop and opens onto a planted roof with views of the East River. The original painted signage on the north wall was preserved and stabilized.",
    coverImage: "/projects/stoneway-lofts/cover.svg",
    gallery: [
      "/projects/stoneway-lofts/01.svg",
      "/projects/stoneway-lofts/02.svg",
      "/projects/stoneway-lofts/03.svg",
      "/projects/stoneway-lofts/04.svg",
    ],
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
