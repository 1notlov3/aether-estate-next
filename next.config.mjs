import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isGithubPages = process.env.GITHUB_PAGES === 'true';
const repoName = (process.env.GITHUB_REPOSITORY || '1notlov3/aether-estate-next').split('/')[1];
const basePath = isGithubPages ? `/${repoName}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    unoptimized: true,
  },
  output: isGithubPages ? 'export' : undefined,
  trailingSlash: isGithubPages,
  basePath,
  assetPrefix: isGithubPages ? `${basePath}/` : undefined,
};

export default nextConfig;
