// GitHub Pages serves this site at the ROOT of the custom domain (expresscarwash.cl),
// so no basePath is needed anywhere. If the custom domain is ever removed and the site
// goes back to https://<user>.github.io/cenmill_website/, restore the conditional:
//   const basePath = process.env.GITHUB_ACTIONS === "true" ? "/cenmill_website" : "";
const basePath = "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
