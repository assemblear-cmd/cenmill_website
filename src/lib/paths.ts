// next/image with `unoptimized` does not prepend basePath to static src strings,
// so image paths from src/data/projects.ts must be prefixed manually.
// NEXT_PUBLIC_BASE_PATH is set in next.config.js ("" locally, "/cenmill_website" in CI).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string): string {
  return `${basePath}${path}`;
}
