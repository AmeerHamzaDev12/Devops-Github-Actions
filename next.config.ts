import type { NextConfig } from "next";

// Check deployment environment
const isGithubPages = process.env.DEPLOY_ENV === 'github-pages';
const isFTPDeploy = process.env.DEPLOY_ENV === 'ftp';

const nextConfig: NextConfig = {
  // Enable static export for all deployments
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Only set basePath for GitHub Pages (FTP doesn't need basePath)
  ...(isGithubPages && {
    basePath: '/Devops-Github-Actions',
    assetPrefix: '/Devops-Github-Actions',
  }),
  
  // Ensure trailing slash is handled properly
  trailingSlash: true,
};

export default nextConfig;
