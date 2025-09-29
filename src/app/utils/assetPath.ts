// Utility function to handle asset paths for different deployments
export const getAssetPath = (path: string): string => {
  // Only GitHub Pages needs basePath, FTP doesn't
  const isGithubPages = process.env.DEPLOY_ENV === 'github-pages';
  const basePath = isGithubPages ? '/Devops-Github-Actions' : '';
  return `${basePath}${path}`;
};