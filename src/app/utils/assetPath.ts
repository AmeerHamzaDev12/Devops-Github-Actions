// Utility function to handle asset paths for GitHub Pages
export const getAssetPath = (path: string): string => {
  // Check if we're in GitHub Pages deployment (same logic as next.config.ts)
  const isGithubPages = process.env.GITHUB_ACTIONS === 'true' || 
                       (process.env.NODE_ENV === 'production' && process.env.DEPLOY_ENV === 'github-pages');
  const basePath = isGithubPages ? '/Devops-Github-Actions' : '';
  return `${basePath}${path}`;
};