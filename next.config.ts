import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true
  },
  
  // Set base path for GitHub Pages (replace 'Devops-Github-Actions' with your repo name if different)
  basePath: '/Devops-Github-Actions',
  
  // Ensure trailing slash is handled properly
  trailingSlash: true,
};

export default nextConfig;
