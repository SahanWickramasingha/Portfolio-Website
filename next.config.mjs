/** @type {import('next').NextConfig} */
const repoName = "Portfolio-Website";

const nextConfig = {
  output: "export",
  distDir: "docs",
  basePath: "/Portfolio-Website",
  assetPrefix: "/Portfolio-Website/",
  images: { unoptimized: true },
};

export default nextConfig;
