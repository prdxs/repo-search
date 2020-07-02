import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  baseUrl: 'https://api.github.com',
  auth: process.env.NEXT_PUBLIC_GH_TOKEN,
});

export default octokit;
