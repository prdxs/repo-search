const getRepoFromUrl = (url: string): { owner: string; repo: string } => {
  const parts = url.split('/');
  const len = parts.length;
  const owner = parts[len - 2];
  const repo = parts[len - 1];

  return { owner, repo };
};

export default getRepoFromUrl;
