import type { NextConfig } from "next";

// Check if we're in GitHub Pages deployment mode
// GitHub Actions sets GITHUB_ACTIONS=true, but we also check NODE_ENV for safety
const isGithubPages = process.env.GITHUB_ACTIONS === 'true' || 
                     (process.env.NODE_ENV === 'production' && process.env.DEPLOY_ENV === 'github-pages');

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Only set basePath and assetPrefix for GitHub Pages deployment
  ...(isGithubPages && {
    basePath: '/Devops-Github-Actions',
    assetPrefix: '/Devops-Github-Actions',
  }),
  
  // Ensure trailing slash is handled properly
  trailingSlash: true,
};

export default nextConfig;
